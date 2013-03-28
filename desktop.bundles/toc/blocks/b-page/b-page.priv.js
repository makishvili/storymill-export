blocks['b-page'].title = function() {
    return 'Список текстов';
};

blocks['b-page'].content = function(data) {
    return {
        block: 'b-menu',
        content: data.list.map(function(dir){
            return {
                block: 'b-menu',
                elem: 'item',
                content: {
                    block: 'b-link',
                    url: 'read/?name=' +dir.name,
                    content: dir.title
                }
            };
        })
    }
};