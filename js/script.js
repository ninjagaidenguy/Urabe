const tempScript = {
    0: {
        type: 'newScene',
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
        mood: ['normal', 'right'],
        jump: '2'
    },
    2: {
        type: 'text',
        delay: '1',
        name: 'Ueno',
        mood: ['confusion', 'left'],
        say: `Hun?`,
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
        1: 'Rumage through his Bookbag',
        2: '2',
        3: 'Response 3'
    }
}


// const script = {
//     1: {
//         type: 'text',
//         name: 'Tsubaki',
//         image: '/imgPathHere.jpg',
//         expression: 'yelling',
//         text: {
//             say: 'Ueno-!',
//             color: 'white',
//             size: '16',
//             weight: 'bold',
//             animation: 'shake'
//         }
//     },
//     2: {
//         type: 'text',
//         name: 'Kouhei',
//         image: '/imgPathHere.jpg',
//         expression: 'confusion',
//         text: {
//             en: 'Hun?',
//             rus: 'Something?',
//             color: 'white',
//             size: '16',
//             weight: 'regular',
//             animation: 'typewriter'
//         }
//     },
//     3: {
//         type: 'text',
//         name: 'Tsubaki',
//         image: '/imgPathHere.jpg',
//         expression: 'main',
//         text: {
//             say: `I'm going to borrow your dictionary for a second.`,
//             color: 'white',
//             size: '16',
//             weight: 'regular',
//             animation: 'typewriter'
//         }
//     }
// }

// const test = [{
//     type: 'music',
//     path: '/musicPathHere.mp3',
// }, {
//     type: 'ambiant',
//     path: '/audioPathHere.mp3',
//     volume: 100
// }, {
//     type: 'background',
//     image: '/imagePathHere.jpg',
//     animation: 'fade',
//     time: 500,

// }, {

// }]

// const textParser = () => {

// }

/* 
Script options
Build as an object
need to be able to call in images, sound effects


*/