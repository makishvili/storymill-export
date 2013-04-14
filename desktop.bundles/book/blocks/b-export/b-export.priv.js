blocks['b-export'] = function(story) {

    return {
        block: 'b-export',
        content: [
            {
                elem: 'bookmate',
                content: [
                    {
                        elem: 'text',
                        content: 'Читать в '
                    },
                    {
                        block: 'b-link',
                        mix: [
                            {block: 'b-export', elem: 'link'}
                        ],
                        url: 'http://www.bookmate.ru/upload?link=http://makishvili.com/proza/' + story.id + '.fb2',
                        content: 'bookmate.ru'
                    },
                ]
            },
            {
                elem: 'download',
                content: [
                    {
                        elem: 'text',
                        content: 'Скачать в '
                    },
                    {
                        block: 'b-link',
                        mix: [
                            {block: 'b-export', elem: 'link'}
                        ],
                        url: story.id + '.fb2',
                        content: 'fb2'
                    },
                    {
                        elem: 'text',
                        content: ', '
                    },
                    {
                        block: 'b-link',
                        mix: [
                            {block: 'b-export', elem: 'link'}
                        ],
                        url: story.id + '.pdf',
                        content: 'pdf'
                    },
                ]
            }
        ]
    };
};