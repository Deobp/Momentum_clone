let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let task = document.getElementById("task");
let timerId = setInterval(addTime, 60000);
addTime();


name.addEventListener('dblclick', () => name.setAttribute("contentEditable", "true"));
name.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') name.setAttribute("contentEditable", "false")
});

tasks.addEventListener('click', () => tasks.setAttribute("contentEditable", "false"));

tasks.addEventListener("keypress", (e) => {
    if (e.key == 'Enter') tasks.setAttribute("contentEditable", "false")
});

function addTime() {
    time.innerText = `${new Date().getHours()}:${new Date().getMinutes()}`;
}