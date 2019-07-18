"use strict";

import { NONAME } from "dns";

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
const korsan = document.querySelector('.korsan--js');
const body = document.body;
const matrioszka = document.createElement('img');
matrioszka.src = 'assets/img/matrioszka512.svg'
const glass = document.querySelector('img');
const matrioszki = document.querySelectorAll('.matrioszka');

if (localStorage.getItem(key) == false) {
  counter.innerHTML = '0';
  localStorage.setItem(key, counter.innerHTML);
} else {
  counter.innerHTML = localStorage.getItem(key);
}

addButton.addEventListener('click', () => {
  if (counter.innerHTML < 9) {
    counter.innerHTML++
    localStorage.setItem(key, counter.innerHTML);
  }
  else {
    alert('Osiągnąłeś dzienny limit szklanek');
  }
})

removeButton.addEventListener('click', () => {
  if (counter.innerHTML > 0) {
    counter.innerHTML--
    localStorage.setItem(key, counter.innerHTML);
  }
  else {
    alert('Nie można usunąć więcej szklanek')
  }
})

korsan.addEventListener('click', () => {
  body.classList.toggle('body--js');
  addButton.classList.toggle('add__hidden');
  removeButton.classList.toggle('remove__hidden');
  counter.classList.toggle('counter__hidden');
  glass.classList.toggle('glass__hidden');
  if (korsan.innerHTML === 'Znajdź Korsana') {
    korsan.innerHTML = 'Powrót'
    korsan.style.opacity = 1;
    korsan.style.background = 'black';
    body.appendChild(matrioszka);
    matrioszka.classList.add('matrioszka');
    matrioszka.classList.add('matrioszka__512');
    matrioszka.classList.add('matrioszka__512--js');
    matrioszki.style.display = 'block';
  }
  else if (korsan.innerHTML === 'Powrót') {
    korsan.innerHTML = 'Znajdź Korsana'
    korsan.style.opacity = .1;
    korsan.style.background = '#3767AD';
    body.removeChild(matrioszka);
    matrioszki.style.display = 'none';
  }

})

matrioszka.addEventListener('click', () => {

})