/*
    file
    1. загрузить rawHtml

    includes/stories.js
    1. rawHtml to validHtml
    3. validHtml to rawJson

*/
module.exports = {
    call : {
        'getHtml' : {
            call: 'file',
            params: {
                path: '/Users/makishvili/projects/storymill-export/desktop.bundles/list/king.html',
                toState : { rawHtml : '.[0]' }
            }
        },
        'html2json' : {
            deps: 'getHtml',
            guard: 'rawHtml',
            params : function(ctx) {
                return { rawHtml : ctx.state('rawHtml') };
            },
            call: 'includes/html2json.js'
        }
    },

    done : function(res, _, promise) {
        promise.fulfill(getStoryJSON(res.html2json));
    }
};

function getStoryJSON(stories) {
    return stories ?
        stories.map(function(para) {
            return {
                tag : para.attribs.class,
                text: para.children[0].data
            };
        }) :
        [];
}
