// Main Menu event listeners
// New
document.querySelector('#text').addEventListener('click', () => {
    goNext(globalScript)
})
//Save
document.querySelector("#save").addEventListener('click', () => {
})
//Load
document.querySelector("#load").addEventListener('click', () => {
})
//Settings
document.querySelector("#settings").addEventListener('click', () => {
})
//Close
document.querySelector("#close").addEventListener('click', () => {
    hideMainMenu()
    showArea(['#character', '#choices', '#text'])
    removeBackgroundOverlay('#main-background', 'gray-overlay')
})
//Settings
document.querySelector("#tm-settings").addEventListener('click', () => {
    showTextMenu()
    setBackgroundOverlay('#main-background', 'gray-overlay')
    hideArea(['#character', '#choices', '#text'])
})
//Text Advance
document.querySelector('#new').addEventListener('click', () => {
    hideMainMenu()
    goNext(tempScript)
})


// Show Main Menu
const showMainMenu = () => {
    document.querySelector("#main-menu").classList.remove('hide')
}
//Hide Main Menu
const hideMainMenu = () => {
    document.querySelector("#main-menu").classList.add('hide')
}