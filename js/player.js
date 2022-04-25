const startGame = (file) => {
    hideMainMenu()
    setBackground(`assets/backgrounds/${file['0'].background}`)
    showArea('#text')
    ambiancePlay(file['0'].ambiance, globalSettings._globalVolume)
    setTalking(file['1'].name)
    newSetCharacter( getMood(file['1'].name, file['1'].mood[0] ), file['1'].mood[1] )
    say(file['1'].say)
    const text = document.querySelector('#text')
    return text.addEventListener('click', () => {
        playNext(file, '2')
    })
}
const playNext = (file, jump) => {
     document.querySelector('#text').removeEventListener('click', text )
    let _current = file[jump].type
    if (_current === 'newScene') {
        /*  write later but I think the break down would be 
        fade out
        change the music/ambiance
        change the background
        jumpt to next scene/property */
    } else if ( _current === 'text') {
        setTalking(file[jump].name)
        say(file[jump].say)
        newSetCharacter( getMood(file[jump].name, file[jump].mood[0] ), file['1'].mood[1] )
        say( file[jump].say)
        console.log(file[jump].jump)
        const text = document.q
        uerySelector('#text')
        return text.addEventListener('click', () => {
            playNext(file, file[jump].jump)
        }
        )
    } else {
        return
    }

}


const play1 = ( file, current) => {
    /**
     * @param {variable} file - Pick the script to start running
     * @param {string} start - Pick the start lable of the object
     */
    let next
    let _current = file[current]
    //First we check if this is a new scene and set a background and the ambiance
    //This is working but we want to get the fade animation working eventually
    if( _current.type === 'newScene'){
        hideMainMenu()
        //Set the background for the scene
        if (checkUndefined(_current.background)) {
            setBackground(`assets/backgrounds/${_current.background}`)
        }
        //Set Ambiance music or noise
        ambiancePlay(_current.ambiance, globalSettings._globalVolume)
        //
        next = _current.jump   
    } else if ( _current.type === 'text' ){
        //update current saying name
        //swap current talking image with proper mood image
        textShower(_file._current,50)

    } else if ( _current.type === 'choice') {

    } else {
        alert('Something went wrong with the "play" Check the script' + _file + " and the label " + current )
    }
}

/**@description what script or file we are on */
let currentScene
/**@description What label on the script we are on */
let currentLabel

//setBackground('assets/backgrounds/classroom01.jpg')
