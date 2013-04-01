var toc = require('storymill/toc');

module.exports = {
    call : {
        'list' : {
            params: {
                textsFolder: '/Users/makishvili/projects/storymill-export/text'
            },
            call: function(params, promise) {
                promise.fulfill(toc.getTocList(params));
            }
        }
    }
};
