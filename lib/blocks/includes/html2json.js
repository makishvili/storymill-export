var jaggi = require('jaggi');
var fs = require('fs');
var htmlparser = require("htmlparser");

module.exports = jaggi.declBlock({
    run : function(params, promise) {
        
        var handler = new htmlparser.DefaultHandler(function (error, dom) {
            if (error) {
                promise.reject(err);
            }
        }, {
            verbose: false,
            ignoreWhitespace: true,
            enforceEmptyTags: false
        });

        var parser = new htmlparser.Parser(handler);
        parser.parseComplete(params.rawHtml);

        // Возвращать нужно объект, не массив
        promise.fulfill(handler.dom);
    }
})