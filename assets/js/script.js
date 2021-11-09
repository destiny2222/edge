const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const indicatorParent = document.querySelector('.control ul'); 
const indicators = document.querySelectorAll('.control li');
const auto = true; // Auto scroll

// index = 0;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};


indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.control .selected').classList.remove('selected');
    indicator.classList.add('selected');
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    
  });
});

// left.addEventListener('click', function() {
//   index = (index > 0) ? index -1 : 0;
//   document.querySelector('.control .selected').classList.remove('selected');
//   indicatorParent.children[index].classList.add('selected');
//   slides.style.transform = 'translateX(' + (index) * -25 + '%)';
// });


// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
};






/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("remove").style.display = "none";
  document.getElementById("remover").style.display = "none";
  document.getElementById("remo").style.display = "none";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("remove").style.display = "block";
  document.getElementById("remover").style.display = "block";
  document.getElementById("remo").style.display = "block";
}