
function timeFunction(){
    let d = new Date()
    let time = document.getElementById('time')
    if(d.getHours() < 12){
        time.innerHTML = "Good Morning"
    } else if (d.getHours() == 12){
        time.innerHTML = "It's Noon!"
    } else if (d.getHours() <= 17){
        time.innerHTML = "Good Afternoon"
    } else if (d.getHours() >= 18){
        time.innerHTML = "Good Evening"
    }
}
setInterval(timeFunction, 1000)

const searchBox = document.getElementById('search-box')
const searchBtn = document.getElementById('search-btn')
const closeSearchBtn = document.getElementById('close-search-btn')
searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('hidden')
    closeSearchBtn.addEventListener('click', () => {
        searchBox.classList.add('hidden')
    })
})
const profile = document.getElementById('profile')
const profileBtn = document.getElementById('profile-btn')
const closeBtn = document.getElementById('close-btn')
profileBtn.addEventListener('click', () => {
    profile.style.display = "block"
    closeBtn.addEventListener('click', () => {
        profile.style.display = "none"
    })
})

const revealBtn = document.getElementById('reveal-btn')
const charts = document.getElementById('charts')

revealBtn.addEventListener('click', () => {
    if(charts.style.overflow = 'hidden'){
        charts.style.height = 'fit-content'
    }
    revealBtn.style.display = "none"
})
const unrevealBtn = document.getElementById('unreveal-btn')
unrevealBtn.addEventListener('click', () => {
    charts.style.height = '20rem';
    revealBtn.style.display = "block"
})

let progress = document.getElementById('progress')
let song = document.getElementById('song')
let ctrlIcon = document.getElementById('ctrlIcon')

song.onloadedmetadata = function(){
    progress.max = song.dureation;
    progress.value = song.currentTime;
}

function playPause(){
    if (ctrlIcon.classList.contains('fa-pause')){
        song.pause()
        ctrlIcon.classList.remove('fa-pause')
        ctrlIcon.classList.add('fa-play')
    } else {
        song.play()
        ctrlIcon.classList.add('fa-pause')
        ctrlIcon.classList.remove('fa-play')
    }
}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500);
}


progress.onchange = function(){
    song.play();
    song.currentTime = progress.value
    ctrlIcon.classList.add('fa-pause')
    ctrlIcon.classList.remove('fa-play')
}

let library = document.getElementById('library')
library.addEventListener('click', () => {
    alert('Not Yet Available')
})