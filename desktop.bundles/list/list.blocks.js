var jspath = require('jspath');

module.exports = {
    call : {
        'stories' : {
            call: 'includes/stories.js',
            params: {
                filePath: '/Users/makishvili/projects/storymill-export/desktop.bundles/list/king.html'
            }
        }
    },

    done : function(res, _, promise) {
        promise.fulfill(getStoryJSON(res.stories));
    }
};

function getStoryJSON(stories) {
    var text = [];

    if (stories && !stories.error) {
        var paragraphs = jspath.apply('.children[1].children', stories[0]);
        text = paragraphs.map(function(para) {
            return {
                tag : para.attribs.class,
                text: para.children[0].data
            };
        })
    }

    return text;
}
