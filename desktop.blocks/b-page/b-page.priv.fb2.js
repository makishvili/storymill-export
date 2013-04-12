blocks['b-page'] = function(data) {
    var story = data.story;

    return [
        {
            block: 'xml-prolog'
        },
        {
            tag : 'FictionBook',
            attrs: {xmlns: 'http://www.gribuser.ru/xml/fictionbook/2.0'},
            content : [
                blocks['b-page'].styles(),
                blocks['b-page'].description(story),
                blocks['b-page'].body(story)
            ]
        }
    ];
};

blocks['b-page'].styles = blocks['b-page'].description = blocks['b-page'].body = function() {};
