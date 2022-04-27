//Characters
/* const setCharacter = (url, height = '50vh', align = 'center', animation = 'fade') => {
    let main = document.querySelector("#character")
    main.removeAttribute('class')
    main.removeAttribute('src')
    main.src = url``
    main.style.height = height
    main.classList.add(align)
    main.classList.add(animation)
} */
const newSetCharacter = (url, position = 'center', height = '50vh', animation = 'fade') => {
    let main = document.querySelector(`#character-${position}`)
    main.removeAttribute('class') //remove any classes
    main.removeAttribute('src') //remove existing image
    main.src = url //set the characters heigh
    main.style.height = height //set character height
    main.classList.add(animation) //current only animation is fade
}
const setTalking = (talking) => {
    document.querySelector('#talking').textContent = talking
}
const setCharacters = (url, position = 'center', height = '50vh', animation = 'fade') => {
    let main = document.querySelector(`#character-${position}`)
    main.removeAttribute('class') //remove any classes
    main.removeAttribute('src') //remove existing image
    main.src = url //set the characters heigh
    main.style.height = height //set character height
    main.classList.add(animation) //current only animation is fade
}
// Character Image Helpers and setters

// Character Helper function 
// Ex. character.name(tempScript)
// Ex Output 'Ueno'
const character = (() => {
    /*
    * Usage
    * character.{var}(script)
    * var options = clear, name, mood, position, url, height and animation
    * Exaimple: character.name(tempScript)
    * Expected return: 'Ueno'
    */
    return {
        clear: () => {
            let main = document.querySelectorAll('#character-left, #character-center, #character-right')
            main[0].removeAttribute('src')
            main[1].removeAttribute('src')
            main[2].removeAttribute('src')
        },
        name: (script) => {
            return script[getCurrentIndex()].name
        },
        mood: (script) => {
            return script[getCurrentIndex()].mood[0]
        },
        position: (script) => {
            return script[getCurrentIndex()].mood[1]
        },
        url: (script) => {
            return `/assets/characters/${script[getCurrentIndex()].name
                }/${script[getCurrentIndex()].mood[0]}.png`
        },
        height: (script) => {
            return script[getCurrentIndex()].height
        },
        animation: (script) => {
            return script[getCurrentIndex()].animation
        }
    }
})()

// Update the Current Talking Character image
const updateCharacter = (script) => {
    // Set if we are updating the left right or center Character Area
    const area = document.querySelector(`#character-${character.position(script)}`)
    // Remove the current image and any animation classes
    area.removeAttribute('src')
    area.removeAttribute('class')
    // Add any animation classes
    area.classList.add(character.animation(script))
    // Set the height of the Image
    area.style.height = character.height(script)
    // Set the Image src
    area.src = character.url(script)
    /*     const area = document.querySelector(`#character-${getCharacterPosition(script)}`)
        area.removeAttribute('src')
        area.removeAttribute('class')
        area.classList.add(getCharacterAnimation(script)) //fade
        area.style.height = getCharacterHeight(script)
        area.src = getCharacterUrl(script) */
}

//old stuff
//moods
/* const getMood = (name, moodType) => {
    const path = `/assets/characters/`
    const lowerCase = this._name
    return `${path}${name}/${moodType}.png`
} */
/* const clearCharacters = () => {
    let main = document.querySelectorAll('#character-left, #character-center, #character-right')
    main[0].removeAttribute('src')
    main[1].removeAttribute('src')
    main[2].removeAttribute('src')
}
const getCharacterName = (script) => {
    return script[getCurrentIndex()].name
}
const getCharacterMood = (script) => {
    return script[getCurrentIndex()].mood[0]
}
const getCharacterPosition = (script) => {
    return script[getCurrentIndex()].mood[1]
}
const getCharacterUrl = (script) => {
    return `/assets/characters/${getCharacterName(script)}/${getCharacterMood(script)}.png`
}
const getCharacterHeight = (script) => {
    return script[getCurrentIndex()].height
}
const getCharacterAnimation = (script) => {
    return script[getCurrentIndex()].animation
} */