"use strict";

// import { NONAME } from "dns";

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
const matrioszka128 = document.querySelector('.matrioszka__128--js');
const matrioszka96 = document.querySelector('.matrioszka__96--js');
const matrioszka72 = document.querySelector('.matrioszka__72--js');
const matrioszka64 = document.querySelector('.matrioszka__64--js');
const matrioszka48 = document.querySelector('.matrioszka__48--js');
const matrioszka32 = document.querySelector('.matrioszka__32--js');
const matrioszka24 = document.querySelector('.matrioszka__24--js');
const matrioszka16 = document.querySelector('.matrioszka__16--js');
let matrioszki = [...document.querySelectorAll('.matrioszka')];

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
    matrioszka.style.display = 'block';
    matrioszka.classList.add('matrioszka');
    matrioszka.classList.add('matrioszka__512');
    matrioszka.classList.add('matrioszka__512--js');
    for (let item of matrioszki) {
      console.log(item);
      item.style.display = 'block';
    }
  }
  else if (korsan.innerHTML === 'Powrót') {
    korsan.innerHTML = 'Znajdź Korsana'
    korsan.style.opacity = .1;
    korsan.style.background = '#3767AD';
    matrioszka.classList.remove('matrioszka__512--activated');
    matrioszka128.classList.remove('matrioszka__128--activated');
    matrioszka96.classList.remove('matrioszka__96--activated');
    matrioszka72.classList.remove('matrioszka__72--activated');
    matrioszka64.classList.remove('matrioszka__64--activated');
    matrioszka48.classList.remove('matrioszka__48--activated');
    matrioszka32.classList.remove('matrioszka__32--activated');
    matrioszka24.classList.remove('matrioszka__24--activated');
    matrioszka16.classList.remove('matrioszka__16--activated');
    body.removeChild(matrioszka);
    for (let item of matrioszki) {
      item.style.display = 'none';
    }
  }
})

matrioszka.addEventListener('click', () => {
  matrioszka.classList.add('matrioszka__512--activated');
  matrioszka128.classList.add('matrioszka__128--activated');
  matrioszka96.classList.add('matrioszka__96--activated');
  matrioszka72.classList.add('matrioszka__72--activated');
  matrioszka64.classList.add('matrioszka__64--activated');
  matrioszka48.classList.add('matrioszka__48--activated');
  matrioszka32.classList.add('matrioszka__32--activated');
  matrioszka24.classList.add('matrioszka__24--activated');
  matrioszka16.classList.add('matrioszka__16--activated');
})