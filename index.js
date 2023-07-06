let openButton = document.querySelector('.open-btn')
let slider = document.querySelector('.slider')
let sliderCloseButton = document.querySelector('.close-slider-btn')
let documentBody = document.querySelector('body')

openButton.addEventListener('click', function(event) {
  // let slider = document.querySelector('.slider')

  // Как примерно работает toggle  
  //  let isOpen = slider.classList.contains('open')
  //  if (!isOpen) {
  //   slider.classList.add('open')
  //  } else {
  //   slider.classList.remove('open')
  //  }

  // Как делать проще
  slider.classList.toggle('open')
})

sliderCloseButton.addEventListener('click', function() {
  slider.classList.toggle('open')
})

documentBody.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    slider.classList.remove('open')
  }
  console.log(event.code)
})

documentBody.addEventListener('keydown', function(event) {
  if (event.key === 'CapsLock') {
    slider.classList.remove('textarea')
  }
  console.log(event.code)
})

documentBody.addEventListener('keydown', function(event) {
  if (event.key === 'Shift') {
    slider.classList.remove('textarea')
  }
  console.log(event.code)
})

documentBody.addEventListener('keydown', function(event) {
  if (event.key === 'Shift + Alt') {
    slider.classList.remove('textarea')
  }
  console.log(event.code)
})

documentBody.addEventListener('keydown', function(event) {
  if (event.key === 'Backspace') {
    slider.classList.remove('textarea')
  }
  console.log(event.code)
})