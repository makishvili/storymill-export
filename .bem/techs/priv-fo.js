/**
 * priv-fo
 * ========
 *
 * Собирает `?.priv.fo.js` по deps'ам, обрабатывая Борщиком.
 *
 */
var inherit = require('inherit'),
    fs = require('fs'),
    Vow = require('vow'),
    vowFs = require('vow-fs'),
    BorschikPreprocessor = require('enb/lib/preprocess/borschik-preprocessor');

module.exports = require('enb/lib/build-flow').create()
    .name('priv-fo')
    .target('target', '?.priv.fo.js')
    .useFileList('priv.fo.js')
    .builder(function(sourceFiles) {
        var _this = this,
            target = this._target,
            jsBorschikPreprocessor = new BorschikPreprocessor();
        return Vow.all(sourceFiles.map(function(file) {
            return _this.node.createTmpFileForTarget(target).then(function(tmpfile) {
                return jsBorschikPreprocessor.preprocessFile(file.fullname, tmpfile, false, false).then(function() {
                    return vowFs.read(tmpfile, 'utf8').then(function(data) {
                        vowFs.remove(tmpfile);
                        return data;
                    });
                });
            });
        })).then(function(res) {
            return res.join('\n');
        });
    })
    .createTech();
