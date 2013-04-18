module.exports = {
    author : {
        nickName: 'makishvili',
        shortName: 'Вадим Макишвили',
        firstName: 'Вадим',
        middleName: 'Юрьевич',
        lastName: 'Макишвили'
    },
    path : {
        project: '/Users/makishvili/projects/storymill-export/',
        import: '/Users/makishvili/Dropbox/StoryMill/import/',
        export: '/Users/makishvili/YandexMakishviliDisk/StoryMill/'
    },
    pdfPrinter: {
//        default: 'apacheFop',
        default: 'wkhtmltopdf',
        params: {
            'apacheFop' : {

            },
            'wkhtmltopdf' : {
                global: {
                    '--print-media-type': '',
                    '--header-font-name': 'Times',
                    '--footer-font-name': 'Times',
                    '--header-font-size': '8',
                    '--footer-font-size': '8',
                    '--header-spacing': '4',
                    '--footer-spacing': '4',
                    '--footer-center': '[page]/[toPage]',
                    '--header-right': 'makishvili.com/proza/%fileName%.html',
                },
                toc: {
                    '--xsl-style-sheet': '%projectPath%node_modules/storymill/wkhtmltopdf.toc.xsl'
                }
            }
        }
    },
    bookList: [
        {
            id: 'childhood',
            title: 'Последний вечер детства',
            completed: 'yes',
            published: 'no'
        },
        {
            id: 'cold',
            title: 'Холодно',
            completed: 'yes',
            published: 'yes'
        },
        {
            id: 'kush',
            title: 'Сандалики на тонком ремешке',
            completed: 'yes',
            published: 'yes'
        },
        {
            id: 'signs',
            title: 'Знаки',
            completed: 'yes',
            published: 'yes'
        },
        {
            id: 'cry',
            title: 'Время, когда плакать можно',
            completed: 'yes',
            published: 'yes'
        },
        {
            id: 'dog',
            title: 'Убей собаку!',
            completed: 'yes',
            published: 'yes'
        },
        {
            id: 'in-the-car',
            title: 'Ребенок в машине',
            completed: 'no',
            published: 'no'
        },
        {
            id: 'lift',
            title: 'Лифт',
            completed: 'no',
            published: 'no'
        },
        {
            id: 'mall',
            title: 'Стрельба в Европейском',
            completed: 'no',
            published: 'no'
        },
        {
            id: 'crocodile',
            title: 'Крокодил',
            completed: 'no',
            published: 'no'
        },
        {
            id: 'water',
            title: 'Достать воды',
            completed: 'no',
            published: 'no'
        },
/*
        {
            id: 'grape',
            title: 'Виноград в бокале',
            completed: 'yes'
        }
*/
    ]
};
