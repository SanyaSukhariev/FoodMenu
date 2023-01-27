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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function calc(){


    /////////// Calculator ////////////

    
const result = document.querySelector('.calculating__result');
let sex ='female', 
    weight, 
    height, 
    age, 
    ratio = 1.375;

function calcTotal(){

    if(!sex || !weight || !height || !age || !ratio){
        result.textContent = '____';
        return;
    }

    if(sex === 'female'){
        result.textContent = Math.round((447.6 +(9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    }else{
        result.textContent = Math.round((88.36 +(13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}
        calcTotal();

    function getStaticInformation(parentSelector, activeClass){
        const elements = document.querySelectorAll(`${parentSelector} div`);
       
            elements.forEach(elem=>{
                elem.addEventListener('click',(e)=>{

                    if(e.target.getAttribute('data-ratio')){
                        ratio = +e.target.getAttribute('data-ratio');
                    }else{
                        sex = e.target.getAttribute('id');
                    }
        
                   
                    elements.forEach((item)=>{
                        item.classList.remove(activeClass);
                    })
                        e.target.classList.add(activeClass);
                        calcTotal();
            })
        })

       


    }
    getStaticInformation("#gender","calculating__choose-item_active");
    getStaticInformation(".calculating__choose_big","calculating__choose-item_active");

    
    function getDynamicInformation(selector){

        const input =  document.querySelector(selector);


        input.addEventListener('input',()=>{
            
        if(input.value.match(/\D/g)){
            input.style.border = '1px solid red';
        }else{
            input.style.border = 'none';
        }
            
            switch(input.getAttribute('id')){
                case "height":
                    height = +input.value;
                    break;
                case "weight":
                    weight = +input.value;
                    break;
                case "age":
                    age = +input.value;
                    break;
            }
            calcTotal();
        })

       

    }
    getDynamicInformation("#height");
    getDynamicInformation("#weight");
    getDynamicInformation("#age");
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



function cards(){
    
    ////////////// Используем классы для карточек ////////////////////////////////////////////

    class MenuCard{
        constructor(src,alt,title,desc,price,parentSelector,...classes){
                this.src =src;
                this.alt =alt;
                this.title = title;
                this.desc =desc;
                this.price=price;
                this.transfer = 40.8;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.changeToUAH();
        }
        changeToUAH(){
            this.price = Math.floor(this.price * this.transfer);
        }
        render(){
            const element = document.createElement('div');

            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            }else{
                this.classes.forEach(className=>element.classList.add(className));
            }
           
            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desc}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            
            `
            this.parent.append(element);
        }
    }

        const getResourse = async (url)=>{
               const res = await fetch(url);

               if(!res.ok){
                throw new Error(`Could not fetch ${url}, status: ${res.status}`)
               }
               return await res.json();
        }

        // getResourse('http://localhost:3000/menu')
        // .then(data=>{
        //     data.forEach(({img,altimg,title,descr,price})=>{
        //             new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
        //     })
        // })

        //////// РОЗКОМЕНТУВАТИ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        axios.get('http://localhost:3000/menu')
        .then(item=>item.data.forEach(({img,altimg,title,descr,price})=>{
                    new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
            }));
    

}
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");





function forms(formSelector,modalTimerId){

     /////// FORM request //////////

     
     const form = document.querySelectorAll(formSelector);

     const message = {
         loading: 'img/form/spinner.svg',
         success: 'Спасибо! Скоро мі с Вами свяжемся',
         failure: 'Что-то пошло не так!'
     }
 
     form.forEach((item)=>{
         bindPostData(item);
     })
 
      
 
     function bindPostData(form){
         form.addEventListener('submit',(e)=>{
             e.preventDefault();
         
         const statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
         display: block;
         margin: 0 auto;
         `;
         form.append(statusMessage);
         const formData = new FormData(form);
        
         const json = JSON.stringify(Object.fromEntries(formData.entries()))
     
 
 
         Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests',json)
         .then(data=>{
             console.log(data);
                 showThanksModal(message.success);
                 statusMessage.remove();
         }).catch(()=>{
             showThanksModal(message.failure);
         }).finally(()=>{
             form.reset();
         })
 
 
     })
     }
 
 
 /////// Changed Form ///////
 
     function showThanksModal(message){
             const prevModalDialog = document.querySelector('.modal__dialog');
 
             prevModalDialog.style.display ='none';
             Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal',modalTimerId);
 
             const thanksModal = document.createElement('div');
             thanksModal.classList.add('modal__dialog');
             thanksModal.innerHTML = `
                 <div class ="modal__content"> 
                         <div class="modal__close data-close"></div>
                         <div class="modal__title">${message}</div>
                 </div>
             `;
             document.querySelector('.modal').append(thanksModal);
             setTimeout(()=>{
                 thanksModal.remove();
                 prevModalDialog.style.display ='block';
                 Object(_modal__WEBPACK_IMPORTED_MODULE_0__["modalClose"])('.modal');
             },2000)
     }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default, openModal, modalClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
    
     function openModal(modalSelector,modalTimerId){
        const modal = document.querySelector(modalSelector);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        console.log(modalTimerId);
        if(modalTimerId){
            clearInterval(modalTimerId);
        }
      
        }

    
    function modalClose(modalSelector){
        const modal = document.querySelector(modalSelector);
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    
    function modal(triggerSelector, modalSelector,modalTimerId){

        
    ////////// Modal //////////////////////



    const showModal = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    
    showModal.forEach((item)=>{
        item.addEventListener('click',()=> openModal(modalSelector,modalTimerId))
        })

    
    modal.addEventListener('click',(e)=>{
        if(e.target === modal || e.target.getAttribute('data-close') === ""){
            modalClose(modalSelector);
        }
    })

    document.addEventListener('keydown',(e)=>{
    if(e.code === "Escape"){
        modalClose(modalSelector);
    }
    })

    
    ///////// SHOW MODAL BY SCROLL /////////////////////////////////////////

    function showModalbyScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                openModal(modalSelector,modalTimerId);
                window.removeEventListener('scroll', showModalbyScroll);
        }
    }
    window.addEventListener('scroll',showModalbyScroll)



    }
    /* harmony default export */ __webpack_exports__["default"] = (modal);
    
    

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



function slider({container,slides,nextArrow, prevArrow, totalCounter, currentCounter,wrapper,fieldInner}){


    
    const slide = document.querySelectorAll(container);
    const nextSlide = document.querySelector(nextArrow);
    const prevSlide = document.querySelector(prevArrow);
    const current = document.querySelector(currentCounter);
    const total = document.querySelector(totalCounter);
    const slideWrapper =document.querySelector(wrapper);
    const slideInner = document.querySelector(fieldInner);
    const slider = document.querySelector(slides);
    const width = window.getComputedStyle(slideWrapper).width; 

    let indexSlide = 1;
    let offset = 0;

    slideInner.style.width = 100 * slide.length +"%";
    slideInner.style.display ='flex';
    slideInner.style.transition = '0.5s all';

    slideWrapper.style.overflow ='hidden';

    if(slide.length < 10){
        total.textContent = `0${slide.length}`
        current.textContent = `0${indexSlide}`
    }else{
        total.textContent = slide.length;
        current.textContent = indexSlide;
    }

    slide.forEach((slide)=>{
        slide.style.width = width;
    })

    slider.style.position ='relative';

    const indicator = document.createElement('ol');
    const dots =[];
    indicator.classList.add('carousel-indicators');

    slider.append(indicator);

    for(let i = 0; i < slide.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if(i === 0){
            dot.style.opacity = 1;
        }
        indicator.append(dot);
        dots.push(dot);
    }
////// add function currentLength - changed DRY! 

    function currentLength(currLengtch){
        if(currLengtch.length < 10){
            current.textContent = `0${indexSlide}`;
        }else{
            current.textContent = indexSlide;
        }
    }

////// add function dotsArrForSlide - changed DRY! 

    function dotsArrForSlide(dots){
        dots.forEach((dot)=>{
            dot.style.opacity ='.5'
        })
        dots[indexSlide - 1].style.opacity = 1; 
    }



    nextSlide.addEventListener('click',()=>{
        if(offset === +width.slice(0, width.length - 2) *(slide.length -1)){
            offset =0;
        }else{
            offset += +width.slice(0, width.length - 2);
        }

        slideInner.style.transform = `translateX(-${offset}px)`;

        if(indexSlide === slide.length){
            indexSlide = 1;
        }else{
            indexSlide ++;
        }

        currentLength(slide)
        dotsArrForSlide(dots);
        
    })

   prevSlide.addEventListener('click',()=>{
        if(offset === 0){
            offset = +width.slice(0, width.length - 2) *(slide.length -1)
        }else{
            offset -= +width.slice(0, width.length - 2);
        }

        slideInner.style.transform = `translateX(-${offset}px)`;

        if(indexSlide === 1){
            indexSlide = slide.length;
        }else{
            indexSlide --;
        }

        currentLength(slide)
        dotsArrForSlide(dots)
        
    })
       
    dots.forEach((dot)=>{
            dot.addEventListener('click',(e)=>{
            const slideTo = e.target.getAttribute('data-slide-to');
            indexSlide = slideTo;
            offset = +width.slice(0, width.length - 2) *(slideTo -1);

            slideInner.style.transform = `translateX(-${offset}px)`;

            currentLength(slide)   
            dotsArrForSlide(dots)
    })
})



}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


function tabs(tabsSelector, tabsContentSelector,tabsParentSelector,activeClass){

        
     /////////// Tabs /////////////////////////

const tabs = document.querySelectorAll(tabsSelector);
const tabsContent = document.querySelectorAll(tabsContentSelector);
const parentTabs = document.querySelector(tabsParentSelector);

function hideTabs(){
   tabsContent.forEach((item)=>{
    item.style.display = 'none'
    tabs.forEach((item)=>{
        item.classList.remove(activeClass);
    })
   })
}

function showTabsContent(i=0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
}
hideTabs();
showTabsContent();

parentTabs.addEventListener('click',(event)=>{
        let target = event.target;
       if(target && target.classList.contains(tabsSelector.slice(1))){
        tabs.forEach((item,i)=>{
                if(item === target){
                    hideTabs();
                showTabsContent(i);
                }
        })
       }
})
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



function timer(id, deadLine){

    
//////////////////// Timer /////////////////////////////////////////////

    function gettimeRemaining(endtime){
        let days,hours,minutes,seconds
        const t = Date.parse(endtime) - Date.parse(new Date());

        if(t<=0){
            days =0;
            hours =0;
            minutes=0;
            seconds=0;
        }else{
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor(t / (1000 * 60 * 60) % 24);
            minutes = Math.floor((t /1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }
     

        
        return{
            'total':t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds':seconds
        }

    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        
        const timeInterval = setInterval(updateClock,1000)

        updateClock();

        function getNum(num){
                if(num >=0 && num < 10){
                    return `0${num}`;
                }else{
                    return num;
                }
        }
        function updateClock(){
            const t = gettimeRemaining(endtime);

            days.innerHTML = getNum(t.days);
            hours.innerHTML = getNum(t.hours);
            minutes.innerHTML = getNum(t.minutes);
            seconds.innerHTML = getNum(t.seconds);

            if(t.total <= 0 ){
                clearInterval(timeInterval);
            }
        }
    }

        setClock(id, deadLine)
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
  
  
  
  
  
  
  
  


window.addEventListener('DOMContentLoaded',()=>{



  const modalTimerId = setTimeout(()=>Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])('.modal',modalTimerId),50000); ///// TIMER 

    Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]','.modal',modalTimerId);
    Object(_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])('.timer',"2023.01.31");
    Object(_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])('form',modalTimerId);
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
      container: '.offer__slide',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      currentCounter: '#current',
      totalCounter: '#total',
      wrapper: '.offer__slider-wrapper',
      fieldInner: '.offer__slider-inner',
      slides: '.offer__slider'
    });

    
});
    
   

    ///// SLIDER /////////

    
    // const slide = document.querySelectorAll('.offer__slide');
    // const prevSlide = document.querySelector('.offer__slider-prev');
    // const nextSlide =document.querySelector('.offer__slider-next');
    // const total = document.querySelector('#total');
    // const current = document.querySelector('#current');

    // if(slide.length < 10){
    //     total.textContent =`0${slide.length}`
    // }else{
    //     total.textContent = slide.length
    // }

    // let index =1; 

    // function slideShow(i){
    //     if(i > slide.length){
    //         index = 1;
    //     }
    //     if(i < 1){
    //         index = slide.length;
    //     }
    //    console.log(slide.length)
    //     slide.forEach(item=>item.style.display='none');
    //     slide[index - 1].style.display='block';

    //     if(slide.length < 10){
    //         current.textContent =`0${index}`
    //     }else{
    //         current.textContent = slide.length
    //     }
        
    // }
    // slideShow(index);

    // function addslide(i){
    //     slideShow(index +=i);
    // }

    // nextSlide.addEventListener("click",()=>{
    //     addslide(1);
    // })
    // prevSlide.addEventListener('click',()=>{
    //     addslide(-1)
    // })



   


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = async (url,data)=>{
    const res = await fetch(url,{
        method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body:data
    });
return await res.json();
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map