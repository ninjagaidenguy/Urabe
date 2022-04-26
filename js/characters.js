//Characters
const setCharacter = (url, height = '50vh', align = 'center', animation = 'fade') => {
    let main = document.querySelector("#character")
    main.removeAttribute('class')
    main.removeAttribute('src')
    main.src = url``
    main.style.height = height
    main.classList.add(align)
    main.classList.add(animation)
}
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
//moods
const getMood = (name, moodType) => {
    const path = `/assets/characters/`
    const lowerCase = this._name
    return `${path}${name}/${moodType}.png`
}
