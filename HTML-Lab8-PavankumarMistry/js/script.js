const shape = document.querySelector('.shape');
const btn = document.querySelector('.clickMeBtn');

btn.addEventListener('click', () => {
    shape.classList.add('rotate-scale');
});

shape.addEventListener("transitionend", () => {
    shape.classList.remove("rotate-scale");
});