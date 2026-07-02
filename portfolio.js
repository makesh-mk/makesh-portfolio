//--------------- Bg-animation ------------------//

particlesJS("anime",{
    particles:{
        number:{
            value:80
        },
        color:{
            value:["#ffffff"]
        },
        shape:{
            type:"circle"
        },
        opacity:{
            value:0.8
        },
        size:{
            value:2.6
        },
        move:{
            enable:true,
            speed:2
        }
    }
})

// ----------------- Name Change ---------------//
const list=["React Developer","UI Developer","Front-end Developer","Java Developer"];
const change=document.getElementsByClassName("change")[0];
let index=0;
setInterval(() => {
    change.textContent=list[index];
    index=[index+1]%list.length;
}, 2000);

// ------------------------------------------------------//

// -------------------------- Menu ---------------------//

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ----------------------- Arrow click move -------------------//
const container = document.querySelector('.Project-main');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

left.addEventListener("click",()=>{
  container.scrollBy({
    left:200,
    behavior:'smooth'
  })
  
})

right.addEventListener("click",()=>{
  container.scrollBy({
    left:-200,
    behavior:'smooth'
  })
})

// ---------------------------------------------------------------------//
