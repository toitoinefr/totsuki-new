import css from "./css/app.scss"

window.onload = async () => {
    const intro = document.querySelector('.intro')
    const logo = document.querySelector('.intro-logo')

    setTimeout(() =>{
        intro.classList.add('end');
    }, 1500);
    logo.style.width = "60%";
}