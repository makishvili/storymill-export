blocks['b-page'].title = function() {
    return 'Книга';
};

blocks['b-page'].content = function(data) {
    var chapters = data.story.filter(function(para){
        return para.tag === 'p3'
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
                        url: '#para-0',
                        content: 'В начало'
                    },
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
        blocks['b-story'](data.story)
    ]
};