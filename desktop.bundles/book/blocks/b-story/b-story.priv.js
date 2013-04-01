blocks['b-story'] = function(story) {

    var paras = story.map(function(para){
        return {
            elem: 'item',
            mods: {type: para.tag},
            attrs: {id: 'para-' + para.id},
            content: para.text
        }
    });

    return {
        block: 'b-story',
        content:  paras
    };
};