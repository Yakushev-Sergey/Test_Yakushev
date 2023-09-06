

const swiper = new Swiper('.swiper', {
  speed: 1000,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



const categories = document.querySelectorAll('[data-button]');
const tabModal = document.querySelector('[data-modal]');
const body = document.querySelector('body');


categories.forEach(function (item){
  item.addEventListener('click', function(){
    tabModal.classList.remove('modal-active')
    
  })

  tabModal.addEventListener('click', function(){
    tabModal.classList.add('modal-active')
  })


})












