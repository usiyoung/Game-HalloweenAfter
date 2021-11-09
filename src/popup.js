'use strict';

export default class PopUp{
    constructor(){
        this.popUp = document.querySelector('.pop-up');
        this.popUpTitle = document.querySelector('.pop-up__title');
        this.popUpBtn = document.querySelector('.pop-up__btn');
        this.popUpRefresh = document.querySelector('.reloadBtn');
        this.popUpRefresh.addEventListener('click',()=>{
            this.onClick && this.onClick();
            this.hide();
        })
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

    hide(){
        this.popUp.style.display = 'none';
    }

    showWithText(text){
        this.popUpTitle.innerHTML = text;
        this.popUp.style.display = 'flex';
    }

}