let time = document.getElementById("time");
let name = document.getElementById("name");
let task = document.getElementById("task");
let divCheckbox = document.getElementById("checkbox");
let goalForm = document.getElementById("goalForm");
let goalInputForm = document.getElementById("goalInputForm");
let divGoal = document.getElementById("goal");
let check = document.getElementById("check");
let closeGoal = document.getElementById("closeGoal");

task.addEventListener("click", checkCondition);
check.addEventListener("click", checkCondition);
name.addEventListener("dblclick", () => name.setAttribute("contentEditable", "true"));

goalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    divCheckbox.removeAttribute("hidden");
    divGoal.setAttribute("hidden", "true");
    task.innerText = goalInputForm.value;
    goalInputForm.value = "";
    localStorage.setItem("task", task.innerText);

});

closeGoal.addEventListener("click", () => {
    divGoal
    divGoal.removeAttribute("hidden");
    divCheckbox.setAttribute("hidden", "true");
    localStorage.removeItem("task");
});

name.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        localStorage.setItem("name", name.innerText);
        name.setAttribute("contentEditable", "false");
    }
});

function checkCondition() {
    if (check.className == "fa fa-square-o") {
        check.className = "fa fa-check-square-o";
        task.style.textDecoration = "line-through";
        localStorage.setItem("check", true);
    } else {
        check.className = "fa fa-square-o";
        task.style.textDecoration = "none";
        localStorage.removeItem("check");
    }
}

function dateHours() {
    let hours = new Date().getHours();
    if (/^\d\d$/.test(String(hours))) {
        return String(hours).concat(":");
    } else {
        return ("0").concat(String(hours)).concat(":");
    }
}

function dateMinutes() {
    let minutes = new Date().getMinutes();
    if (/^\d\d$/.test(String(minutes))) {
        return minutes;
    } else {
        return ("0").concat(String(minutes));
    }
}

(function localStorageUploader() {
    if (localStorage.getItem("name")) {
        name.innerText = localStorage.getItem("name");
    }
    if (localStorage.getItem("task")) {
        task.innerText = localStorage.getItem("task");
        divCheckbox.removeAttribute("hidden");
        divGoal.setAttribute("hidden", "true");
    }
    if (localStorage.getItem("check")) {
        check.className = "fa fa-check-square-o";
        task.style.textDecoration = "line-through";
    }
})();

clock()
let timerId = setInterval(clock, 60000)

function clock() {
    time.innerText = `${dateHours()}${dateMinutes()}`;
}
setTimeout(function() {
    time.innerText = `${dateHours()}${dateMinutes()}`;
}(), 6000);