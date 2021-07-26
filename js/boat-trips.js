
const tl = gsap.timeline({defaults: {ease:'power1.out'}});
const h1 = document.getElementById('icon-h1')
const nav = document.querySelector("#head-nav")
const heroH1 = document.querySelector(".hero-h1")
const welcome = document.querySelector(".welcome-animate")


h1.style.opacity= 0;
h1.style.transform= "translateY(-30%)";
nav.style.opacity= 0; 
nav.style.transform= "translateY(-30%)";
heroH1.style.opacity= 0; 
welcome.style.opacity= 0; 
welcome.style.transform= "translateY(30%)";


window.onload = function loading(){

// ******* HERO SECTION ANIMATION ********* //   

    setTimeout( function() {
        tl.fromTo( [h1, nav] , {opacity: 0, y: "-30%"} , {opacity: 1 , y: "0%", duration: 0.65})
        tl.fromTo( [heroH1, welcome] , {opacity: 0, y: "30%"} , {opacity: 1 , y: "0%", duration: (0.65)})

    } , 190)
 

    
// ******* GRID SECTION ANIMATION ********* //

// TITLE ANIMATIONS

let parent1 = document.querySelector('#first-sec');
let firstH3 = document.querySelector('.first-h3');
let firstP= document.querySelector('.first-sec-p');



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
    
                    setTimeout(function(){
                        firstP.classList.add('active')   
                    }, 100)
                      
    
                },0)

            }
            else if(entry.target== parent3){
                setTimeout(function(){
                    scndH3.classList.add('active')
    
                    setTimeout(function(){
                        scndP.classList.add('active')   
                    }, 100)
                      
    
                },0)

            }
            else if(entry.target== parent4){

                 thirdH3.classList.add('active')

            }
            else if(entry.target== parent5){

                fourthH3.classList.add('active')

                setTimeout(()=>{
                qouat.classList.add('active')  
                },800)
           }
        }
  
    });
  };

  let observer = new IntersectionObserver(callback, options);

  observer.observe(parent1);


// GRID ANIMATION

let parent2 = document.querySelector('#first-sec');
let row1 = document.querySelectorAll('.row1-anmt');
let row2 = document.querySelectorAll('.row2-anmt');
let col1 = document.querySelector('.col-anmt');

let flickity= document.querySelector('.js-flickity');  // CAROUSEL ANIMATIONS
let flckty_A= document.querySelector('.flckty-a');  // CAROUSEL A-TAG ANIMATIONS


let options2 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.54
  }
  

  let callback2 = (entries, observer) => {
    entries.forEach(entry => {
        let x= 0
        if (entry.isIntersecting){

            row1.forEach(cell => {
                setTimeout( ()=>{
                    cell.classList.add("active");
                }, x)
                
                x+=180
            })

            row2.forEach(cell => {
                setTimeout( ()=>{
                    cell.classList.add("active");
                }, x)
                
                x+=180
            })
            setTimeout(()=>{
                col1.classList.add("active");

            }, 1700)
           
            
            flickity.classList.add("active");
            setTimeout(()=>{
                flckty_A.classList.add("active");

            }, 850)
        }
  
    });
  };

  let observer2 = new IntersectionObserver(callback2, options2);

  observer2.observe(parent2);



// ******* CARDS SECTION ANIMATION ********* //



// TITLE ANIMATIONS
let parent3 = document.querySelector('#second-sec');
let scndH3 = document.querySelector('.scnd-h3');
let scndP= document.querySelector('.second-sec-p ');
observer.observe(parent3);




// CARDS ANIMATION
let card1 = document.querySelectorAll('.crd-row1')
let card2 = document.querySelectorAll('.crd-row2')
let card3 = document.querySelectorAll('.crd-row3')
let card4 = document.querySelectorAll('.crd-row4')
let cardTop = document.querySelectorAll('.C-TOP')
let cardBtm = document.querySelectorAll('.C-BTM')


let cardsARR = [ card1 ,card2 ,card3 ,card4 ]
let minCardsARR = [ cardTop, cardBtm ]


let options3 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.31
  }
  

  let callback3 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){

            if (entry.target == card1[0]){
                card1.forEach(card=>{
                    card.classList.add("active");
                })
            }
            else if (entry.target == card2[0]){
                card2.forEach(card=>{
                    card.classList.add("active");
                })
            }
            else if (entry.target == card3[0]){
                card3.forEach(card=>{
                    card.classList.add("active");
                })
            }
            else if (entry.target == card4[0]){
                card4.forEach(card=>{
                    card.classList.add("active");
                })
            }
            else if (entry.target == cardTop[0]){
                cardTop.forEach(card=>{
                    card.classList.add("active");
                })
            }
            else if (entry.target == cardBtm[0]){
                cardBtm.forEach(card=>{
                    card.classList.add("active");
                })
            }
        }
  
    });
  };

  let observer3 = new IntersectionObserver(callback3, options3);

  cardsARR.forEach(card=> {
    observer3.observe(card[0]);
})

minCardsARR.forEach(card=> {
    observer3.observe(card[0]);
})




// ******* ICON-CARDS SECTION ANIMATION ********* //

// TITLE ANIMATIONS
let parent4 = document.querySelector('.third-sec');
let thirdH3 = document.querySelector('.third-h3');
observer.observe(parent4);




// CARDS ANIMATION
let icons1 = document.querySelector('.first-cards-set')
let icons2 = document.querySelector('.second-cards-set')


let iconsARR = [ icons1 ,icons2]



let options4 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  }
  

  let callback4 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){

            entry.target.classList.add("active");

        }
  
    });
  };

  let observer4 = new IntersectionObserver(callback4, options4);

  iconsARR.forEach(icon=> {
    observer4.observe(icon);
})





// ******* COMMENT SECTION ANIMATION ********* //

// TITLE ANIMATIONS
let parent5 = document.querySelector('#fourth-sec');
let fourthH3 = document.querySelector('.frth-h3');
let qouat = document.querySelector('.fa-quote-right');
observer.observe(parent5);




// COMMENTS ANIMATION
let comments = document.querySelector('.cmnt-class')


let options5 = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  }
  

  let callback5 = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){

            entry.target.classList.add("active");

        }
  
    });
  };

  let observer5 = new IntersectionObserver(callback5, options5);

    observer5.observe(comments);



} 

