let time = document.getElementById("time");
let name = document.getElementById("name");
let task = document.getElementById("task");
let timerId = setInterval(addTime, 60000);
let checkbox = document.getElementById("checkbox");

addTime()
localStorageUploader()
document.getElementById('text').addEventListener("submit", test);

formz.addEventListener("submit", test);
// () {
//     if (e.key == "Enter") {
//         localStorage.setItem("task", input.value);
//         task.innerText = input.value;
//         checkbox.removeAttribute("hidden");
//         input.setAttribute("hidden", "true");
//     }
function test(event) {
    alert('1')
    event.preventDefault();
}

name.addEventListener("dblclick", () => name.setAttribute("contentEditable", "true"));
name.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        localStorage.setItem("name", name.innerText);
        name.setAttribute("contentEditable", "false");

    }
});

// task.addEventListener("click", () => task.setAttribute("contentEditable", "true"));

// task.addEventListener("keypress", (e) => {
//     if (e.key == "Enter") {
//         localStorage.setItem("task", task.innerText);
//         task.setAttribute("contentEditable", "false")
//     }
// });


function addTime() {
    let clock = "";
    if (/^\d\d$/.test(String(new Date().getHours()))) {
        clock = clock.concat(String(new Date().getHours())).concat(":");
    } else {
        clock = clock.concat("0").concat(String(new Date().getHours())).concat(":");
    }
    if (/^\d\d$/.test(String(new Date().getMinutes()))) {
        clock = clock.concat(String(new Date().getMinutes()));
    } else {
        clock = clock.concat("0").concat(String(new Date().getMinutes()));
    }
    time.innerText = clock;
}

function localStorageUploader() {
    if (localStorage.getItem("name")) name.innerText = localStorage.getItem("name");
    if (localStorage.getItem("task")) task.innerText = localStorage.getItem("task");
}