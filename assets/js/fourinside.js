const bg_images = [
    'https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    ,
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80'
    ,
    'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
    ,
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
]

const LOGO_PATH = '/assets/images/'


function addAndRemoveClass(element, add, remove) {
    element.classList.remove(remove)
    element.classList.add(add)
}
window.addEventListener("scroll", (event) => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const joinBtn = document.getElementById('join');
    const navbarLinks = document.getElementsByClassName('nav-link')

    let scroll = this.scrollY;
    if (scroll > 80) {
        logo.src = LOGO_PATH + 'logo-light.svg';
        addAndRemoveClass(navbar, 'dark-bg', 'navbar-bg')
        addAndRemoveClass(joinBtn, 'btn-outline-light', 'btn-outline-dark')
        for (let i = 0; i <= 4; i++) {
            addAndRemoveClass(navbarLinks[i], 'text-light', 'text-dark')
        }

    } else {
        logo.src = LOGO_PATH + 'logo-dark.svg';
        addAndRemoveClass(navbar, 'navbar-bg', 'dark-bg')
        addAndRemoveClass(joinBtn, 'btn-outline-dark', 'btn-outline-light')
        for (let i = 0; i <= 4; i++) {
            addAndRemoveClass(navbarLinks[i], 'text-dark', 'text-light')
        }


        // navbar.classList.add('navbar-bg')
        // navbar.classList.remove()
    }
});
document.getElementById('bg-slider').style.backgroundImage = "url(" + bg_images[0] + ")";


let i = 1

function loopSlider() {
    setTimeout(function () {
        document.getElementById('bg-slider').style.backgroundImage = "url(" + bg_images[i] + ")";

        i++;
        if (i < 4) {
            loopSlider();
        }
        if (i === 4) {
            i = 0
            loopSlider();

        }
    }, 3000)
}

loopSlider();


// Country Select


