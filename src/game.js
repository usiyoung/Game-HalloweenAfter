'use strict';

import GameZone from './game-zone.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
    lose : 'lose',
    win : 'win'
})
export class GameBuilder{
    withGameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    withToothCount(num){
        this.toothCount = num;
        return this;
    }

    withCandyCount(num){
        this.candyCount = num;
        return this;
    }

    build(){
        return new Game(
            this.gameDuration, //
            this.toothCount,
            this.candyCount
        )
    }
}
class Game{
    constructor(gameDuration, toothCount, candyCount){
        this.candyCount = candyCount;
        this.toothCount = toothCount;
        this.gameDuration = gameDuration;
        this.container = document.querySelector('.container');
        this.pause = document.querySelector('.container__btn');
        this.pause.addEventListener('click', this.pauseBtn);
        this.gameTimer = document.querySelector('.game-timer');
        this.count = document.querySelector('.count');    
        this.timer = '';
        this.gameZoneCreate = new GameZone(toothCount,candyCount);
        this.gameZoneCreate.setClickListener(this.onItemClick);
    }

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    }
    
    onItemClick = item => {
        if(item === 'tooth'){
            this.toothCount--;
            this.count.innerHTML = this.toothCount;
            if(this.toothCount === 0){
                clearInterval(this.timer);
                this.Win();
                return;
            }
        }else if(item === 'candy'){
            this.Lose();
        }
    }

    pauseBtn = e =>{
        let target = e.target || e.target.children[0];
        const pauseIcon = this.pause.querySelector('.fa-pause');
        if(target.className === 'fas fa-pause'){
            pauseIcon.classList.add('fa-redo-alt');
            pauseIcon.classList.remove('fa-pause');
            clearInterval(this.timer);
            sound.stopBackground();
        }
        else if(target.className === 'fas fa-redo-alt'){
            target.classList.remove('fa-redo-alt');
            target.classList.add('fa-pause');
            this.gameZoneCreate.init();
            this.countHandler();
        }
    }

    Lose = onGameStop =>{
        clearInterval(this.timer);
        sound.stopBackground();
        sound.playAlert();
        this.onGameStop && this.onGameStop(Reason.lose);
        this.pause.style.visibility = 'hidden';
    }
    
    Win = onGameStop =>{
        sound.playGameWiner();
        sound.stopBackground();
        this.pause.style.visibility = 'hidden';
        this.onGameStop && this.onGameStop(Reason.win);
    }

    startTimer(){
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(()=>{
            if(remainingTimeSec <= 0){
                this.Lose();
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        },1000);
    }
    
    updateTimerText(time){
        const minutes = Math.floor(time / 60);
        const seconds = time % 60 ;
        this.gameTimer.innerText = `${minutes} : ${seconds}` 
    }
    
    countHandler(){
        this.toothCount = 8;
        this.count.innerHTML = this.toothCount;
        this.startTimer();
    }
}

