blocks['b-page'].title = function() {
    return 'Мои истории';
};

blocks['b-page'].content = function(data) {
    return {
        block   : 'b-stories',
        content : data.map(function(para){
            return {
                elem: 'para',
                elemMods: {'type': para.tag},
                content: para.text
            }
        })
    };
};