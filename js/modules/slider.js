


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
export default slider;