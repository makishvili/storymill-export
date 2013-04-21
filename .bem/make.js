/*global MAKE:true */

"use strict";

typeof process.env.YENV === 'undefined' && (process.env.YENV = 'development');

MAKE.decl('Arch', {
    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/,

    getLibraries: function() {
        var libs = {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            },
            'bemhtml' : {
                type: 'git',
                url: 'git://github.com/bem/bemhtml.git'
            }
        };
        var fs = require('fs');
        var libIsMissed = function(paths) {
           return paths.filter(function (path) {
               return !fs.existsSync(path);
           }).length !== 0;
        };

        return this.opts.force === true || libIsMissed(Object.keys(libs)) ? libs : {};
    }
});


MAKE.decl('BundleNode', {
    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'priv.js',
            'priv.fb2.js',
            'priv.fo.js',
            'bemhtml',
            'js',
            'css'
        ];
    },

    getOptimizerTechs: function() {
        return [
            'css',
            'js'
        ];
    }
});
