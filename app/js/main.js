//dropdown menu 

let  dropdownBtn = document.querySelectorAll('.dropdown-btn');
let  dropdownMenu = document.querySelectorAll('.dropdown-content');
let items = document.querySelectorAll('.dropdown-list__item');
let selectedItem = document.getElementById('selected-currency');

window.addEventListener('click', function(){
  closeMenu()
})


dropdownBtn.forEach((button) => button.addEventListener('click', e => {
  e.stopPropagation()
  dropdownMenu.forEach((item) => {
    if (item.querySelector('.dropdown-btn')!== dropdownBtn){
      item.parentElement.classList.remove('open');
    }
  })
  if(!button.classList.contains('open')){
    dropdownBtn.forEach(el=>{ el.classList.remove('open'); });
    button.parentElement.classList.add('open');
    button.classList.add('open');
  }
  else if(button.classList.contains('open')){
    button.parentElement.classList.remove('open');
    button.classList.remove('open');
  } 
}));

items.forEach((item )=> item.addEventListener('click', itemClickHandler))


function closeMenu(){
  dropdownMenu.forEach((item) => item.classList.remove('open'));
  dropdownBtn.forEach((item) => {
    item.parentElement.classList.remove('open')
    item.classList.remove('open')});
}

function itemClickHandler(e){
  let text = this.innerText;
  let select = this.closest('.dropdown');
  const target = e.currentTarget;
  let currentText = select.querySelector('.drop__current');
    
  e.stopPropagation()
  currentText.innerText = text;
  if (selectedItem.innerText === currentText.innerText){
    items.forEach((item) => item.classList.remove('hide'))
    target.classList.add('hide')
  }
  
  select.classList.remove('active');
  items.forEach((item) => item.classList.remove('active'))
  e.target.classList.add('active')
  closeMenu()
}





//scroll header


const header = document.querySelector('.header-fixed');
const defaultOffset = 50;
const banner = document.querySelector('.banner');
const bannerHeight = banner.offsetHeight;
let lastScroll = 0;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset ) {
  // scroll down
  header.classList.add('hide');
  }
  else if (scrollPosition() < lastScroll && containHide() && window.pageYOffset <= bannerHeight) {
    // scroll up
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
})

// slider

$(function(){
  $('.category__slider').slick({
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      prevArrow: '<button class="category__slider-btn category__slider-prev"><img  src="images/arrow-prev.svg" alt=""></button>',
      nextArrow: '<button class="category__slider-btn category__slider-next"><img src="images/arrow-next.svg" alt=""></button>'
  });})




