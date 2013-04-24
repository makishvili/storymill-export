blocks['b-page'] = function(data) {
    var story = data.story;

    return [
        {
            block: 'xml-prolog'
        },
        {
            tag : 'fo:root',
            attrs: { 'xmlns:fo': 'http://www.w3.org/1999/XSL/Format' },
            content : [
                blocks['b-page']['layout-master-set'](),

                blocks['b-page']['page-sequence'].cover(story),
                blocks['b-page']['page-sequence'].chapters(story)
            ]
        }
    ];
};

