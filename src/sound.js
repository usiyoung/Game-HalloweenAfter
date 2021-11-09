const alertWav = new Audio('./sound/alert.wav');
const bg = new Audio('./sound/bg.mp3');
const bugPull = new Audio('./sound/bug_pull.mp3');
const carrotPull = new Audio('./sound/carrot_pull.mp3');
const gameWiner = new Audio('./sound/game_win.mp3');


export function playAlert(){
    soundPlay(alertWav);
}

export function playbug(){
    soundPlay(bugPull);
}

export function playCarrot(){
    soundPlay(carrotPull);
}

export function playGameWiner(){
    soundPlay(gameWiner);
}

export function playBackground(){
    soundPlay(bg);
}

export function stopBackground(){
    soundPause(bg);
}

function soundPause(sound){
    sound.pause();
}

function soundPlay(sound){
    sound.currentTime = 0;
    sound.play();
}