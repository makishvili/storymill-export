var toc = require('storymill/list');
var smCfg = require('storymill/config').get('storymill');

module.exports = {
    call : {
        'list' : {
            params: {
                textsFolder: smCfg.path.import
            },
            call: function(params, promise) {
                promise.fulfill(toc.getBookList(params));
            }
        }
    }
};
