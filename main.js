// menu 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}


//auto type
let typed = new Typed(".auto-type", {
      strings: [" Effective english courses for kids and teenagers"],
      typeSpeed: 50,
      backSpeed: 70,
      loop: true
})


// counter
let nums = document.querySelectorAll(".nums .number");
let section = document.querySelector(".number-container");
let started = false;


window.onscroll = function () {
  if (window.scrollY <= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 1000 / goal);
}


