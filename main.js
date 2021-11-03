const start = document.querySelector('.start');
const main = document.querySelector('.main');
const mainBtn = document.querySelector('.main__btn');
const container = document.querySelector('.container');
const gameZone = document.querySelector('.game-zone');
const gameZoneImg = document.querySelectorAll('.game-zone img');
const popUp = document.querySelector('.pop-up');
const popUpTtitle = document.querySelector('.pop-up__title');
const popUpBtn = document.querySelector('.pop-up__btn');
const containerBtn = document.querySelector('.container__btn')
const gameTimer = document.querySelector('.game-timer');
const count = document.querySelector('.count');
const reloadBtn = document.querySelector('.reloadBtn');
let pause = document.querySelector('.pause');

const GAME_DURATION_SEC = 5;
let gamestart = false;
const CANDY_COUNT = 9;
let TOOTH_COUNT = 8;
const IMGSIZE = 100;
let timer = undefined;

const alertWav = new Audio('./sound/alert.wav');
const bg = new Audio('./sound/bg.mp3');
const bugPull = new Audio('./sound/bug_pull.mp3');
const carrotPull = new Audio('./sound/carrot_pull.mp3');
const gameWin = new Audio('./sound/game_win.mp3');

function soundPlay(sound){
    sound.currentTime = 0;
    sound.play();
}
function soundPause(sound){
    sound.pause();
}

start.addEventListener('click',(e)=>{
    start.style.display = 'none';
    main.style.display = 'flex';
})

function startBtn(){
    mainBtn.addEventListener('click',()=>{
        gamestart = true;
        main.style.display = 'none';
        container.style.display = 'flex';
        initGame();
        startGameTimer(GAME_DURATION_SEC);
        soundPlay(bg);
    })
}

containerBtn.addEventListener('click',(e)=>{
    let target = e.target || e.target.children[0];
    const pauseIcon = containerBtn.querySelector('.fa-pause');
    if(target.className === 'fas fa-pause'){
        pauseIcon.classList.add('fa-redo-alt');
        pauseIcon.classList.remove('fa-pause');
        clearInterval(timer);
        gameZone.innerHTML = '';
    }
    else if(target.className === 'fas fa-redo-alt'){
        target.classList.remove('fa-redo-alt');
        target.classList.add('fa-pause');
        startGameTimer();
        countHandler();
        initGame();
    }

})
reloadBtn.addEventListener('click', ()=>{ 
    popUp.style.display = 'none';
    containerBtn.style.visibility = 'visible';
    soundPlay(bg);
    initGame();
    startGameTimer(GAME_DURATION_SEC);
    countHandler();
    return;
    });

function gameOver(win){
    gamestart = false;
    soundPause(bg);
    clearInterval(timer);
    if(!win){
        soundPlay(alertWav);
        popUpTtitle.innerHTML = `실패 하셨습니다. 😭  `;
        popUp.style.display = 'flex';
    }else{
        popUpTtitle.innerHTML = '성공 하셨습니다. 🥳';
        popUp.style.display = 'flex';
        soundPlay(gameWin);
    }
    containerBtn.style.visibility = 'hidden';
}

function startGameTimer(){
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(()=>{
        if(remainingTimeSec <= 0){
            gameOver();
            return;
        }
        updateTimerText(--remainingTimeSec);
    },1000);
}

function updateTimerText(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60 ;
    gameTimer.innerText = `${minutes} : ${seconds}` 
    
}

gameZone.addEventListener('click',(e)=>{
    let target = e.target;
    if(target.className === 'tooth'){
        target.remove();
        soundPlay(carrotPull);
        TOOTH_COUNT--;
        count.innerHTML = TOOTH_COUNT;
        if(TOOTH_COUNT === 0){
            clearInterval(timer);
            gameOver(TOOTH_COUNT === 0);
            return;
        }
    }else if(target.className === 'candy'){
        gameOver();
        soundPlay(bugPull);
    }
})

function countHandler(){
    TOOTH_COUNT = 8;
    count.innerHTML = TOOTH_COUNT;
}

function initGame(){
    gameZone.innerHTML = '';
    for(let i = 1; i <= CANDY_COUNT; i++){
        addItem('candy', 1, `img/candy${i}.png`);
    }
    for(let i = 1; i <= 2; i++){
        for(let i = 1; i <= 2; i++){
            for(let i = 1; i <= 2; i++){
                addItem('tooth', 1, `img/tooth${i}.png`);
            }
        }
    }
}

function addItem(className, count, imgPath){
    const gameZone = document.querySelector('.game-zone');
    const gameZoneRect = gameZone.getBoundingClientRect();
    const x1 = 0;
    const y1 = 0;
    const x2 = gameZoneRect.width - IMGSIZE;
    const y2 = gameZoneRect.height - IMGSIZE;

    for(let i = 0; i < count; i++){
        const item = document.createElement('img');
        item.setAttribute('class',className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNumber(x1, x2);
        const y = randomNumber(y1, y2);
        item.style.left =`${x}px`;
        item.style.top = `${y}px`;
        gameZone.appendChild(item);
    }
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

function init(){
    startBtn();
}
init();