"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const counter = document.querySelector('.counter--js');
const addButton = document.querySelector('.add--js');
const removeButton = document.querySelector('.remove--js');
const key = new Date().toISOString().slice(0, 10);

addButton.addEventListener('click', () => {
  if (counter.innerHTML < 9) {
    counter.innerHTML++
  }
  else {
    alert('Osiągnąłeś dzienny limit szklanek');
  }
})

removeButton.addEventListener('click', () => {
  if (counter.innerHTML > 0) {
    counter.innerHTML--
  }
  else {
    alert('Nie można usunąć więcej szklanek')
  }
})

