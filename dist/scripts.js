let slideTrack = document.querySelector(".slider-track active");
let btnsUp = document.querySelectorAll(".btn_down");
let btnsDown = document.querySelectorAll(".btn_up");
let heigthSlide = document.querySelector(".slider-container").clientHeight;
let reference = document.querySelectorAll(".link_enabled");
let activeArticle = document.querySelector(".article_active");
const isDesktop = window.matchMedia('(min-width: 1160px)');

function moveSlideUp(){
    activeArticle.position+=heigthSlide/2;
    if(activeArticle.position > 0){
        activeArticle.position =  0;
    }    
    activeArticle.querySelector(".slider-track").style.transform = `translateY(${activeArticle.position}px)`
}

function moveSlideDown(){
    activeArticle.position-=heigthSlide/2;
    if(activeArticle.position <= -(activeArticle.querySelector(".slider-track").scrollHeight - activeArticle.querySelector(".slider-track").clientHeight)){
        activeArticle.position =  -(activeArticle.querySelector(".slider-track").scrollHeight - activeArticle.querySelector(".slider-track").clientHeight);
    }    
    activeArticle.querySelector(".slider-track").style.transform = `translateY(${activeArticle.position}px)`;;
}

function setActiveArticle(id){
    activeArticle.classList.remove('article_active');
    activeArticle = document.querySelector(id);
    activeArticle.classList.add('article_active');
    if(!isDesktop.matches) changeMenyState();
}

btnsDown.forEach(el => {
    el.addEventListener("click", moveSlideUp)
    });

btnsUp.forEach(el => {
    el.addEventListener("click", moveSlideDown)
    });


reference.forEach(element => {
    element.addEventListener("click",(e)=>setActiveArticle(e.target.getAttribute("href")))
    }); 

function changeNaveState(){
    let isOpen = false;
    let menu = document.querySelector(".header-navigation");
    function changeState(){
        if(!isOpen){
            menu.style.display = "flex";
            isOpen = true;
        }
        else{
            menu.style.display = "none";
            isOpen = false;
        }
    }
    return changeState;
}

let changeMenyState = changeNaveState();
document.querySelectorAll(".article-wrapper").forEach(el=>el.position=0);
document.querySelector(".header-img").addEventListener("click", changeMenyState);
document.querySelectorAll(".contacts__item").forEach(el => 
    el.addEventListener("click",(e)=>
    {
        navigator.clipboard.writeText(e.target.getAttribute("data-val"));
        alert(e.target.alt + " is copied");
    }))   