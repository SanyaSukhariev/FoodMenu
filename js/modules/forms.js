import {openModal, modalClose} from './modal';
import { postData } from '../services/services';



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
     
 
 
         postData('http://localhost:3000/requests',json)
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
             openModal('.modal',modalTimerId);
 
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
                 modalClose('.modal');
             },2000)
     }
}
export default forms;