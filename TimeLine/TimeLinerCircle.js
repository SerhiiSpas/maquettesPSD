const items = Array.from(document.querySelectorAll(".js-list_years li"));
const buttons = Array.from(document.querySelectorAll(".js-circle__button"));
const ListButtons = document.querySelector(".js-list_years");
const increase = 90 / items.length;

items.forEach((li, i) => {
    li.style.transform = `rotate(${increase*i}deg)`;
    li.querySelector("button").addEventListener("click", move);
});

function move(e) {
    const activeYear = buttons.indexOf(e.target);
    ListButtons.style.transform = `rotate(${-increase*activeYear}deg)`;
    const removeActiveElem = document.querySelector(".js-data .active");
    const createActiveElem = document.querySelector(`.js-data li:nth-child(${activeYear+1})`);
    removeActiveElem.classList = "";
    createActiveElem.classList = "active";
}


/*
buttons.forEach((button, i) => {
    button.style.top = Math.sin(-Math.PI / 2 + i * increase) * radius + "px";
    button.style.left = Math.cos(-Math.PI / 2 + i * increase) * radius + "px";
    button.addEventListener("click", move);
});

function move(e) {
    const n = buttons.indexOf(e.target);
    const endAngle = (n % count) * increase;
    (function turn() {
        if (Math.abs(endAngle - angle) > 1 / 8) {
            const sign = endAngle > angle ? 1 : -1;
            angle = angle + sign / 8;
            setTimeout(turn, 40);
        } else {
            angle = endAngle;
        }
        buttons.forEach((button, i) => {
            button.style.top =
                Math.sin(-Math.PI / 2 + i * increase - angle) * radius + "px";
            button.style.left =
                Math.cos(-Math.PI / 2 + i * increase - angle) * radius + "px";
        });
    })();
}*/



