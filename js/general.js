'use strict'
class Mgfx {
    constructor(name) {
        this._name = name
    }
}
class Settings extends Mgfx {
    constructor(name = 'game1', globalVolume = '.5', voiceVolume = '.5', musicVolume = '.5', soundEffectVolume = '.5', textSpeed = '100', language = 'En') {
        super(name)
        this._globalVolume = globalVolume
        this._voiceVolume = voiceVolume
        this._soundEffectVolume = soundEffectVolume
        this._voiceVolume = voiceVolume
        this._textSpeed = textSpeed
        this._languate = language
    }
}
/** Class for creating custom Text types */
class Text extends Mgfx {
    /**
     * Sane defaults added 
     * @param {string} name Needs to be a unique name
     * @param {string} size Text size in points no need to add pt or px
     * @param {string} font Text font in CSS font-family format
     * @param {string} color Text color in hexdecimal or css name format
     * @param {string} weight Text weight in CSS font-weight format
     * @param {string} animation Used for custom Animations
     */
    constructor(name, size = '16', font = 'Arial, Helvetica, sans-serif', color = 'white', weight = 'normal', animation = 'typewriter') {
        super(name)
        this._size = size
        this._font = font
        this._color = color
        this._weight = weight
        this._animation = animation
        this.ref = function ref() {
            return {
                size: this._size,
                font: this._font,
                color: this._color,
                weight: this._weight,
                animation: this._animation
            }
        }
    }
}
/** Class for Creating new Characters */
class Character extends Mgfx {
    /**
     * @param {string} name - Characters First Name
     * @param {string} lName - Characters Last Name
     * @param {object} moods - Used for image paths
     */
    constructor(name, lName, moods = { normal: 'normal' }) {
        super(name)
        this._lName = lName
        this._moods = moods
    }
    /**
     * @returns Characters full name
     */
    fullName() {
        return `${this._name} ${this._lName}`
    }
    /**
     * @returns Characters First Name
     */
    firstName() {
        return `${this._name}`
    }
    /**
     * @returns Characters Last Name
     */
    lastName() {
        return `${this._lName}`
    }
    /**
     * Used to pull the path of an image based off the characters mood
     * @param {string} moodType characters mood
     * @returns returns the image path of the characters mood
     */
    getMood(moodType) {
        const path = `/assets/characters/`
        const lowerCase = this._name
        return `${path}${lowerCase.toLowerCase()}/${this._moods[moodType]}.png`
    }
}
//Settings
let globalSettings = new Settings('Raw Bacon?')
globalSettings._globalVolume = '.5'
//Characters
const Tsubaki = new Character('Tsubaki', 'Akira', {
    normal: 'normal',
    angry: 'angry',
    suprised: 'suprised',
    yelling: 'yelling',
    confusion: 'confusion'
})
const Ueno = new Character('Ueno', 'Kouhei', {
    normal: 'normal',
    angry: 'angry',
    suprised: 'suprised',
    yelling: 'yelling',
    confusion: 'confusion'
})
//Text Types
const normalText = new Text('normalText')
const boldText = new Text('boldText', '16', 'white', 'bold')
const yelling = new Text('yelling', '48', 'yellow', 'bold', 'shaking')

//Backgrounds
// TO DO make animation do something
const setBackground = (script) => {
    document.getElementById('background').style['background-color'] = 'black'
    let main = document.querySelector("#main-background")
    const url = `assets/backgrounds/${script[getCurrentIndex()].background}`
    main.style.background = `url('${url}')  center center / cover no-repeat`
}

//Fade the background using CSS for stuff like opening menus
// setBackGroundOverlay('#background','gray-overlay')
const setBackgroundOverlay = (selector, color) => {
    let main = document.querySelector(selector)
    main.classList.add(color)
}
const removeBackgroundOverlay = (selector, color) => {
    let main = document.querySelector(selector)
    main.classList.remove(color)
}
//Checkers
const hideArea = (id) => {
    if (typeof (id) === 'string') {
        let main = document.querySelector(id)
        main.classList.add('hide')
    } else if (typeof (id === 'object')) {
        for (let i = 0; i < id.length; i++) {
            const main = document.querySelector(id[i])
            main.classList.add('hide')
        }
    }
}
const showArea = (id) => {
    if (typeof (id) === 'string') {
        let main = document.querySelector(id)
        main.classList.remove('hide')
    } else if (typeof (id === 'object')) {
        for (let i = 0; i < id.length; i++) {
            const main = document.querySelector(id[i])
            main.classList.remove('hide')
        }
    }
}
const checkUndefined = (area) => {
    return typeof area.background === 'undefined'
}
const checkUndefinedAlt = (area, src) => {
    return typeof area.src === 'undefined'
}
//Character Creator
const CharacterCreator = function (name, text = {
    color: 'white',
    size: '16',
    weight: 'regular',
    animation: 'typewriter'
}, images = {
    default: `${path}/default.png`
}) {
    path = () => {
        return `/assets/characters/${name}/`
    }
    const name1 = name
    const text1 = function (text) {

    }
}
