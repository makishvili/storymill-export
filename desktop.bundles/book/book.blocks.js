var storymill = require('storymill/storymill');
var textsCfg = require('storymill/config').get('texts');

module.exports = {
    call : {
        'story' : {
            params : function(ctx) {
                var query = ctx.request().query.id;
                var filePath = textsCfg.dir + query + '/' + query + '.sm.html';

                return {
                    dir: query,
                    path: filePath
                };
            },
            call: function(params, promise) {
                promise.fulfill(storymill.getStoryJson(params));
            }
        }
    }
};
