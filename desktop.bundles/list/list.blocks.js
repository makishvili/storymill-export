module.exports = {
    call : {
        'stories' : {
            call: 'includes/stories.js',
            params: {
                filePath: '/Users/makishvili/projects/storymill-export/desktop.bundles/list/king.html'
            },
            pointer: '.children[1].children'
        }
    },

    done : function(res, _, promise) {
        promise.fulfill(getStoryJSON(res.stories));
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
