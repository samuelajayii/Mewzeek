
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
searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('hidden')
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