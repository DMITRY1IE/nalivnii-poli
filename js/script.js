const oblast_button = document.getElementById('oblast_button')
const oblasti_text = document.getElementById('oblasti_text')
const oblasti_text2 = document.getElementById('oblasti_text2')
const cont = document.getElementById('cont')

oblast_button.addEventListener("click", () => {
    oblast_button.classList.toggle('areas-of-use__button--active')
    oblasti_text.classList.toggle('none')
    oblasti_text2.classList.toggle('none')
    cont.classList.toggle('none')
    
})
// ---------------
const slider_line1 = document.getElementById('slider_line1')
const slider_line2 = document.getElementById('slider_line2')
const slider_line3 = document.getElementById('slider_line3')

const slider_line1_cont = document.getElementById('slider_line1_cont')
const slider_line2_cont = document.getElementById('slider_line2_cont')
const slider_line3_cont = document.getElementById('slider_line3_cont')





var elements = document.querySelectorAll('.header-bottom');

var counter = 1;
setInterval(function(){  
  for (var i = 0; i < elements.length; ++i) {
    elements[i].style.display = 'none';
  }
  if (counter > elements.length - 1)
    counter = 0;
  
  elements[counter].style.display = 'block';
  counter++;      
}, 5000);

// ----------------------------
const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = slides.firstElementChild.clientWidth;
const slideCount = slides.children.length;

let slideIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function slideTo(index) {
  slides.style.transform = `translateX(-${slideWidth * index}px)`;
  slideIndex = index;
}

prevBtn.addEventListener('click', () => {
  if (slideIndex > 0) {
    slideTo(slideIndex - 1);
  } else {
    slideTo(slideCount - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (slideIndex < slideCount - 1) {
    slideTo(slideIndex + 1);
  } else {
    slideTo(0);
  }
});

slideTo(slideIndex);

var isDown = false;
var startX;
var scrollLeft;

slider.addEventListener('mousedown', function(e) {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', function() {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', function() {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', function(e) {
  if (!isDown) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX) * 3; // чувствительность скролла
  slider.scrollLeft = scrollLeft - walk;
});

// --------------------------
const slider2 = document.querySelector('.slider2');
const slides2 = slider2.querySelector('.slides2');
const prevBtn2 = document.querySelector('.prev2');
const nextBtn2 = document.querySelector('.next2');
const slideWidth2 = slides2.firstElementChild.clientWidth;
const slideCount2 = slides2.children.length;

let slideIndex2 = 0;
let isDragging2 = false;
let startPos2 = 0;
let currentTranslate2 = 0;
let prevTranslate2 = 0;

function slideTo2(index) {
  slides2.style.transform = `translateX(-${slideWidth2 * index}px)`;
  slideIndex2 = index;
}

prevBtn2.addEventListener('click', () => {
  if (slideIndex2 > 0) {
    slideTo2(slideIndex2 - 1);
  } else {
    slideTo2(slideCount2 - 1);
  }
});

nextBtn2.addEventListener('click', () => {
  if (slideIndex2 < slideCount2 - 1) {
    slideTo2(slideIndex2 + 1);
  } else {
    slideTo2(0);
  }
});

slideTo2(slideIndex2);

var isDown2= false;
var startX2;
var scrollLeft2;

slider2.addEventListener('mousedown', function(e) {
  isDown2 = true;
  slider2.classList.add('active');
  startX2 = e.pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;
});

slider2.addEventListener('mouseleave', function() {
  isDown2 = false;
  slider2.classList.remove('active');
});

slider2.addEventListener('mouseup', function() {
  isDown2 = false;
  slider2.classList.remove('active');
});

slider2.addEventListener('mousemove', function(e) {
  if (!isDown2) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX2) * 3; // чувствительность скролла
  slider2.scrollLeft = scrollLeft2 - walk;
});
// =---------------------------------------
const slider3 = document.querySelector('.slider3');
const slides3 = slider3.querySelector('.slides3');
const prevBtn3 = document.querySelector('.prev3');
const nextBtn3 = document.querySelector('.next3');
const slideWidth3 = slides3.firstElementChild.clientWidth;
const slideCount3 = slides3.children.length;

let slideIndex3 = 0;
let isDragging3 = false;
let startPos3 = 0;
let currentTranslate3 = 0;
let prevTranslate3 = 0;

function slideTo3(index) {
  slides3.style.transform = `translateX(-${slideWidth3 * index}px)`;
  slideIndex3 = index;
}

prevBtn3.addEventListener('click', () => {
  if (slideIndex3 > 0) {
    slideTo3(slideIndex3 - 1);
  } else {
    slideTo3(slideCount3 - 1);
  }
});

nextBtn3.addEventListener('click', () => {
  if (slideIndex3 < slideCount3 - 1) {
    slideTo3(slideIndex3 + 1);
  } else {
    slideTo3(0);
  }
});

slideTo3(slideIndex3);

var isDown3 = false;
var startX3;
var scrollLeft3;

slider3.addEventListener('mousedown', function(e) {
  isDown3 = true;
  slider3.classList.add('active');
  startX3 = e.pageX - slider3.offsetLeft;
  scrollLeft3 = slider3.scrollLeft;
});

slider3.addEventListener('mouseleave', function() {
  isDown3 = false;
  slider3.classList.remove('active');
});

slider3.addEventListener('mouseup', function() {
  isDown3 = false;
  slider3.classList.remove('active');
});

slider3.addEventListener('mousemove', function(e) {
  if (!isDown3) return;
  e.preventDefault();
  var x = e.pageX - slider3.offsetLeft;
  var walk = (x - startX3) * 3; // чувствительность скролла
  slider3.scrollLeft = scrollLeft3 - walk;
});




const modal = document.querySelector('.modal');
const modal_button = document.querySelector('.modal_button');
const modal_button2 = document.querySelector('.modal_button2');
const modal_button3 = document.querySelector('.modal_button3');
const modal_button4 = document.querySelector('.modal_button4');


const modal__close = document.querySelector('.modal__close');

modal_button.addEventListener("click", () => {
    modal.classList.add('modal-active')
    
})
modal_button2.addEventListener("click", () => {
    modal.classList.add('modal-active')
    
})
modal_button3.addEventListener("click", () => {
    modal.classList.add('modal-active')
    
})
modal_button4.addEventListener("click", () => {
    modal.classList.add('modal-active')
    
})
modal__close.addEventListener("click", () => { 

    modal.classList.remove('modal-active')
})


document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 70; 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

const nav_b = document.getElementById('nav_b');
const burder = document.getElementById('burder');

burder.addEventListener("click", () => {
  nav_b.classList.toggle('block')
  nav_b2.classList.toggle('block')
  nav_b3.classList.toggle('block')
  nav_b4.classList.toggle('block')
  nav_b5.classList.toggle('block')
  
})

const litebox = document.getElementById('litebox');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

img1.addEventListener("click", () => {
  litebox.classList.toggle('litebox--active')
})
img2.addEventListener("click", () => {
  litebox.classList.toggle('litebox--active')
})
img3.addEventListener("click", () => {
  litebox.classList.toggle('litebox--active')
})

litebox.addEventListener("click", () => {
  litebox.classList.toggle('litebox--active')
})