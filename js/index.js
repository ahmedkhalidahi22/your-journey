
const loader = document.querySelector('.loader')
const page =document.querySelector('.page')
const slider = document.querySelector('.slider')
const tl = gsap.timeline({defaults: {ease:'power1.out'}});
const header = document.querySelector('header')
const mainP = document.querySelector('.landing-p')
const begins = document.querySelector('#begins')
const mainBTN = document.querySelector('.main-btn')

var smallScreen = window.matchMedia("(max-width: 899px)") // media query
var mediumScreen = window.matchMedia("(min-width: 900px) and (max-width: 1200px)") // media query

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
        tl.fromTo('header', {opacity: 0, y: "-30%"} , {opacity: 1 , y: "0%", duration: 0.65})
        tl.fromTo('.landing-p', {opacity: 0, y: "-20%"} , {opacity: 1 , y: "0%", duration: 0.65})
        tl.fromTo('#begins', {opacity: 0, y: "-20%"} , {opacity: 1 , y: "0%", duration: 0.65})
        tl.fromTo('.main-btn', {opacity: 0, y: "40%"} , {opacity: 1 , y: "0%", duration: 0.8})
    } , 1700)
 
    
} 


// second section animation using first intersectionObserver

let parent1 = document.querySelector('.animate-1');
let target1 = document.querySelectorAll('.target1');
let firstH2= document.querySelector('.first-h2')
let firstP = document.querySelector('.p1')


// ******* SMALL SCREEN ANIMATION STARTS  *********** //

if (smallScreen.matches){

    // ** DEST SECTION ** //

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.105

      }
      
    
      let callback = (entries, observer) => {
        entries.forEach(entry => {
    
            if (entry.isIntersecting){
    
                setTimeout(function(){

                       entry.target.style.opacity= 1
                       entry.target.style.transform= " translateY(0%)"
    
                },0)
            }
      
        });
      };
    
      let observer = new IntersectionObserver(callback, options);
      target1.forEach(image=>{

        observer.observe(image);
      })

      
   // ** EXP SECTION ** //

      let targetEX = document.querySelectorAll('.targetEX')
      let options3 = {
        root: null,
        rootMargin: '0px',
        threshold: 0.105
      }
      
    
      let callback3 = (entries, observer) => {
        entries.forEach(entry => {
            let x= 0
            if (entry.isIntersecting){

                setTimeout(function(){

                    entry.target.classList.add('active')
 
             },0)
           
            }
        });
      };
    
      let observer3 = new IntersectionObserver(callback3, options3);
    
      targetEX.forEach(imageEX=>{

        observer3.observe(imageEX);
      })

}


// ******* SMALL SCREEN ANIMATION ENDS *********** //


else if (mediumScreen.matches){

    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.29
      }
      
    
      let callback = (entries, observer) => {
        entries.forEach(entry => {
    
            if (entry.isIntersecting){
    
                setTimeout(function(){
                    target1.forEach(cell => {
                       cell.style.opacity= 1
                       cell.style.transform= " translateY(0%)"
                    })
    
                },170)
                observer.unobserve(parent1);
            }
      
        });
      };
    
      let observer = new IntersectionObserver(callback, options);
    
      observer.observe(parent1);
    


}
else{

    let options = {
        root: null,
        rootMargin: '-80px',
        threshold: 0.8
      }
      
    
      let callback = (entries, observer) => {
        entries.forEach(entry => {
    
            if (entry.isIntersecting){
    
                setTimeout(function(){
                    target1.forEach(cell => {
                       cell.style.opacity= 1
                       cell.style.transform= " translateY(0%)"
                    })
    
                },170)
                observer.unobserve(parent1);
            }
      
        });
      };
    
      let observer = new IntersectionObserver(callback, options);
    
      observer.observe(parent1);
    


}



// third section animation using second intersection observer

let parent2 = document.querySelector('.m2')
let scndH2 = document.querySelector('.exp-h2')
let scndP = document.querySelector('.p2')

let options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.11
  }
  

  let callback2 = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting){
            if (entry.target== parent1){
                
                setTimeout(function(){
                    firstH2.classList.add('active')
                    firstP.classList.add('active')
    
                },0)

            }
            else if(entry.target== parent2){
                setTimeout(function(){
                    scndH2.classList.add('active')
    
                    setTimeout(function(){
                        scndP.classList.add('active')   
                    }, 200)
                      
    
                },0)

            }
        }
  
    });
  };

  let observer2 = new IntersectionObserver(callback2, options2);

  observer2.observe(parent1);
  observer2.observe(parent2);

  

  // fourth section "experiences" animation using third intersection observer
let targetEX = document.querySelectorAll('.targetEX')
let parent3 = document.querySelector('.animate-2')
let options3 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  }
  

  let callback3 = (entries, observer) => {
    entries.forEach(entry => {
        let x= 0
        if (entry.isIntersecting){
            targetEX.forEach(cell => {
                setTimeout( ()=>{
                    cell.classList.add("active");
                }, x)
                
                x+=400
            })
            
       
        }
    });
  };

  let observer3 = new IntersectionObserver(callback3, options3);

    observer3.observe(parent3);





//   *****************   ANIMATION FUNCTION   *****************   // 
