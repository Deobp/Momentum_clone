let time = document.getElementById('time');
let greeting = document.getElementById('greeting');
let name = document.getElementById('name')
let goal = document.getElementById('goal');
let date = new Date();
let timerId = setInterval(addTime, 60000);
addTime()

function addTime() {
    time.innerText = `${date.getHours()}:${date.getMinutes()}`
}