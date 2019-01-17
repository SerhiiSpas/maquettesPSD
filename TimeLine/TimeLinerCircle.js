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
