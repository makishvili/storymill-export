blocks['b-story'] = function(story) {

    var getSections = function() {
        var sections = [];
        var sectionsIndex = -1;

        story.body.map(function(para){
            if (para.tag === 'p1') {
                sectionsIndex++;
                // Глава
                sections[sectionsIndex] = {
                    tag: 'section',
                    content: [
                        {
                            tag: 'title',
                            content: {
                                tag: 'p',
                                content: para.text
                            }
                        }
                    ]
                };
            } else if (para.tag === 'p2') {
                // Параграф
                sections[sectionsIndex].content.push({
                    tag: 'p',
                    content: para.text
                })
            }
        });

        return sections;
    }

    return [
        {
            tag: 'title',
            content: [
                {
                    tag: 'p',
                    content: story.title
                },
                {
                    tag: 'p',
                    content: story.author
                },
            ]
        },
        getSections()
    ];
};