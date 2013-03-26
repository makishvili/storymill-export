/*
    file
    1. загрузить rawHtml

    includes/stories.js
    1. rawHtml to validHtml
    3. validHtml to rawJson

*/
module.exports = {
    call : {
        'rawHtml' : {
            call: 'file',
            params: {
                path: '/Users/makishvili/projects/storymill-export/desktop.bundles/list/king.html'
            },
            toState : { htmlString : '.[0]' }
        },
        'rawJson' : {
            deps: 'rawHtml',
            guard: 'htmlString',
            call: 'includes/rawJson.js',
            params : function(ctx) {
                return { htmlString : ctx.state('htmlString') };
            },
            pointer: '.[0].children[1].children'
        }
    },

    done : function(res, _, promise) {
        promise.fulfill(getStoryJSON(res.rawJson));
    }
};

function getStoryJSON(parasArr) {
    var bemjson = [];

    if (parasArr) {
        bemJson = parasArr.map(function(para) {
            return {
                tag : para.attribs.class,
                text: para.children[0].data
            };
        })
    }

    return bemjson;
}
