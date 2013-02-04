var jaggi = require('jaggi');
var fs = require('fs');

module.exports = jaggi.declBlock({
    run : function(params, promise) {
        fs.readFile(params.filePath, 'utf8', function(err, content) {
            console.log(content);
            err? promise.reject(err) : promise.fulfill(content);
        });
    }
})