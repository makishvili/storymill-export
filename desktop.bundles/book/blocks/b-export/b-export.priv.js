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
                        url: 'http://www.bookmate.ru/upload?link=' + story.id + '.fb2',
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
                ]
            }
        ]
    };
};