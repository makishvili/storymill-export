Storymill-export
================

Tool for exporting [Storymill](https://www.marinersoftware.com/products/storymill/)'s documents to [makishvili.com](http://makishvili.com)'s HTML. In addition it creates FB2-file.

Based on [Twitter-trends](github.com/dfilatov/twitter-trends)

Add new cyrillic font into Apache FOP
1. Put font into fop/conf/fonts
2. Make <font>.xml file. I like "Georgia"
    java -cp build/fop.jar:lib/avalon-framework-4.2.0.jar:lib/xml-apis-1.3.04.jar:lib/xercesImpl-2.7.1.jar:lib/xalan-2.7.0.jar:lib/commons-logging-1.0.4.jar:lib/commons-io-1.3.1.jar:lib/serializer-2.7.0.jar:lib/xmlgraphics-commons-1.5.jar org.apache.fop.fonts.apps.TTFReader conf/fonts/Georgia.ttf conf/fonts/Georgia.xml
3. Add font-tag into fop.xconf (see arial-section as example). Use absolute path for both files
4. Check does it work?
    fop -c fop-1.1/conf/fop.xconf  -xml 1.xml -xsl 1-fo.xsl -pdf 1.pdf

Can you see cyrillic symbols in your pdf?