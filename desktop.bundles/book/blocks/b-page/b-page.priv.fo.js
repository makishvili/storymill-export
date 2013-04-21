blocks['b-page']['layout-master-set'] = function() {
    return {
        tag : 'fo:layout-master-set',
        content : [
            {
                tag : 'fo:simple-page-master',
                attrs: {
                    'master-name': 'cover',

                    'page-width': '21.0cm',
                    'page-height': '29.7cm',

                    'margin-top': '0.5cm',
                    'margin-bottom': '0.5cm',
                    'margin-left': '1cm',
                    'margin-right': '0.5cm'
                },
                content: {
                    tag: 'fo:region-body',
                    attrs: { margin: '3cm' }
                }
            },
            {
                tag : 'fo:simple-page-master',
                attrs: {
                    'master-name': 'leftPage',

                    'page-width': '21.0cm',
                    'page-height': '29.7cm',

                    'margin-top': '0.5cm',
                    'margin-bottom': '0.5cm',
                    'margin-left': '1cm',
                    'margin-right': '2cm'
                },
                content: [
                    {
                        tag: 'fo:region-body',
                        attrs: {
                            'margin-top': '1.1cm',
                            'margin-bottom': '1.1cm'
                        }
                    },
                    {
                        tag: 'fo:region-before',
                        attrs: { extent: '1cm' }

                    },
                    {
                        tag: 'fo:region-after',
                        attrs: { extent: '1cm' }
                    }
                ]
            },
            {
                tag : 'fo:simple-page-master',
                attrs: {
                    'master-name': 'rightPage',

                    'page-width': '21.0cm',
                    'page-height': '29.7cm',

                    'margin-top': '0.5cm',
                    'margin-bottom': '0.5cm',
                    'margin-left': '2cm',
                    'margin-right': '1cm'
                },
                content: [
                    {
                        tag: 'fo:region-body',
                        attrs: {
                            'margin-top': '1.1cm',
                            'margin-bottom': '1.1cm'
                        }
                    },
                    {
                        tag: 'fo:region-before',
                        attrs: { extent: '1cm' }

                    },
                    {
                        tag: 'fo:region-after',
                        attrs: { extent: '1cm' }
                    }
                ]
            },
            blocks['b-page']['page-sequence-master'](),
        ]
    }
}

blocks['b-page']['page-sequence-master'] = function() {

    return {
        tag : 'fo:page-sequence-master',
        attrs: { 'master-name': 'contents' },
        content : {
            tag : 'fo:repeatable-page-master-alternatives',
            content: [
                {
                    tag: 'fo:conditional-page-master-reference',
                    attrs: {
                        'master-reference': 'leftPage',
                        'odd-or-even': 'even'
                    }
                },
                {
                    tag: 'fo:conditional-page-master-reference',
                    attrs: {
                        'master-reference': 'rightPage',
                        'odd-or-even': 'odd'
                    }
                }
            ]
        }
    }
}

blocks['b-page']['page-sequence'] = function(story) {

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
                                    'text-align': "center",
                                    'margin-bottom': "0.8cm"
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
                        'font-weight': "normal",
                        'font-style': "normal",
                        'margin-top': "0.3cm",
                        'text-indent': "0.8cm"
                    },
                    content: para.text
                })
            }
        });

        var cover = blocks['b-page']['page-sequence_type_cover'](story);
        sequences.unshift(cover);

        return sequences;
    }

    return getPageSequences();
};

blocks['b-page']['page-sequence_type_cover'] = function(story) {
    return {
        tag: 'fo:page-sequence',
        attrs: {'master-reference': "cover"},
        content: {
            tag: 'fo:flow',
            attrs: {'flow-name': "xsl-region-body"},
            content: [
                {
                    tag: 'fo:block',
                    attrs: {
                        'font-family': "Georgia",
                        'font-size': "26pt",
                        'text-align': "center",
                        'margin-top': "36pt"
                    },
                    content: story.title
                },
                {
                    tag: 'fo:block',
                    attrs: {
                        'font-family': "Georgia",
                        'font-size': "12pt",
                        'text-align': "center",
                        'margin-top': "36pt"
                    },
                    content: story.author
                },
            ]
        }
    }

}