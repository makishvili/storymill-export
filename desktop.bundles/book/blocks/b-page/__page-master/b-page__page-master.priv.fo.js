blocks['b-page']['page-master'] = function() {}

var getPageParams = function(side) {
    return {
        'master-name': side,

        'page-width': '21.0cm',
        'page-height': '29.7cm',

        'margin-top': '0.5cm',
        'margin-bottom': '0.5cm',
        'margin-left': '1.5cm',
        'margin-right': '1.5cm'
//        'margin-left': side === 'rightPage'? '2cm' : '1cm',
//        'margin-right': side === 'rightPage'? '1cm' : '2cm'
    }
}

blocks['b-page']['page-master'].cover = function() {
    return {
        tag : 'fo:simple-page-master',
        attrs: getPageParams('cover'),

        content: {
            tag: 'fo:region-body',
            attrs: { margin: '3cm' }
        }
    }
}

blocks['b-page']['page-master'].content = function(side) {
    return {
        tag : 'fo:simple-page-master',
        attrs: getPageParams(side),

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
    }
}

