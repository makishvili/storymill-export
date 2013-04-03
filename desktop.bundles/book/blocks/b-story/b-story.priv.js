blocks['b-story'] = function(story) {
    var error = [];

    var getElem = function(para) {
        switch (para.tag) {
            case 'p1':
                return 'chapter';
                break;
            case 'p2':
                return 'text';
                break;
            default:
                error.push(para.id);
                return 'error';
                break;
        }
    }

    // Здесь, а не по месту, чтобы создавался error
    var elems = story.body.map(function(para){
        return {
            elem: getElem(para),
            attrs: {id: 'p' + para.id},
            content: para.text
        }
    })


    return [
        (error.length !== 0) && {
            block: 'b-error',
            content: error.map(function(errorId){
                return {
                    block: 'b-link',
                    url: '#p' + errorId,
                    content: '#p' + errorId + ', '
                }
            })
        },
        {
            block: 'b-story',
            mods: {error: (error.length !== 0) ? 'true' : 'false'},
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
                elems
            ]
        }
    ];
};