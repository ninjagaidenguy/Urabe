const textShower = (text, speed, area = '#saying') => {
    const mainText = document.querySelector(`${area}`)
    mainText.textContent = ''
    let i = 0
    const timer = setInterval(() => {
        if (i < text.length) {
            mainText.append(text.charAt(i))
            i++
        } else {
            clearInterval(timer)
        }
    }, speed)
}

export {textShower}