module.exports = function(bh) {
    bh.match('b-link__inner', function(ctx){
        ctx.tag('span');
    });
}
