({
    mustDeps: [
        {block: 'i-jquery', elems: ['scrollTo', 'localscroll']}
    ],
    shouldDeps : [
        'xml-prolog',
        'b-story',
        'b-toc',
        'b-ui',
        'b-error',
        'b-export',
        {
            block: 'b-page',
            elems: [
                'layout-master-set',
                'page-master',
                'page-sequence-master',
                'page-sequence'
            ]
        }
    ]
})
