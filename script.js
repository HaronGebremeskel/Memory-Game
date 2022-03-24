var pattern = [2, 6, 4, 3, 2, 1, 5, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var count = 20;
var reset = false;

const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const len = 6;


function generatePattern(){
  for(let j = 0; j < len; j++){
    pattern[j] = Math.ceil(Math.random() * 6);
  }
}


function startGame(){
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  generatePattern();
  playClueSequence();
}


function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  reset = true;
}


const freqMap = {
  1: 112.6,
  2: 210.6,
  3: 305,
  4: 415.2,
  5: 520.6,
  6: 625.2,
}


function playTone(btn, len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  }, len)
}


function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
}


function stopTone(){
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

var AudioContext = window.AudioContext || window.webkitAudioContext
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  
  for(let i = 0; i<= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.")
}


function winGame(){
  stopGame();
  alert("Game Over. You Won!")
}


function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if (guessCounter == progress){
      if(progress == pattern.length-1){
        winGame();
        reset = true;
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    loseGame();
  }
}
    
