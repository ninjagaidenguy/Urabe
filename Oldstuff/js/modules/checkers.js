/**
 * @description hide any area/s by id
 * @param {(string|string[])} id - This should be a string or an array of strings with the ids you want to hide
 */
const hideArea = (id) => {
    if( typeof(id) === 'string'){
       let main = document.querySelector(id)
       main.classList.add('hide') 
    } else if ( typeof(id === 'object' )){
        for (let i = 0; i < id.length; i++) {
            const main = document.querySelector(id[i])
            main.classList.add('hide') 
        }
    }
}
const showArea = (id) => {
    if( typeof(id) === 'string'){
       let main = document.querySelector(id)
       main.classList.remove('hide') 
    } else if ( typeof(id === 'object' )){
        for (let i = 0; i < id.length; i++) {
            const main = document.querySelector(id[i])
            main.classList.remove('hide') 
        }
    }
}
const checkUndefined = (area) => {
    return typeof area.background === 'undefined'
}

export {hideArea,showArea,checkUndefined}