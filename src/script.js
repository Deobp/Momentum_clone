let time = document.getElementById("time");
let name = document.getElementById("name");
let task = document.getElementById("task");
let divCheckbox = document.getElementById("checkbox");
let form = document.getElementById("form");
let text = document.getElementById("text");
let divGoal = document.getElementById("goal");
let resetGoal = document.getElementById("close");
let timerId = setInterval(addTime, 60000);

addTime()
localStorageUploader()

form.addEventListener("submit", (e) => {
    e.preventDefault();
    divCheckbox.removeAttribute("hidden");
    divGoal.setAttribute("hidden", "true");
    task.innerText = text.value;
    text.value = "";
    localStorage.setItem("task", task.innerText);

});

resetGoal.addEventListener("click", () => {
    divGoal
    divGoal.removeAttribute("hidden");
    divCheckbox.setAttribute("hidden", "true");
    localStorage.removeItem("task");
});

name.addEventListener("dblclick", () => name.setAttribute("contentEditable", "true"));

name.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        localStorage.setItem("name", name.innerText);
        name.setAttribute("contentEditable", "false");
    }
});

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
    if (localStorage.getItem("name")) {
        name.innerText = localStorage.getItem("name");
    }
    if (localStorage.getItem("task")) {
        task.innerText = localStorage.getItem("task");
        divCheckbox.removeAttribute("hidden");
        divGoal.setAttribute("hidden", "true");
    }
}