module.exports = function(bh) {
    bh.match('b-export__text', function(ctx){
        ctx.tag('span');
    });
}