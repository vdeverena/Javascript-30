/*
create variables and assign elements of the DOM as values;
create a function to play audio;
must cover the possibility of not having audio
set time to 0 to avoid having to wait
create a function to get elements back to normal
*/
function playSound(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function noTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", noTransition));
window.addEventListener("keydown", playSound);

