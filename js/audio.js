//Audio

//Ambiance
const ambiancePlay = (script) => {
    const audio = document.querySelector("#ambiance")
    audio.src = `assets/ambiance/${scriptFun.ambiance(script)}`
    audio.volume = globalSettings._soundEffectVolume
    audio.play()
}
const ambiancepause = () => {
    audio = document.querySelector("#ambiance")
    audio.pause()
}

//Music
const musicPlay = () => { }
const musicPause = () => { }

//Voice
const voicePlay = () => { }
const voicePause = () => { }
