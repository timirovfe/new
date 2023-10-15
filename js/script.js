/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./gulp/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gulp/js/main.js":
/*!*************************!*\
  !*** ./gulp/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdown */ "./gulp/js/modules/dropdown.js");
/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sidebar */ "./gulp/js/modules/sidebar.js");
/* harmony import */ var _modules_formsubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formsubmit */ "./gulp/js/modules/formsubmit.js");
/* harmony import */ var _modules_stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/stars */ "./gulp/js/modules/stars.js");




document.addEventListener("DOMContentLoaded", function () {
  const dropdownHeader = new _modules_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]('.header__dropdown-btn', '.header__dropdown');
  dropdownHeader.init();
  const sidebarMenu = new _modules_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"]('.sidebar-menu__btn', '.sidebar-menu__overlay', '.sidebar-menu', '.sidebar-menu .sidebar-list__link');
  sidebarMenu.init();
  const formSubmit = new _modules_formsubmit__WEBPACK_IMPORTED_MODULE_2__["default"]($.fancybox);
  formSubmit.init();
  const starRating = new _modules_stars__WEBPACK_IMPORTED_MODULE_3__["default"]();
  starRating.init();
  $(".reviews-carousel").owlCarousel({
    nav: true,
    dots: false,
    navText: ["<svg width=\"50\" height=\"48\" viewBox=\"0 0 50 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" + "<path id=\"Arrow\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.069 29.7614L13.6069 24.5761C13.2717 24.2579 13.2717 23.7421 13.6069 23.4239L19.069 18.2386C19.4041 17.9205 19.9476 17.9205 20.2828 18.2386C20.6179 18.5568 20.6179 19.0727 20.2828 19.3909L16.2858 23.1852L35.957 23.1852L35.957 24.8148L16.2858 24.8148L20.2828 28.6091C20.6179 28.9273 20.6179 29.4432 20.2828 29.7614C19.9476 30.0795 19.4041 30.0795 19.069 29.7614Z\" fill=\"white\"/>\n" + "</svg>\n", "<svg width=\"50\" height=\"48\" viewBox=\"0 0 50 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" + "<path id=\"Arrow\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M30.2435 18.2386L35.7056 23.4239C36.0408 23.7421 36.0408 24.2579 35.7056 24.5761L30.2435 29.7614C29.9084 30.0795 29.3649 30.0795 29.0297 29.7614C28.6946 29.4432 28.6946 28.9273 29.0297 28.6091L33.0267 24.8148H13.3555V23.1852H33.0267L29.0297 19.3909C28.6946 19.0727 28.6946 18.5568 29.0297 18.2386C29.3649 17.9205 29.9084 17.9205 30.2435 18.2386Z\" fill=\"white\"/>\n" + "</svg>\n"],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        nav: false,
        autoWidth: false
      },
      // breakpoint from 768 up
      767: {
        items: 2,
        nav: true
      },
      // breakpoint from 1200 up
      1199: {
        items: 3
      }
    }
  });
  $('[data-fancybox-callback]').fancybox({
    touch: false
  });
  $('[data-fancybox-reviews]').fancybox({
    animationDuration: 600,
    animationEffect: 'slide-in-up',
    touch: false
  });
});

/***/ }),

/***/ "./gulp/js/modules/dropdown.js":
/*!*************************************!*\
  !*** ./gulp/js/modules/dropdown.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
class Dropdown {
  constructor(trigger, dropdown) {
    this.btn = document.querySelector(trigger);
    this.dropdown = document.querySelector(dropdown);
  }
  bindTrigger() {
    this.btn.addEventListener('click', () => {
      this.dropdown.classList.toggle("show");
      window.addEventListener("scroll", () => {
        this.dropdown.classList.remove("show");
      });
    });
  }
  bindCloseDropdown(dropdown, btn) {
    document.addEventListener("click", e => {
      if (e.target !== btn) {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    });
  }
  init() {
    this.bindTrigger();
    this.bindCloseDropdown(this.dropdown, this.btn);
  }
}

/***/ }),

