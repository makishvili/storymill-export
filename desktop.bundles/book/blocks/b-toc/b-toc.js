BEM.DOM.decl('b-toc', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                $.localScroll({
                    onAfter: function(target){
                        location = '#' + ( target.id || target.name );
                    }
                });
            }
        }
    }
});
