blocks['b-toc'] = function(chapters) {

    chapters = chapters.map(function(chapter){
        return {
            elem: 'chapter',
            content: {
                block: 'b-link',
                mix: [{block: 'b-toc', elem: 'link'}],
                url: '#para-' + chapter.id,
                content: chapter.text
            }
        }
    });

    return {
        block: 'b-toc',
        content: chapters
    };
};