var toc = require('storymill/list');
var textsCfg = require('storymill/config').get('texts');

module.exports = {
    call : {
        'list' : {
            params: {
                textsFolder: textsCfg.dir
            },
            call: function(params, promise) {
                promise.fulfill(toc.getBookList(params));
            }
        }
    }
};
