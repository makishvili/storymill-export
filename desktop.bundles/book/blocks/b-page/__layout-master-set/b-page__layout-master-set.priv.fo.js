blocks['b-page']['layout-master-set'] = function() {
    return {
        tag : 'fo:layout-master-set',
        content : [
            blocks['b-page']['page-master'].cover(),
            blocks['b-page']['page-master'].content('leftPage'),
            blocks['b-page']['page-master'].content('rightPage'),

            blocks['b-page']['page-sequence-master'](),
        ]
    }
}
