const testingLayout = {
    gameStart: {
        0: {
            type: 'setBackground',
            background: 'classroom01.jpg',
            animation: ['fade', 1000],
            music: 'none',
            ambiance: 'classroomChatter.mp3',
            jump: '1'
        },
        1: {
            type: 'text',
            name: 'Tsubaki',
            say: `Ueno-!`,
            style: 'normal',
            mood: ['normal', 'right'],
            animation: 'fade',
            height: '50vh',
            jump: '2'
        },
        2: {
            type: 'text',
            delay: '1',
            name: 'Ueno',
            mood: ['confusion', 'left'],
            say: `Hun?`,
            animation: 'fade',
            height: '50vh',
            jump: '3'
        },
        3: {
            type: 'text',
            delay: '1',
            name: 'Tsubaki',
            mood: ['confusion', 'right'],
            say: `I'm going to borrow your dictionary for a second.`,
            jump: '4'
        },
        4: {
            type: 'choices',
            choices: {
                1: {
                    choice: 'Rumage through his Bookbag',
                    jump: 5
                },
                2: '2',
                3: 'Response 3'
            }
        },
        5: {
            type: 'newScene'
        }
    },
    scene1: {

    },
    scene2: {

    }
}

