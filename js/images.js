//Backgrounds
// TO DO make animation do something
/* const setBackground = (script) => {
    document.getElementById('background').style['background-color'] = 'black'
    let main = document.querySelector("#main-background")
    const url = `assets/backgrounds/${script[getCurrentIndex()].background}`
    main.style.background = `url('${url}')  center center / cover no-repeat`
} */
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

const setBackground = (script) => {
    //document.getElementById('background').style['background-color'] = 'black'
    let main = document.querySelector("#main-background")
    const url = `assets/backgrounds/${scriptFun.background(script)}`
    main.style.background = `url('${url}')  center center / cover no-repeat`
}

