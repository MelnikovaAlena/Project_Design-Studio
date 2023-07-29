let images = [
  {
      url: 'images/jpg/image-2.jpg',
      sliderCity: 'Rostov-on-Don \n LCD admiral',
      sliderAppartment: '81 m2',
      sliderTime: '3.5 months',
      sliderCost: 'Upon request'
  },
  {
      url: 'images/jpg/image-4.jpg',
      sliderCity: 'Sochi \n Thieves',
      sliderAppartment: '105 m2',
      sliderTime: '4 months',
      sliderCost: 'Upon request'
  },
  {
      url: 'images/jpg/image-5.jpg',
      sliderCity: 'Rostov-on-Don \n Patriotic',
      sliderAppartment: '93 m2',
      sliderTime: '3 months',
      sliderCost: 'Upon request'
  }
]

let sliderImages = document.querySelector('.slider-img');
let sliderCity = document.querySelector('#city');
let sliderAppartment = document.querySelector('#area');
let sliderTime = document.querySelector('#time');
let sliderLeftarr = document.querySelector('.left');
let sliderRightarr = document.querySelector('.right');
let sliderDots = document.querySelectorAll('.slider__dots');
let sliderLink = document.querySelectorAll('.block-2__link');
let sliderCount = document.querySelectorAll('[data-index]');

let sliderIndex = 0;


sliderLeftarr.addEventListener('click', () => {
  sliderIndex !== 0 ? sliderIndex -= 1 : sliderIndex = images.length - 1
  initSlider(sliderIndex);
})

sliderRightarr.addEventListener('click', () => {
  sliderIndex !== images.length - 1 ? sliderIndex += 1 : sliderIndex = 0
  initSlider(sliderIndex);
})


sliderCount.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log(event.target.getAttribute('data-index'))
    sliderIndex = Number(event.target.getAttribute('data-index'))
    initSlider(sliderIndex);
    event.preventDefault()

})
})

function initSlider(index){
  sliderImages.innerHTML = `<img class="image" src="${images[index].url}">`
  sliderCity.innerText = images[index].sliderCity
  sliderTime.innerText = images[index].sliderTime
  sliderAppartment.innerText = images[index].sliderAppartment
  sliderCount.forEach((item) => {
      if(Number(item.getAttribute('data-index')) === index) {
          item.classList.add('active')
      } else {
          if(item.classList.contains('active')) {
              item.classList.remove('active')
          }
      }
  })
}
initSlider(sliderIndex);



