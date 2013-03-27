blocks['b-page'].title = function() {
    return 'Список текстов';
};

blocks['b-page'].content = function(data) {
    var links = data.list.map(function(dir){
        return {
            block: 'b-menu',
            elem: 'item',
            content: {
                block: 'b-link',
                url: dir,
                content: dir
            }
        };
    });

    return {
        block: 'b-menu',
        content: links
    }
};