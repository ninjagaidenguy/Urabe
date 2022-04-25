import { checkUndefined } from "./checkers.js"

const setBackground = (url,animation) => {
    let main = document.querySelector("#main-background")
    if( checkUndefined(animation)){
        main.style.background = `url('${url}')  center center / cover no-repeat`
    } else {
        main.style.background = `url('${url}')  center center / cover no-repeat`
    }
}

/**
 * 
 * @param {string} selector - Pick the ID of the desired Div 
 * @param {string} color - pick the color of overlay you want
 * @example Current list of color selectors
 *  gray-overlay
 */
const setBackgroundOverlay = (selector,color) => {
    let main = document.querySelector(selector)
    main.classList.add(color)
}
const removeBackgroundOverlay = (selector,color) => {
    let main = document.querySelector(selector)
    main.classList.remove(color)
}

export {setBackground, setBackgroundOverlay, removeBackgroundOverlay}