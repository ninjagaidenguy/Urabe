// I hate this and will rewrite it eventually but it works for now.
const say = (text, speed = '50', area = '#saying') => {
    document.querySelector(area).innerHTML = ''
    const mainText = document.querySelector(area)
    let i = 0
    const timer = setInterval(() => {
        if (i < text.length) {
            mainText.append(text.charAt(i))
            i++
        } else {
            clearInterval(timer)
        }
    }, speed)
}

// little cleaner now
const textScroller = (script) => {
    const say = getScriptOptions.say(script)
    const mainText = document.querySelector('#saying')
    mainText.innerHTML = ''
    let i = 0
    const timer = setInterval(() => {
        if (i < say.length) {
            mainText.append(text.charAt(i))
            i++
        } else {
            clearInterval(globalSettings._soundEffectVolume)
        }
    }, speed)
}

const talking = (() => {
    return {
        talking: (script) => { },
        saying: (script) => { },
    }
})()

/* //Text render
const textShower = (text, speed, area = '#saying') => {
    const mainText = document.querySelector(`${area}`)
    mainText.textContent = ''
    let i = 0
    const timer = setInterval(() => {
        if (i < text.length) {
            mainText.append(text.charAt(i))
            i++
        } else {
            clearInterval(timer)
        }
    }, speed)
}

const Talk = (script) => {
    // Set Players name in the #Talking Span
    setTalking(script[getCurrentIndex()].name)
    // Check if we need to change the image or not by checking if there is a mood/image or not
    if (script[getCurrentIndex()].mood === 'object') {
        newSetCharacter(getMood(script[getCurrentIndex()].name, script[getCurrentIndex()].mood[0]), script['1'].mood[1])
    }
    // Insert the text and have it show at a specific speed
    say(script[getCurrentIndex()].say)
} */
