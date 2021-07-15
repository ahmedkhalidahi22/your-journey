const loader = document.querySelector('.loader')
const page =document.querySelector('.page')
const slider = document.querySelector('.slider')
const tl = gsap.timeline({defaults: {ease:'power1.out'}});



window.onload = function loading(){
    setTimeout( function() {
        loader.style.transform="translateY(-100%)";
        page.style.opacity=1
    } , 450)
 
    slider.style.transform="translateY(-100%)";

    
} 

