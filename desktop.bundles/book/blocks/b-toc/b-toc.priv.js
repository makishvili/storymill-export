blocks['b-toc'] = function(chapters) {

    chapters = chapters.map(function(chapter){
        return {
            elem: 'chapter',
            content: {
                block: 'b-link',
                mix: [{block: 'b-toc', elem: 'link'}],
                url: '#p' + chapter.id,
                content: chapter.text
            }
        }
    });

    return {
        block: 'b-toc',
        js: true,
        content: [
            {
                elem: 'title',
                content: 'Оглавление'
            },
            chapters
        ]
    };
};