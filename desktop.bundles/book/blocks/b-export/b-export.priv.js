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
                        url: 'http://pdfcrowd.com/url_to_pdf/?width=210mm&height=297mm&use_print_media=1&footer_text=%p%20of%20%n',
                        content: 'pdf'
                    },
                ]
            }
        ]
    };
};