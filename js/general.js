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

const checkUndefined = (area) => {
    return typeof area.background === 'undefined'
}
const checkUndefinedAlt = (area, src) => {
    return typeof area.src === 'undefined'
}
