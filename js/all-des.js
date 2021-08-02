const tl = gsap.timeline({defaults: {ease:'power1.out'}});

const h1 = document.getElementById('icon-h1')
const nav = document.querySelector("#head-nav")
const heroH1 = document.querySelector(".hero-h1")
const welcome = document.querySelector("#main-p")
const introIcons = document.querySelectorAll(".icon-ani")
const IconsText = document.querySelectorAll(".icon-text")
const body = document.querySelector("body")

h1.style.opacity= 0;
nav.style.opacity= 0; 
heroH1.style.opacity= 0; 
welcome.style.opacity= 0; 
body.style.opacity= 0; 



window.onload = function loading(){

// ******* BODY ANIMATION ********* //   

    tl.fromTo(  body , {opacity: 0} , {opacity: 1 , duration: (0.8)})

    
// ******* HERO SECTION ANIMATION ********* //   

    setTimeout( function() {
        tl.fromTo( [h1, nav] , {opacity: 0, y: "-30%"} , {opacity: 1 , y: "0%", duration: 0.55})
        tl.fromTo( heroH1 , {opacity: 0, y: "30%"} , {opacity: 1 , y: "0%", duration: (0.55)})
        tl.fromTo(  welcome , {opacity: 0, y: "30%"} , {opacity: 1 , y: "0%", duration: (0.55)})
        tl.fromTo(  introIcons , {opacity: 0, y: "30%"} , {opacity: 1 , y: "0%", duration: (0.55)})
        tl.fromTo(  IconsText , {opacity: 0} , {opacity: 1 , duration: (0.75)})


    } , 0)
 
}

// ******* FIRST CAROUSEL SECTION ANIMATION ********* //

// TITLE ANIMATIONS

let parent1 = document.querySelector('#experiences-sect');

let firstH3 = document.querySelector('.first-h3');


let scndH3 = document.querySelector('.second-h3');
let scndP= document.querySelector('.second-p');

let thirdH3 = document.querySelector('.third-h3');


let fourthH3 = document.querySelector('.fourth-h3');
let fourthP= document.querySelector('.fourth-p');



let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.08
  }
  

  let callback = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting){
            if (entry.target== parent1){
                
                setTimeout(function(){
                    firstH3.classList.add('active')
    
    
                },0)

            }
            else if(entry.target== parent2){
                setTimeout(function(){
                    scndH3.classList.add('active')
    
                    setTimeout(function(){
                        scndP.classList.add('active')   
                    }, 200)
                      
    
                },0)

            }
            else if(entry.target== parent3){

                 thirdH3.classList.add('active')

            }
            else if(entry.target== parent4){

                fourthH3.classList.add('active')
                 setTimeout(function(){
                fourthP.classList.add('active')
                    }, 200)
           }
        }
  
    });
  };

  let observer = new IntersectionObserver(callback, options);

  observer.observe(parent1);


  // FIRST CAROUSEL ANIMATION

  let firstCarousel = document.querySelector('.crsl1');
  let allCarousels = document.querySelectorAll('.carousel')
  

let options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  }
  

  let callback2 = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting){

            entry.target.classList.add('active') 
        
        }
  
    });
  };

  let observer2 = new IntersectionObserver(callback2, options2);

  allCarousels.forEach(caro =>{
    observer2.observe(caro);
  })
  

  // FIRST CAROUSEL TITLE

  let parent2 = document.querySelector('#cities-sect');

  observer.observe(parent2);



// ******* THIRD SECTION ANIMATION ********* //
    
let parent3 = document.querySelector('.popular-places');

let grid = document.querySelector('.grid');

 observer.observe(parent3);



 let options3= {
    root: null,
    rootMargin: '0px',
    threshold: 0.27
  }
  

  let callback3 = (entries, observer) => {
    entries.forEach(entry => {
        let x= 0
        if (entry.isIntersecting){

            grid.classList.add('active')

        }
  
    });
  };

  let observer3 = new IntersectionObserver(callback3, options3);

  observer3.observe(parent3);






// ******* FOURTH SECTION ANIMATION ********* //
    
let parent4 = document.querySelector('#hotels-sect');

 observer.observe(parent4);



// ******* ANIMATION STOPPER (stops animation while resizing) ********* //



let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
