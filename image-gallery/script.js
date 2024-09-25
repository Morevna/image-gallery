const music = document.querySelector('#audio');
const coverBody = document.querySelector('.bg');


const audio = new Audio();
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".forward-btn");
const prevBtn = document.querySelector(".backward-btn");

const trackTitle = document.querySelector(".music-name");
const trackArtist = document.querySelector(".singer-name");

const trackImg = document.querySelector(".upper_cover");

const progressFilled = document.querySelector(".seek-bar");
const currentTimeFielf = document.querySelector(".current-time");
const endTimeFielf = document.querySelector(".song-duration");

//Глобальные переменные
let isPlay = false;
let currentIndex = 0; // индекс звучащей песни;
let currentTime = 0;
let tick;
let tickProgress;



//Подключение функций
startScreen();
playBtn.addEventListener("click", clickPlayBtn);
nextBtn.addEventListener("click", playNextAudio);
prevBtn.addEventListener("click", playPrevAudio);
progressFilled.addEventListener("mousedown", stopTick);
progressFilled.addEventListener("touchstart", stopTick);
progressFilled.addEventListener("mouseup", moveProgressValue);
progressFilled.addEventListener("touchend", moveProgressValue);