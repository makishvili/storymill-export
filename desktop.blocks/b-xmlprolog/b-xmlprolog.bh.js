module.exports = function(bh) {
    bh.match('b-xmlprolog', function() {
        return '<?xml version="1.0" encoding="UTF-8"?>';
    });
};