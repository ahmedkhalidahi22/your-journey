const loader = document.querySelector('.loader')
const page =document.querySelector('.page')
const slider = document.querySelector('.slider')
const tl = gsap.timeline({defaults: {ease:'power1.out'}});
const header = document.querySelector('header')
const mainP = document.querySelector('.landing-p')
const begins = document.querySelector('#begins')
const mainBTN = document.querySelector('.main-btn')

header.style.opacity= 0;
header.style.transform= "translateY(-30%)";

mainP.style.opacity= 0;
mainP.style.transform= "translateY(-20%)";

begins.style.opacity= 0;
begins.style.transform= "translateY(-20%)";

mainBTN.style.opacity= 0;
mainBTN.style.transform= "translateY(40%)";

window.onload = function loading(){
    setTimeout( function() {
        loader.style.transform="translateY(-100%)";
        page.style.opacity=1
    } , 300)
 

    setTimeout( function() {
        tl.fromTo('header', {opacity: 0, y: "-30%"} , {opacity: 1 , y: "0%", duration: 0.8})
        tl.fromTo('.landing-p', {opacity: 0, y: "-20%"} , {opacity: 1 , y: "0%", duration: 0.8})
        tl.fromTo('#begins', {opacity: 0, y: "-20%"} , {opacity: 1 , y: "0%", duration: 0.8})
        tl.fromTo('.main-btn', {opacity: 0, y: "40%"} , {opacity: 1 , y: "0%", duration: 0.9})
    } , 1700)
 
    
} 

