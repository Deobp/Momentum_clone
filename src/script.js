let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let task = document.getElementById("task");
let date = new Date();
let timerId = setInterval(addTime, 60000);
addTime();


name.addEventListener('click', () => name.contentEditable = "true");
tasks.addEventListener('click', () => tasks.contentEditable = "true");

name.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') name.contentEditable = "false"
});

tasks.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') tasks.contentEditable = "false"
});

function addTime() {
    time.innerText = `${new Date().getHours()}:${new Date().getMinutes()}`;
}