const showMainMenu = () => {
    document.querySelector("#main-menu").classList.remove('hide')
}
const hideMainMenu = () => {
    document.querySelector("#main-menu").classList.add('hide')
}

export {showMainMenu, hideMainMenu}