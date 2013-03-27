var toc = require('storymill/toc');

/*
* 1. Зайти в /text
* 2. Зайти в каждую папку
* 3. Если там нет *.json.js - построить его
* 4. Получить имя текста
* 5. Вернуть массив из {dir: 'dog', title: 'Убей собаку'}
* */
module.exports = {
    call : {
        'list' : {
            params: {
                textsFolder: '/Users/makishvili/projects/storymill-export/text'
            },
            call: function(params, promise) {
                promise.fulfill(toc.getJsonList(params));
            }
        }
    }
};
