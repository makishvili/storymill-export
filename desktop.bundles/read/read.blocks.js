var storymill = require('storymill/storymill');

module.exports = {
    call : {
        'story' : {
            params : function(ctx) {
                var query = ctx.request().query.name;
                var filePath = '/Users/makishvili/projects/storymill-export/text/' + query + '/' + query + '.sm.html';

                return {
                    path: filePath
                };
            },
            call: function(params, promise) {
                promise.fulfill(storymill.getStoryJson(params.path));
            }
        }
    }
};
