/* const goNext = (script) => {
    if (getSceneType(script) === 'newScene') {
        hideMainMenu()
        setBackground(script)
        showArea('#text')
        ambiancePlay(script)
        updateCurrentIndex(script)
    } else if (getSceneType(script) === 'text') {
        setTalking(script[getCurrentIndex()].name)
        updateCharacter(script)
        say(script[getCurrentIndex()].say)
        updateCurrentIndex(script)
    } else if (getSceneType(script) === 'choices') {
        console.log(getSceneType())
        updateCurrentIndex(script)
    } else {
        console.log('Something went wrong')
    }
} */

// Rewrite using the new functions 
const goNext = (script) => {
    hideMainMenu()
    const scriptType = scriptFun.type(script)
    console.log(scriptType)
    if (scriptType === 'newScene') {
        //add stuff
    } else if (scriptType === 'text') {
        setTalking(script[getCurrentIndex()].name)
        updateCharacter(script)
        say(script[getCurrentIndex()].say)
        updateCurrentIndex(script)
    } else if (scriptType === 'choices') {
        console.log(getSceneType())
        updateCurrentIndex(script)
    } else if (scriptType === 'setBackground') {
        setBackground(script)
        showArea('#text')
        ambiancePlay(script)
        updateIndex(script)
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