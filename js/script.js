window.addEventListener('DOMContentLoaded', function () {

// Burger-menu open - close

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.burger__menu-overlay').classList.remove('is-active')
  })

  document.querySelectorAll('.menu__link').forEach(function (el) {
    el.addEventListener('click', function () {
      document.querySelector('#menu').classList.remove('is-active'),
      document.querySelector('#burger').classList.toggle('burger__menu-active')
    })
  })

// Burger icon toggle

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('burger__menu-active')
  })

// Questions icon toggle

  document.querySelectorAll('.questions__item').forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.target.classList.toggle('questions__item-active')
    })
  })

// search menu toggle

  document.querySelector('#search').addEventListener('click', function () {
    document.querySelector('#search-field').classList.toggle('active-search')
  })

})
