var toc = require('storymill/list');

module.exports = {
    call : {
        'list' : {
            params: {
                textsFolder: '/Users/makishvili/projects/storymill-export/text'
            },
            call: function(params, promise) {
                promise.fulfill(toc.getBookList(params));
            }
        }
    }
};
