


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
export default cards;