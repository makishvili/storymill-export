var inherit = require('inherit'),
    assetsCfg = require('../config').get('assets'),
    logger = require('../logger'),
    path = require('path'),
    jspath = require('jspath'),
    Vow = require('vow')
    storymill = require('storymill/storymill');

module.exports = inherit(require('../handler'), {
    _onDataJSON : function(dataJSON) {
        var mode = this._getMode();
        if(mode === 'json') {
            return this.__base(dataJSON);
        }

        var bemJSONHtmlPromise = this._getBemJSON(dataJSON, 'html');
        var bemJSONFb2Promise = this._getBemJSON(dataJSON, 'fb2');

        if(mode === 'bemjson') {
            return bemJSONPromise.then(function(res) {
                return this._prettyJSON(res);
            }.bind(this));
        }


        return Vow
                .all([
                    bemJSONHtmlPromise,
                    bemJSONFb2Promise,
                    this._getTemplate()
                ])
                .spread(
                    function(bemJSONHtml, bemJSONFb2, template) {
                        var fileName = (this._req.url === '/') && 'list' || this._req.query.id || false;
                        if (fileName) {
                            var files = [
                                {
                                    type: 'html',
                                    name: fileName,
                                    content: this._applyTemplate(template, bemJSONHtml)
                                },
                                {
                                    type: 'fb2',
                                    name: fileName,
                                    content: this._applyTemplate(template, bemJSONFb2)
                                },
                                {
                                    type: 'pdf',
                                    name: fileName
                                }
                            ];


                            files.forEach(function(file){
                                storymill.writeFile({
                                    name: file.name,
                                    type: file.type,
                                    content: file.content || ''
                                });
                            });
                        }

                        // Возвращаю контент для html-файла
                        return jspath.apply('.{.type === "html"}.content[0]', files);

                    }.bind(this)
                );
    },

    _getTemplate : function() {
        return assetsCfg.getPageAsset(this._path, 'bemhtml');
    },

    _getBemJSON : function(data, type) {
        return assetsCfg
                    .getPageAsset(this._path, (type === 'fb2') ? 'priv.fb2' : 'priv')
                    .then(function(priv) {
                            priv['i-global'].params(this._getGlobalParams());
                            var res = priv['b-page'](data);
                            return !!this._req.param('body')? res.content : res;
                        }.bind(this)
                    );
    },

    _getGlobalParams : function() {
        var domain = [
            'host' in assetsCfg? assetsCfg.host : ('//' + this._req.host),
            assetsCfg.port? ':' + assetsCfg.port : ''
        ].join('');

        return {
            domain : domain,
            assetsPath : domain + '/' + this._path + '/_' + path.basename(this._path)
        };
    },

    _applyTemplate : function(template, bemJSON) {
        var startTime = Date.now();
        logger.verbose('BEMHTML running');
        var res = template.BEMHTML.apply(bemJSON);
        logger.verbose('BEMHTML completed at %d ms', Date.now() - startTime);
        return res;
    }
});