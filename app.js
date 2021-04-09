
const social = document.querySelector('.social');
const relaxation = document.querySelector('.relaxation');
const education = document.querySelector('.education');
const recreational  = document.querySelector('.recreational');
const diy = document.querySelector('.diy');
const charity = document.querySelector('.charity');
const cooking = document.querySelector('.cooking');
const music = document.querySelector('.music');
const busywork = document.querySelector('.busywork');

social.addEventListener('click', () => {
    fecth('social');
});
relaxation.addEventListener('click', () => {
    fecth('relaxation');
});
education.addEventListener('click', () => {
    fecth('education');
});
recreational.addEventListener('click', () => {
    fecth('recreational');
});
diy.addEventListener('click', () => {
    fecth('diy');
});
charity.addEventListener('click', () => {
    fecth('charity');
});
cooking.addEventListener('click', () => {
    fecth('cooking');
});
music.addEventListener('click', () => {
    fecth('music');
});
busywork.addEventListener('click', () => {
    fecth('busywork');
});
function fecth(value) {

    fetch(`http://www.boredapi.com/api/activity?type=${value}`)
    .then(data => data.json())
    .then(covid => generateHtml(covid));
    
    const generateHtml = (data) => {
    let html = `
        <div class="activity">Activity: ${data.activity}</div>
        <div class="type">Type: ${data.type}</div>
        
    `
    const whole = document.querySelector('.whole');
    whole.innerHTML = html;
    }
}