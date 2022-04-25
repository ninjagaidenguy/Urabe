const ambiancePlay = (file, volume) => {
    const audio = document.querySelector("#ambiance")
    audio.src = `assets/ambiance/${file}`
    audio.volume = volume
    audio.play()
}
const ambiancepause = () => {
    audio = document.querySelector("#ambiance")
    audio.pause()
}

export {ambiancePlay,ambiancepause}

//'assets/ambiance/classroomChatter.mp3'