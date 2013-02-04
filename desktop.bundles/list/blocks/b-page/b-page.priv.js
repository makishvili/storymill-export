blocks['b-page'].title = function() {
    return 'Мои истории';
};

blocks['b-page'].content = function(data) {
    console.log(JSON.stringify(data));

    return {
        block   : 'b-stories',
        content : 'Hello list'
    };
};