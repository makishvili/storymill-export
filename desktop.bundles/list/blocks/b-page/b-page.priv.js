var jspath = require('jspath');

blocks['b-page'].title = function() {
    return 'Мои книги';
};

blocks['b-page'].content = function(data) {
    var completed = jspath.apply('.{.status === "completed"}', data.list);
    var uncompleted = jspath.apply('.{.status !== "completed"}', data.list);

    return [
        {
            block: 'b-menu',
            mix: [{block: 'b-stories'}],
            content:[
                completed.map(function(dir){
                    return {
                        block: 'b-menu',
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            mix: [{block: 'b-stories', elem: 'link'}],
                            url: 'book/?id=' +dir.name,
                            content: dir.title
                        }
                    };
                }),
                {
                    elem: 'title',
                    mix: [{block: 'b-stories', elem: 'title'}],
                    content: 'Незаконченные:'
                },
                uncompleted.map(function(dir){
                    return {
                        block: 'b-menu',
                        elem: 'item',
                        content: {
                            block: 'b-link',
                            mix: [{block: 'b-stories', elem: 'link'}],
                            url: 'book/?id=' +dir.name,
                            content: dir.title
                        }
                    };
                })
            ]
        }
    ]
};