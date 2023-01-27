  import tabs from './modules/tabs';
  import modal from './modules/modal';
  import cards from './modules/cards';
  import timer from './modules/timer';
  import calc from './modules/calc';
  import forms from './modules/forms';
  import slider from './modules/slider';
  import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded',()=>{



  const modalTimerId = setTimeout(()=>openModal('.modal',modalTimerId),50000); ///// TIMER 

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]','.modal',modalTimerId);
    cards();
    timer('.timer',"2023.01.31");
    calc();
    forms('form',modalTimerId);
    slider({
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



   
