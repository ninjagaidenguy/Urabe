// Old Script options This can be removed eventually.
const getScriptOptions = (() => {
    return {
        type: (script) => {
            return script[getCurrentIndex()].type
        },
        name: (script) => {
            return script[getCurrentIndex()].name
        },
        say: (script) => {
            return script[getCurrentIndex()].say
        },
        style: (script) => {
            return script[getCurrentIndex()].style
        },
        mood: (script) => {
            return script[getCurrentIndex()].mood[0]
        },
        moodPosition: (script) => {
            return script[getCurrentIndex()].mood[1]
        },
        animation: (script) => {
            return script[getCurrentIndex()].animation
        },
        jump: (script) => {
            return script[getCurrentIndex()].jump
        },
        delay: (script) => {
            return script[getCurrentIndex()].delay
        },
        choices: (script) => {
            return script[getCurrentIndex()].choices
        }
    }
})()



const getSceneType = (script) => {
    return script[getCurrentIndex()].type
}
