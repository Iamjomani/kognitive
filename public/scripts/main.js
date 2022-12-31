// import Swiper from 'swiper/bundle';


let nav = document.getElementById('nav');
let faqs = document.querySelectorAll('.faq');

// STORING THE BUTTONS

let menu = document.querySelector('.nav-menu');
let openBtn = document.getElementById('menu-btn');
let closeBtn = document.getElementById('close-btn');

// MODAL VARIABLES
let modalBg = document.getElementById('modal-bg');
let closeModalBtn = document.getElementById('close-modal');
let modalCard = document.querySelectorAll('.modal-card');
let modalForm = document.getElementById('modal-form');


openBtn.addEventListener('click', function (){
    menu.style.display = "flex";
    openBtn.style.display="none";
    closeBtn.style.display="inline-block";
});

closeBtn.addEventListener('click', function (){
    menu.style.display = "none";
    openBtn.style.display="inline-block";
    closeBtn.style.display="none";
});

//   SCROLL HEADER NAVIGATION
window.addEventListener('scroll', () =>{
    nav.classList.toggle('nav-scroll', window.scrollY > 0)
    // nav.classList.toggle('.nav-menu a:hover::after', window.scrollY>0)
})

faqs.forEach(faq=>{
    faq.addEventListener('click', function (){
        faq.classList.toggle('open');

        let icon = faq.querySelector('.faq-icon i');
        if(icon.className ==='fa fa-plus'){
            icon.className = 'fa-solid fa-minus';
            console.log(icon)
        }else{
            icon.className='fa fa-plus';
            // faq.classList.remove('open')
            console.log(icon)
        }     
    })
})

// MODAL 
window.onload = function(){
    setTimeout(function (){
        modalBg.classList.add('modal-display');
    },5000);
}


function closeModal(){
    modalBg.classList.add('closeAnimation');
    setTimeout(function(){
        modalBg.classList.remove('modal-display');
    },1000)
}

closeModalBtn.addEventListener('click', closeModal);

window.onclick = function(event) {
    if (event.target == modalBg) {
      closeModal();
    }
  }

modalForm.addEventListener('submit', function(){
    modalCard.innerHTML= "<h1>THANK YOU FOR SUBSCRIBING</h1>"
});
