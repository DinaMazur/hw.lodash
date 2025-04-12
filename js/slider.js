const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const changeImageSize = _.debounce(function () {
    const size = slider.value;
    image.style.width = `${size}px`;
    image.style.height = `${size}px`;
}, 150); 

slider.addEventListener("input", changeImageSize);

// ЗАВДАННЯ 2

const box = document.getElementById("box");

const mouseBox = _.debounce(function (event) {
    box.style.transform = `translate(${event.clientX - 25}px, ${event.clientY - 25}px)`;
}, 150); 

document.addEventListener("mousemove", mouseBox);
