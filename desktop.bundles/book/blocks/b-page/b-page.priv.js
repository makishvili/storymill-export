blocks['b-page'].title = function() {
    return 'Книга';
};

blocks['b-page'].content = function(data) {
    var story = data.story;

    var chapters = story.body.filter(function(para){
        return para.tag === 'p1'
    });

    return [
        {
            block: 'b-ui',
            content: {
                elem: 'toolbar',
                content: [
                    {
                        block: 'b-link',
                        mix: [
                            {block: 'b-ui', elem: 'top'},
                            {block: 'b-ui', elem: 'link'}
                        ],
                        url: '#title',
                        content: 'В начало'
                    },
                    blocks['b-export'](story),
                    blocks['b-toc'](chapters),
                    {
                        block: 'b-link',
                        mix: [
                            {block: 'b-ui', elem: 'bottom'},
                            {block: 'b-ui', elem: 'link'}
                        ],
                        url: '/',
                        content: 'Читать другие тексты'
                    },
                ]
            }
        },
        blocks['b-story'](story)
    ]
};