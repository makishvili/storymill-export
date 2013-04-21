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
                blocks['b-page']['page-sequence'](story)
            ]
        }
    ];
};

blocks['b-page']['layout-master-set'] = blocks['b-page']['page-sequence'] = blocks['b-page']['page-sequence-master'] = function() {};
