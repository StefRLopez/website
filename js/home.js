let home = document.getElementById("flex-container-home")
home.addEventListener("mouseenter", slideIn)
home.addEventListener("mouseleave", slideOut)

let slideFactor = window.innerWidth * 0.35

function slideIn(){
    if(window.innerWidth >= 1000){
        document.getElementById("home-image").style.transform = `translate(${-slideFactor}px, -50%)`;
    }
}

function slideOut(){
    document.getElementById("home-image").style.transform = 'translate(-50%, -50%)';
}
