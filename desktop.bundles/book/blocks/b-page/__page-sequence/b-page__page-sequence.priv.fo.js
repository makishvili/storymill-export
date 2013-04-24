blocks['b-page']['page-sequence'] = function() {}

blocks['b-page']['page-sequence'].cover = function(story) {
    var getPageParams = function(type) {
        return {
            'font-family': "Georgia",
            'font-size': type === 'title' ? "26pt" : '12pt',
            'text-align': "center",
            'margin-top': "36pt"
        }
    }

    return {
        tag: 'fo:page-sequence',
        attrs: {'master-reference': "cover"},
        content: {
            tag: 'fo:flow',
            attrs: {'flow-name': "xsl-region-body"},
            content: [
                {
                    tag: 'fo:block',
                    attrs: getPageParams('title'),
                    content: story.title
                },
                {
                    tag: 'fo:block',
                    attrs: getPageParams('author'),
                    content: story.author
                },
            ]
        }
    }

}

blocks['b-page']['page-sequence'].chapters = function(story) {

    var getPageSequences = function() {
        var sequences = [];
        var sequencesIndex = -1;

        story.body.map(function(para){
            if (para.tag === 'p1') {
                sequencesIndex++;
                // Глава
                sequences[sequencesIndex] = {
                    tag: 'fo:page-sequence',
                    attrs: { 'master-reference': 'contents' },
                    content: {
                        tag: 'fo:flow',
                        attrs: { 'flow-name': 'xsl-region-body' },
                        content: [
                            // Глава
                            {
                                tag: 'fo:block',
                                attrs: {
                                    'font-family': "Georgia",
                                    'font-size': "16pt",
                                    'margin-bottom': "0.8cm",
                                    'text-align': "center"
                                },
                                content: para.text
                            }
                        ]
                    }
                };
            } else if (para.tag === 'p2') {
                // Параграф
                sequences[sequencesIndex].content.content.push({
                    tag: 'fo:block',
                    attrs: {
                        'font-family': "Georgia",
                        'margin-top': "0.3cm",
                        'text-indent': "0.8cm"
                    },
                    content: para.text
                })
            }
        });

        return sequences;
    }

    return getPageSequences();
};
