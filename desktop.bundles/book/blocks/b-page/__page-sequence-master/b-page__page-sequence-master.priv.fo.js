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
