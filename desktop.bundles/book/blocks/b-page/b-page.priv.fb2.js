var textsCfg = require('storymill/config').get('texts');

blocks['b-page'].description = function(story) {
    var hashMd5 = '112132132';

    return {
        tag: 'description',
        content: [
            {
                tag: 'title-info',
                content: [
                    {
                        tag: 'genre',
                        content: 'prose_contemporary'
                    },
                    {
                        tag: 'author',
                        content: [
                            {
                                tag: 'first-name',
                                content: textsCfg.author.firstName
                            },
                            {
                                tag: 'middle-name',
                                content: textsCfg.author.middleName
                            },
                            {
                                tag: 'last-name',
                                content: textsCfg.author.lastName
                            }
                        ]
                    },
                    {
                        tag: 'book-title',
                        content: story.title
                    },
                    {
                        tag: 'lang',
                        content: 'ru'
                    }
                ]
            },
            {
                tag: 'document-info',
                content: [
                    {
                        tag: 'author',
                        content: [
                            {
                                tag: 'nickname',
                                content: textsCfg.author.nickName
                            },
                            {
                                tag: 'date',
                                attrs: {value: ''},
                                content: ''
                            },
                            {
                                tag: 'id',
                                content: 'makishvili_' + story.id + '_' + hashMd5
                            },
                            {
                                tag: 'version',
                                content: '0.1'
                            }
                        ]
                    },
                ]
            }
        ]
    }
};

blocks['b-page'].body = function(story) {
    return [
        {
            tag: 'body',
            content: blocks['b-story'](story)
        }
    ]
};
