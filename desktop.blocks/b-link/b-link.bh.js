module.exports = function(bh) {
    bh.match('b-link', function(ctx){

        ctx.tag('a');

        ctx.param('url') && ctx.attr('href', ctx.param('url'));

        ['title', 'target'].forEach(function(prop){
            ctx.param(prop) && ctx.attr(prop, ctx.param(prop));
        });
    });
}
