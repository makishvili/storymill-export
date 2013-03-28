blocks['b-page'].title = function() {
    return 'Один текст';
};

blocks['b-page'].content = function(data) {
    var chapters = data.story.filter(function(para){
        return para.tag === 'p3'
    });

    return [
        blocks['b-toc'](chapters),
        blocks['b-story'](data.story)
    ]
};