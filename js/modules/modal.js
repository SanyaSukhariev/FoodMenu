    
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
    export default modal;
    export {openModal};
    export {modalClose};