'use strict';

import PopUp from './popup.js';
import GameBefore from './gameBefore.js';
import GameZone from './game-zone.js';
import {GameBuilder, Reason } from './game.js';

const pauseBtn = document.querySelector('.container__btn');

const game = new GameBuilder().
withGameDuration(5).
withToothCount(5).
withCandyCount(9).
build();

const gameZoneCreate = new GameZone(5,9);

const gameFinishBanner = new PopUp();
    gameFinishBanner.setClickListener(()=>{
        gameZoneCreate.init();
        game.countHandler();
        pauseBtn.style.visibility = 'visible';
})

game.setGameStopListener(reason => {
    let message;
    switch(reason){
        case Reason.lose :
            message = '실패 하셨습니다. 😭 ';
        break;

        case Reason.win :
            message = '성공 하셨습니다. 🥳';
        break;

        dafault :
        throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});

const gameBefore = new GameBefore();
gameBefore.setClickEvent(event =>{
        gameZoneCreate.init();
        game.countHandler();
})

function init(){
    gameBefore.Btn();
}

init();