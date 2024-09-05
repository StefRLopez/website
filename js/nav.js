function toggle() {
    let navbar = document.getElementById("navbar")
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}

function logScreenSize(){
    if (window.innerWidth >= 800){
        navbar.style.display = "flex";
    }
}

window.addEventListener('resize', logScreenSize);

let burgerMenu = document.getElementById("burger-menu")

burgerMenu.addEventListener("click", toggle)

// Routing with onclick
function routeHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

let home = document.getElementById("home-button")

home.addEventListener("click", routeHome)

function routeAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("blog").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
let about = document.getElementById("about-button")

about.addEventListener("click", routeAbout)

function routeBlog() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("blog").style.display = "block";
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
}
let blog = document.getElementById("blog-button")

blog.addEventListener("click", routeBlog)

function routeServices() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("services").style.display = "block";
    document.getElementById("contact").style.display = "none";
}
let services = document.getElementById("services-button")

services.addEventListener("click", routeServices)

function routeContact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("blog").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "block";
}
let contact = document.getElementById("contact-button")

contact.addEventListener("click", routeContact)
