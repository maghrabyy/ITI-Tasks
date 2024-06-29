//audio player components
const audioPlayer = document.getElementById("audioPlayer")
const musicImg = document.querySelector(".music-img")
const musicTitle = document.querySelector(".music-title")
const musicTime = document.querySelector(".music-time-num")

//audio player controller buttons
const toggleMuteBtn = document.getElementById('togglemute-btn')
const replayBtn = document.getElementById("replay-btn")
const backwardBtn = document.getElementById("backward-btn")
const playPauseBtn = document.getElementById("playpause-btn")
const forwardBtn = document.getElementById("forward-btn")
const volumeRange = document.getElementById("volumeRange")
const timeRange = document.getElementById("timeRange")

//music list
const musicList = [
    {imgSrc:"21pilots-chlorine.jpg",title:"Twenty One Pilots - Chlorine", audioSrc: "twenty one pilots - Chlorine.mp3"},
    {imgSrc:"21savage-bankaccount.jpg",title:"21 Savage - Bank Account", audioSrc: "21 Savage - Bank Account.mp3"},
    {imgSrc:"kidCuti-daynnight.jpg",title:"Kid Cudi - Day N Night", audioSrc: "Kid Cudi - Day 'N' Night.mp3"},
    {imgSrc:"tovelo-habits.png",title:"Tove Lo - Habits", audioSrc: "Tove Lo - Habits (Stay High).mp3"},
    {imgSrc:"youngerHunger-deadInside.jpg",title:"Younger Hunger - Dead Inside", audioSrc: "Younger Hunger - Dead Inside.mp3"},
]

const thumbnailSrc = 'assets/images/music-thumbnails/';
const audioSrc = 'assets/audio/';

let musicIndex = 0;

function setMusic(index){
    audioPlayer.setAttribute("src",audioSrc+musicList[index].audioSrc)
    musicImg.setAttribute("src",thumbnailSrc+musicList[index].imgSrc)
    musicImg.setAttribute("alt",musicList[index].title)
    musicTitle.textContent = musicList[index].title
}
setMusic(musicIndex)

const togglePlayAudio = ()=>{
    if(audioPlayer.paused){
        audioPlayer.play()
        playPauseBtn.classList.remove("fa-play")
        playPauseBtn.classList.add("fa-pause")
    }else{
        audioPlayer.pause()
        playPauseBtn.classList.remove("fa-pause")
        playPauseBtn.classList.add("fa-play")
    }
}

playPauseBtn.addEventListener("click",togglePlayAudio)

const toggleMute = ()=>{
    if(!audioPlayer.muted){
        audioPlayer.muted = true
        toggleMuteBtn.classList.remove("fa-volume-high")
        toggleMuteBtn.classList.add("fa-volume-xmark")
    }else{
        audioPlayer.muted = false
        toggleMuteBtn.classList.remove("fa-volume-xmark")
        toggleMuteBtn.classList.add("fa-volume-high")
    }
}

toggleMuteBtn.addEventListener("click",toggleMute)

const replayMusic = ()=>audioPlayer.load()

replayBtn.addEventListener("click",replayMusic)

const musicBackward = ()=>{
    if(musicIndex > 0){
        musicIndex--
        setMusic(musicIndex)
    }
}

backwardBtn.addEventListener("click",musicBackward)

const musicForward = ()=>{
    if(musicIndex < musicList.length-1){
        musicIndex++
        setMusic(musicIndex)
    }
}

forwardBtn.addEventListener("click",musicForward)

volumeRange.addEventListener("input",(vol)=>{
    audioPlayer.volume = vol.target.valueAsNumber
})

timeRange.addEventListener("input",(time)=>{
    audioPlayer.currentTime = time.target.valueAsNumber
})

audioPlayer.addEventListener("timeupdate",()=>{
    const currentTime = (audioPlayer.currentTime/60).toFixed(2).replace(".",":")
    const musicDuration = (audioPlayer.duration/60).toFixed(2).replace(".",":")
    musicTime.textContent = currentTime + ":" + musicDuration
    timeRange.value = audioPlayer.currentTime
    if(currentTime == musicDuration){
        playPauseBtn.classList.remove("fa-pause")
        playPauseBtn.classList.add("fa-play")
    }
})

audioPlayer.addEventListener("durationchange",()=>{
    timeRange.setAttribute("max",audioPlayer.duration)
    const musicDuration = (audioPlayer.duration/60).toFixed(2).replace(".",":")
    musicTime.textContent = "00" + ":" + musicDuration
    playPauseBtn.classList.remove("fa-pause")
    playPauseBtn.classList.add("fa-play")
    if(musicIndex === 0){
        backwardBtn.style.color = "#474444"
    }else{
        backwardBtn.style.color = "#000"
    }

    if(musicIndex === musicList.length-1){
        forwardBtn.style.color = "#474444"
    }else{
        forwardBtn.style.color = "#000"
    }
})

document.addEventListener("keydown",(e)=>{
    if(e.code === 'Space')
        togglePlayAudio()
    if(e.code === 'ArrowLeft')
        musicBackward()
    if(e.code === 'ArrowRight')
        musicForward()
    if(e.code === 'KeyM')
        toggleMute()
    if(e.code === 'KeyR')
        replayMusic()
})