const menu = document.querySelector("#mobile-menu");
const menullinks = document.querySelector(".mobile");
const desktop = document.querySelector("#menu");
const desktoplink = document.querySelector(".sidenav");
menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menullinks.classList.toggle('active');
});


desktop.addEventListener('click', function(){
  desktop.classList.toggle('is-active')
  desktoplink.classList.toggle('active')
});

// const y = document.querySelector('.nav-category');
// function myFunction() {
//   let x = document.querySelector(".sidenav");
//   if (x.style.display === "" ) {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   } 

// }

// y.addEventListener('click', myFunction, false);

/* Open the sidenav */
function openNav() {
  document.querySelector("mySidenav").style.display = "block";
  document.querySelectorAll(".nav-category a")
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("remove").style.display = "block";
  }


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });


