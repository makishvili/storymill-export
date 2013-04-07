var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/');


exports.getTechs = function() {
    return {
        'bemjson.js'    : '',
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'priv.js'       : pjoin(PRJ_TECHS, 'priv.js'),
        'priv.fb2.js'   : pjoin(PRJ_TECHS, 'priv.fb2.js'),
        'js'            : 'js-i',
        'css'           : 'css',
        'bemhtml'       : pjoin(PRJ_ROOT, 'bemhtml/.bem/techs/bemhtml.js')
    };

};


// Do not create any techs files during bundle creation by default
exports.defaultTechs = [];

