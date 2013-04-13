var storymill = require('storymill/storymill');
var smCfg = require('storymill/config').get('storymill');

module.exports = {
    call : {
        'story' : {
            params : function(ctx) {
                var query = ctx.request().query.id;
                var filePath = smCfg.path.import + query + '/' + query + '.sm.html';

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
