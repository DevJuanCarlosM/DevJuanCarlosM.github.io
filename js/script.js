//scrol boton hacia arriba
document.getElementById("arriba_boton").addEventListener("click", scrollup);

function scrollup(){
    var currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0,currentScroll -(currentScroll /10));
    }
} 