const body = document.querySelector('[data-theme]');
const switchBtn = document.querySelector('[data-switch]');
const lightTheme = 'light';
const darkTheme = 'dark';
let bodyTheme = body.dataset;

const themeToggle = () => {
    bodyTheme.theme == darkTheme ?
        (bodyTheme.theme = lightTheme, switchBtn.classList.add('active')) : 
        (bodyTheme.theme = darkTheme, switchBtn.classList.remove('active'));
}

switchBtn.addEventListener('click', themeToggle);
