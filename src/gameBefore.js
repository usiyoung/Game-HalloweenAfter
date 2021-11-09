'use strict';

import * as sound from './sound.js';

export default class GameBefore{
    constructor(){
        this.start = document.querySelector('.start');
        this.main = document.querySelector('.main');
        this.mainBtn = document.querySelector('.main__btn');
        this.container = document.querySelector('.container');
        this.start.addEventListener('click',(e)=>{
            this.start.style.display = 'none';
            this.main.style.display = 'flex';
        })
    }

    setClickEvent(event){
        this.event = event;
    }
    
    Btn(){
        this.mainBtn.addEventListener('click',()=>{
            this.main.style.display = 'none';
            this.container.style.display = 'flex';
            sound.playBackground();
            this.event && this.event();
        })
    }
}
