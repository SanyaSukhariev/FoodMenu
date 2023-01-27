

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

export default tabs;
