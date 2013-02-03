Storymill-export
================

Tool for exporting [Storymill](https://www.marinersoftware.com/products/storymill/)'s PDF to [makishvili.com](http://makishvili.com)'s HTML. In addition it creates FB2-file.

Based on [Twitter-trends](github.com/dfilatov/twitter-trends), [Pdf2json](https://github.com/modesty/pdf2json)


Getting started
--------------

You need nodejs 0.8.x.

    git clone git://github.com/makishvili/storymill-export.git
    cd storymill-export
    npm install -d
    make bem-server
    // in another console window in storymill-export directory
    make app

Then point your browser to:

* http://127.0.0.1:3000/ -- view result (bemjson + bemhtml)
* http://127.0.0.1:3000/?__mode=bemjson -- view bemjson (json + priv)
* http://127.0.0.1:3000/?__mode=json -- view data json