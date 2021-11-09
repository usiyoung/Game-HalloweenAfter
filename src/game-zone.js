'use strict';

import * as sound from './sound.js';

const IMGSIZE = 100;

export default class GameZone {
    constructor(toothCount, candyCount){
        this.candyCount = candyCount;
        this.toothCount = toothCount;
        this.gameZone = document.querySelector('.game-zone');   
        this.gameZone.addEventListener('click',(event)=>this.onClick(event));
    }

    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    }

    onClick(e){
        const target = e.target;
        if(target.className === 'tooth'){
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick('tooth');
        }else if(target.className === 'candy'){
            sound.playbug();
            this.onItemClick && this.onItemClick('candy');
        }
    }

    init(){
        this.gameZone.innerHTML = '';
        sound.playBackground();
        for(let i = 1; i <= this.candyCount; i++){
            this._addItem('candy', 1, `img/candy${i}.png`);
        }
        for(let i = 1; i <= 2; i++){
            for(let i = 1; i <= 2; i++){
                for(let i = 1; i <= 2; i++){
                    this._addItem('tooth', 1, `img/tooth${i}.png`);
                }
            }
        }
    }

    _addItem(className, count, imgPath){
        this.gameZone = document.querySelector('.game-zone');
        this.gameZoneRect = this.gameZone.getBoundingClientRect();
        const x1 = 0;
        const y1 = 0;
        const x2 = this.gameZoneRect.width - IMGSIZE;
        const y2 = this.gameZoneRect.height - IMGSIZE;
    
        for(let i = 0; i < count; i++){
            const item = document.createElement('img');
            item.setAttribute('class',className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left =`${x}px`;
            item.style.top = `${y}px`;
            this.gameZone.appendChild(item);
        }
    }
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}