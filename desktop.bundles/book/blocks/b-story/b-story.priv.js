blocks['b-story'] = function(story) {
    var error = false;

    var getElem = function(tag) {
        switch (tag) {
            case 'p1':
                return 'chapter';
                break;
            case 'p2':
                return 'text';
                break;
            default:
                error = true;
                return 'error';
                break;
        }
    }

    return {
        block: 'b-story',
        mods: {error: error},
        content: [
            {
                elem: 'title',
                attrs: {id: 'title'},
                content: story.title
            },
            {
                elem: 'author',
                attrs: {id: 'author'},
                content: story.author
            },
            story.body.map(function(para){
                return {
                    elem: getElem(para.tag),
                    attrs: {id: 'p' + para.id},
                    content: para.text
                }
            })
        ]
    };
};