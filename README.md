Storymill-export
================

Tool for exporting [Storymill](https://www.marinersoftware.com/products/storymill/)'s documents to [makishvili.com](http://makishvili.com)'s HTML. In addition it creates FB2-file.

Based on [Twitter-trends](github.com/dfilatov/twitter-trends), [Pdf2json](https://github.com/modesty/pdf2json)


Хотелки
-------

1. make import
    1. смотрит в папку text
    2. находит все файлы в html формате
    3. конвертит их в raw json

2. make import имя
    то же, что предыдущая команда, но для одного файла

3. make convert -t html -t fb2
    1. смотрит в папку json
    2. находит все файлы в raw json формате
    3. конвертит их в форматы, указанные в ключе -t

4. make convert -t html -t fb2 имя
    то же, что предыдущая команда, но для одного файла

можно сделать из веб-инетерфейса:
