!function(n){var e={};function r(c){if(e[c])return e[c].exports;var t=e[c]={i:c,l:!1,exports:{}};return n[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=e,r.d=function(n,e,c){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)r.d(c,t,function(e){return n[e]}.bind(null,t));return c},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst counter = document.querySelector('.counter--js');\r\nconst addButton = document.querySelector('.add--js');\r\nconst removeButton = document.querySelector('.remove--js');\r\nconst key = new Date().toISOString().slice(0, 10);\r\nconst storage = {\r\n  date: key,\r\n  numberOfGlasses: counter.innerHTML\r\n}\r\n\r\nconsole.log(counter);\r\nconsole.log(storage);\r\n\r\n// if (localStorage.getItem(new Date().toISOString().slice(0, 10))) = false) {\r\n//   counter.innerHTML = 0;\r\n// } else {\r\n//   counter.innerHTML = localStorage.getItem(localStorage.key);\r\n// }\r\n\r\naddButton.addEventListener('click', () => {\r\n  if (counter.innerHTML < 9) {\r\n    counter.innerHTML++\r\n    localStorage.setItem(key, counter.innerHTML);\r\n  }\r\n  else {\r\n    alert('Osiągnąłeś dzienny limit szklanek');\r\n  }\r\n})\r\n\r\nremoveButton.addEventListener('click', () => {\r\n  if (counter.innerHTML > 0) {\r\n    counter.innerHTML--\r\n    localStorage.setItem(key, counter.innerHTML);\r\n  }\r\n  else {\r\n    alert('Nie można usunąć więcej szklanek')\r\n  }\r\n})\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIHBsYWNlIHlvdXIgY29kZSBiZWxvd1xyXG5cclxuY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyLS1qcycpO1xyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLS1qcycpO1xyXG5jb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLS1qcycpO1xyXG5jb25zdCBrZXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xyXG5jb25zdCBzdG9yYWdlID0ge1xyXG4gIGRhdGU6IGtleSxcclxuICBudW1iZXJPZkdsYXNzZXM6IGNvdW50ZXIuaW5uZXJIVE1MXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGNvdW50ZXIpO1xyXG5jb25zb2xlLmxvZyhzdG9yYWdlKTtcclxuXHJcbi8vIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSkgPSBmYWxzZSkge1xyXG4vLyAgIGNvdW50ZXIuaW5uZXJIVE1MID0gMDtcclxuLy8gfSBlbHNlIHtcclxuLy8gICBjb3VudGVyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkpO1xyXG4vLyB9XHJcblxyXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGNvdW50ZXIuaW5uZXJIVE1MIDwgOSkge1xyXG4gICAgY291bnRlci5pbm5lckhUTUwrK1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBjb3VudGVyLmlubmVySFRNTCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgYWxlcnQoJ09zacSFZ27EhcWCZcWbIGR6aWVubnkgbGltaXQgc3prbGFuZWsnKTtcclxuICB9XHJcbn0pXHJcblxyXG5yZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGNvdW50ZXIuaW5uZXJIVE1MID4gMCkge1xyXG4gICAgY291bnRlci5pbm5lckhUTUwtLVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBjb3VudGVyLmlubmVySFRNTCk7XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgYWxlcnQoJ05pZSBtb8W8bmEgdXN1bsSFxIcgd2nEmWNlaiBzemtsYW5laycpXHJcbiAgfVxyXG59KVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);