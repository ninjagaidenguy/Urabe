'use strict'
import {setBackground, setBackgroundOverlay, removeBackgroundOverlay} from './modules/background.js'
import {hideMainMenu, showMainMenu} from './modules/main-menu.js'
import {showTextMenu} from './modules/textMenu.js'
import {newSetCharacter, setCharacter, setTalking} from './modules/character.js'
import {showArea,hideArea} from './modules/checkers.js'
import {textShower} from './modules/textRender.js'
import { ambiancePlay } from './modules/sound.js'
import { Tsubaki } from './main.js'
import { tempScript } from './Script.js'
import { checkUndefined } from './modules/checkers.js'

/**
 * @description Main Menu
 */
//New Game
document.querySelector("#new").addEventListener( 'click', () => {
    hideMainMenu()
    // just so we have some initial content need to remove eventually
    showArea('#text')
    setBackground('assets/backgrounds/classroom01.jpg')
    //setCharacter(Tsubaki.getMood('normal'), '60vh')
    setTalking(Tsubaki.firstName())
    textShower(tempScript[1].say, 50)
    ambiancePlay('classroomChatter.mp3','.2')
    newSetCharacter(Tsubaki.getMood('normal'),'right')
})
//Save
document.querySelector("#save").addEventListener( 'click', () => {
})
//Load
document.querySelector("#load").addEventListener( 'click', () => {
})
//Settings
document.querySelector("#settings").addEventListener( 'click', () => {
})
//Close
document.querySelector("#close").addEventListener( 'click', () => {
    hideMainMenu()
    showArea(['#character','#choices','#text'])
    removeBackgroundOverlay('#main-background','gray-overlay')
})

/**
 * @description Text Menu
 */
//Settings
document.querySelector("#tm-settings").addEventListener( 'click', () => {
    showTextMenu()
    setBackgroundOverlay('#main-background','gray-overlay')
    hideArea(['#character','#choices','#text'])
})