/***/ "./gulp/js/modules/formsubmit.js":
/*!***************************************!*\
  !*** ./gulp/js/modules/formsubmit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSubmit; });
class FormSubmit {
  constructor(fancybox) {
    this.forms = document.querySelectorAll('form');
    this.fancybox = fancybox;
  }
  bindOnSubmit() {
    this.forms.forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const successId = form.attributes['data-form-success'].value;
        const formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', form.action);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.responseType = 'json';
        xhr.onload = () => {
          // loader need
          if (xhr.status == 200) {
            this._success(form, successId, xhr.response);
          } else {
            this._error();
          }
        };
        xhr.send(formData);
      });
    });
  }
  _success(form, successId, data) {
    form.querySelectorAll('input, textarea').forEach(el => {
      this._validation(el);
    });
    if (data['result'] === 'success') {
      this.openFancybox(successId);
      form.reset();
      return;
    }
    for (let key in data['errors']) {
      const el = form.querySelector('[name="' + key + '"]');
      el ? this._validation(el, 'error', data['errors'][key]) : null;
    }
    form.querySelectorAll('input:not(.invalid)').forEach(el => {
      this._validation(el, 'success', '');
    });

    // data['logs'].forEach((message) => {
    //     console.log(message);
    // });

    const elError = form.querySelector('.invalid');
    if (elError) {
      elError.focus();
    }
  }
  _error() {}
  _validation(input, state, message) {
    const className = state === 'success' ? 'valid' : 'invalid';
    const text = state === 'success' ? '' : message;
    let errorSpan = input.closest('.form__wrap').querySelector('.form__input-error');
    let errorImage = input.closest('.form__wrap').querySelector('.form__input-icon');
    input.classList.remove('invalid');
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
    errorImage.style.display = 'none';
    if (state === 'error') {
      input.classList.add(className);
      errorSpan.textContent = text;
      errorSpan.style.display = 'block';
      errorImage.style.display = 'block';
    }
  }
  openFancybox(successId) {
    this.fancybox.close();
    this.fancybox.open({
      'autoScale': true,
      'transitionIn': 'elastic',
      'transitionOut': 'elastic',
      'speedIn': 500,
      'speedOut': 300,
      'autoDimensions': true,
      'centerOnScroll': true,
      'type': 'inline',
      'src': '#' + successId
    });
  }
  init() {
    this.bindOnSubmit();
  }
}

/***/ }),

/***/ "./gulp/js/modules/sidebar.js":
/*!************************************!*\
  !*** ./gulp/js/modules/sidebar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
class Sidebar {
  constructor(triggers, overlay, sidebar, sidebarLink) {
    // получаем все элементы
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.sidebar = document.querySelector(sidebar);
    this.sidebarLink = document.querySelectorAll(sidebarLink);
  }

  // клик по кнопке
  bindTrigger() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.btns.forEach(btn => {
          btn.classList.toggle('open');
        });
        this.sidebar.classList.toggle('show');
        this.overlay.classList.toggle('show');
        document.body.classList.toggle('sidebar-opened');
      });
    });
  }

  // клик по оверлэю
  bindOverlayClick() {
    this.overlay.addEventListener('click', () => {
      this.btns.forEach(btn => {
        btn.classList.toggle('open');
      });
      this.sidebar.classList.toggle('show');
      this.overlay.classList.toggle('show');
      document.body.classList.toggle('sidebar-opened');
    });
  }

  // клик по ссылке в меню
  bindLinkClick() {
    this.sidebarLink.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        this.sidebar.classList.toggle('show');
        this.overlay.classList.toggle('show');
        document.querySelector('body').classList.toggle('sidebar-opened');
        this.btns.forEach(btn => {
          btn.classList.toggle('open');
        });
        let id = link.href.slice(link.href.lastIndexOf('#') + 1);
        let headerOffset;
        if (window.innerWidth > 1399) {
          headerOffset = 127.48;
        } else if (window.innerWidth > 1199 && window.innerWidth <= 1399) {
          headerOffset = 112.41;
        } else if (window.innerWidth > 991 && window.innerWidth <= 1199) {
          headerOffset = 128;
        } else if (window.innerWidth > 575 && window.innerWidth <= 991) {
          headerOffset = 79.25;
        } else if (window.innerWidth <= 575) {
          headerOffset = 62.95;
        }
        const elementPosition = document.getElementById(`${id}`).getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      });
    });
  }
  swipeToggle(buttons, sidebar, overlay) {
    let touchstartX = 0;
    let touchendX = 0;
    function checkDirection() {
      if (touchendX < touchstartX) {
        buttons.forEach(btn => {
          btn.classList.toggle('open');
        });
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
        document.body.classList.toggle('sidebar-opened');
      }
    }
    sidebar.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
    });
    sidebar.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
    overlay.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
    });
    overlay.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
  }
  init() {
    this.bindTrigger();
    this.bindOverlayClick();
    this.bindLinkClick();
    this.swipeToggle(this.btns, this.sidebar, this.overlay);
  }
}

/***/ }),

/***/ "./gulp/js/modules/stars.js":
/*!**********************************!*\
  !*** ./gulp/js/modules/stars.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stars; });
class Stars {
  constructor(stars) {
    this.stars = [...document.getElementsByClassName("give-rating__icon")];
    this.ratingInput = document.getElementById('iputRating');
  }
  starRating() {
    this.__clearRating();
    const starsLength = this.stars.length;
    this.stars.forEach((star, index) => {
      star.onclick = () => {
        if (star.classList.contains("deactive")) {
          this.__ratingUpdate(0, index, true);
          this.ratingInput.value = index + 1;
        } else {
          this.ratingInput.value = index + 1;
          this.__ratingUpdate(index, starsLength - 1, false);
        }
      };
    });
  }
  __ratingUpdate(start, end, deactive) {
    for (let i = start; i <= end; i++) {
      if (deactive) {
        this.stars[i].classList.add("active");
        this.stars[i].classList.remove("deactive");
      } else {
        this.stars[i + 1].classList.remove("active");
        this.stars[i + 1].classList.add("deactive");
      }
    }
  }
  __clearRating() {
    this.stars.forEach((star, index) => {
      star.classList.remove("active");
      star.classList.add("deactive");
    });
  }
  init() {
    this.starRating();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map