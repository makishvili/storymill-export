module.exports = function(bh) {
    bh.match('b-link_pseudo_yes', function(ctx){

        ctx.tag(ctx.param('url') ? 'a' : 'span');
        ctx.js(true);

        ctx.content({
            elem: 'inner',
            content: ctx.content()
        }, true);
    });
}
