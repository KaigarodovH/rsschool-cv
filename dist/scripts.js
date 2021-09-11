let slideTrack = document.querySelector(".slider-track active");

let btnsUp = document.querySelectorAll(".btn_down");
let btnsDown = document.querySelectorAll(".btn_up");

let heigthSlide = document.querySelector(".slider-container").clientHeight;


let reference = document.querySelectorAll(".link_enabled");

let activeArticle = document.querySelector(".article_active");

function setActiveArticle(id){
    activeArticle.classList.remove('article_active');
    activeArticle = document.querySelector(id);
    activeArticle.classList.add('article_active');
}

btnsDown.forEach(el=>{
    el.addEventListener("click",()=>{
        activeArticle.position+=heigthSlide;
        activeArticle.querySelector(".slider-track").style.transform = `translateY(${activeArticle.position}px)`
        console.log("up")})
    });

btnsUp.forEach(el=>{
    el.addEventListener("click",()=>{
        activeArticle.position-=heigthSlide;
        activeArticle.querySelector(".slider-track").style.transform = `translateY(${activeArticle.position}px)`
        console.log("down")})
    });


reference.forEach(element => {
    element.addEventListener("click",(e)=>setActiveArticle(e.target.getAttribute("href")))
}); 

document.querySelectorAll(".article-wrapper").forEach(el=>el.position=0);