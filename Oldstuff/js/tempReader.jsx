import { globalSetting } from './main.js'
import { setBackground } from './modules/background.js'
import { newSetCharacter, setCharacter } from './modules/character.js'
import { checkUndefined } from './modules/checkers.js'
import { hideMainMenu } from './modules/main-menu.js'
import { ambiancePlay } from './modules/sound.js'
import { textShower } from './modules/textRender.js'



const play = ( file, current) => {
    /**
     * @param {variable} file - Pick the script to start running
     * @param {string} start - Pick the start lable of the object
     */
    let _current = file[current]
    if( _current.type === 'newScene'){
        hideMainMenu()
        if (checkUndefined(_current.background)) {
            setBackground(`assets/backgrounds/${_current.background}`)
        }
        //Set Ambiance
        if (checkUndefined(_current.ambiance,globalSetting)) {
            ambiancePlay(_current.ambiance,)
        }
        //
        if(checkUndefined(_current)){
            newSetCharacter(_current.mood, )
            setCharacter('assets/characters/rin/main.png', '60vh')
        }
        

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

export {play}

