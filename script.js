const button1 = document.querySelector('.section1');
const button2 = document.querySelector('.section2');
const button3 = document.querySelector('.section3');
const circle = document.querySelector('.circle');
const link = document.getElementById('theme-link');

let currentTheme = 1;
const totalThemes = 3;

button1.addEventListener('click', () => {
    currentTheme = 1;
    link.href = `theme${currentTheme}.css`;
    circle.style.left = '0px';
    setActiveButton(button1);
});

button2.addEventListener('click', () => {
    currentTheme = 2;
    link.href = `theme${currentTheme}.css`;
    circle.style.left = '27px';
    setActiveButton(button2);
});

button3.addEventListener('click', () => {
    currentTheme = 3;
    link.href = `theme${currentTheme}.css`;
    circle.style.left = '55px';
    setActiveButton(button3);
});

function setActiveButton(activeButton) {
    // Remove the active class from all buttons
    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.remove('active');

    // Add the active class to the clicked button
    activeButton.classList.add('active');
}