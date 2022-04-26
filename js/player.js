/* const startGame = (file) => {
    hideMainMenu()
    setBackground(`assets/backgrounds/${file['0'].background}`)
    showArea('#text')
    ambiancePlay(file['0'].ambiance, globalSettings._globalVolume)
    setTalking(file['1'].name)
    newSetCharacter(getMood(file['1'].name, file['1'].mood[0]), file['1'].mood[1])
    say(file['1'].say)
    const text = document.querySelector('#text')
    return text.addEventListener('click', () => {
        playNext(file, '2')
    })
}
const playNext = (file, jump) => {
    let _current = file[jump].type
    if (_current === 'newScene') {
    } else if (_current === 'text') {
        setTalking(file[jump].name)
        document.querySelector('#saying').innerHTML = ''
        say(file[jump].say)
        newSetCharacter(getMood(file[jump].name, file[jump].mood[0]), file['1'].mood[1])
        say(file[jump].say)
        console.log(file[jump].jump)
        const text = document.querySelector('#text').addEventListener('click', () => {
            playNext(file, file[jump].jump)
        }
        )
    } else if (_current === 'choices') {
        return
    } else {
        return
    }
}
 */
const getCurrentIndex = () => {
    return document.querySelector('#text').getAttribute('data-index')
}
const getSceneType = (script) => {
    script[getCurrentIndex()].type
    return script[getCurrentIndex()].type
}
const updateCurrentIndex = (script) => {
    console.log(script[getCurrentIndex()].jump)
    document.querySelector('#text').setAttribute('data-index', script[getCurrentIndex()].jump)
}
const Talk = (file, i) => {
    // Set Players name in the #Talking Span
    setTalking(file[i].name)
    // Check if we need to change the image or not by checking if there is a mood/image or not
    if (file[i].mood === 'object') {
        newSetCharacter(getMood(file[i].name, file[i].mood[0]), file['1'].mood[1])
    }
    // Insert the text and have it show at a specific speed
    say(file[i].say)
}





const goNext = (script) => {
    if (getSceneType(script) === 'newScene') {
        hideMainMenu()
        setBackground(script)
        showArea('#text')
        ambiancePlay(script)
        updateCurrentIndex(script)
    } else if (getSceneType(script) === 'text') {
        setTalking(script[getCurrentIndex()].name)
        newSetCharacter(getMood(script[getCurrentIndex()].name, script[getCurrentIndex()].mood[0]), script['1'].mood[1])
        say(script[getCurrentIndex()].say)
        updateCurrentIndex(script)
    } else if (getSceneType(script) === 'choices') {
        console.log(getSceneType())
        updateCurrentIndex(script)
    } else {
        console.log('Something went wrong')
    }
}
/*      switch (getSceneType(script)) {
            case 'newScene':
                hideMainMenu()
                setBackground(script)
                showArea('#text')
                ambiancePlay(script)
                break;
            case 'text':
                setTalking(script[getCurrentIndex()].name)
                newSetCharacter(getMood(script[getCurrentIndex()].name, script[getCurrentIndex()].mood[0]), script['1'].mood[1])
                say(script[getCurrentIndex()].say)
                break
            case 'choices':
                console.log(getSceneType())
                break
            default:
                console.log('something went wrong, there is no such scene type of' + getSceneType())
                break;
        } 
    updateCurrentIndex(script)
} */

















const play1 = (file, current) => {
    /**
     * @param {variable} file - Pick the script to start running
     * @param {string} start - Pick the start lable of the object
     */
    let next
    let _current = file[current]
    //First we check if this is a new scene and set a background and the ambiance
    //This is working but we want to get the fade animation working eventually
    if (_current.type === 'newScene') {
        hideMainMenu()
        //Set the background for the scene
        if (checkUndefined(_current.background)) {
            setBackground(`assets/backgrounds/${_current.background}`)
        }
        //Set Ambiance music or noise
        ambiancePlay(_current.ambiance, globalSettings._globalVolume)
        //
        next = _current.jump
    } else if (_current.type === 'text') {
        //update current saying name
        //swap current talking image with proper mood image
        textShower(_file._current, 50)

    } else if (_current.type === 'choice') {

    } else {
        alert('Something went wrong with the "play" Check the script' + _file + " and the label " + current)
    }
}

/**@description what script or file we are on */
let currentScene
/**@description What label on the script we are on */
let currentLabel

//setBackground('assets/backgrounds/classroom01.jpg')

