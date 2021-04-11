import * as Tone from "tone";

/* function keyE3Playing() {
  const E3 = document.getElementById("E3");
  E3.style.backgroundColor = "yellow";
  playNote("E3");
}
function keyE3NotPlaying() {
  const E3 = document.getElementById("E3");
  E3.style.removeProperty('background');
}
function keyD3Playing() {
  const D3 = document.getElementById("D3");
  D3.style.backgroundColor = "yellow";
  playNote("D3");
}
function keyD3NotPlaying() {
  const D3 = document.getElementById("D3");
  D3.style.removeProperty('background');
}
function keyC3Playing() {
  const C3 = document.getElementById("C3");
  C3.style.backgroundColor = "yellow";
  playNote("C3");
}
function keyC3NotPlaying() {
  const C3 = document.getElementById("C3");
  C3.style.removeProperty('background');
}
function keyG3Playing() {
  const G3 = document.getElementById("G3");
  G3.style.backgroundColor = "yellow";
  playNote("G3");
}
function keyG3NotPlaying() {
  const G3 = document.getElementById("G3");
  G3.style.removeProperty('background');
} */
/* export const playTune = () => {
  setTimeout(() => {
    keyE3Playing();
  }, 1000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 1800);
  setTimeout(() => {
    keyD3Playing();
  }, 2000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 2800);
  setTimeout(() => {
    keyC3Playing();
  }, 3000);
  setTimeout(() => {
    keyC3NotPlaying();
  }, 3800);
  setTimeout(() => {
    keyD3Playing();
  }, 4000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 4800);
  setTimeout(() => {
    keyE3Playing();
  }, 5000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 5800);
  setTimeout(() => {
    keyE3Playing();
  }, 6000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 6800);
  setTimeout(() => {
    keyE3Playing();
  }, 7000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 8800);
  setTimeout(() => {
    keyD3Playing();
  }, 9000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 9800);
  setTimeout(() => {
    keyD3Playing();
  }, 10000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 10800);
  setTimeout(() => {
    keyD3Playing();
  }, 11000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 12800);
  setTimeout(() => {
    keyE3Playing();
  }, 13000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 13800);
  setTimeout(() => {
    keyG3Playing();
  }, 14000);
  setTimeout(() => {
    keyG3NotPlaying();
  }, 14800);
  setTimeout(() => {
    keyG3Playing();
  }, 15000);
  setTimeout(() => {
    keyG3NotPlaying();
  }, 16800);
  setTimeout(() => {
    keyE3Playing();
  }, 17000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 17800);
  setTimeout(() => {
    keyD3Playing();
  }, 18000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 18800);
  setTimeout(() => {
    keyC3Playing();
  }, 19000);
  setTimeout(() => {
    keyC3NotPlaying();
  }, 19800);
  setTimeout(() => {
    keyD3Playing();
  }, 20000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 20800);
  setTimeout(() => {
    keyE3Playing();
  }, 21000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 21800);
  setTimeout(() => {
    keyE3Playing();
  }, 22000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 22800);
  setTimeout(() => {
    keyE3Playing();
  }, 23000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 24800);
  setTimeout(() => {
    keyD3Playing();
  }, 25000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 25800);
  setTimeout(() => {
    keyD3Playing();
  }, 26000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 26800);
  setTimeout(() => {
    keyE3Playing();
  }, 27000);
  setTimeout(() => {
    keyE3NotPlaying();
  }, 27800);
  setTimeout(() => {
    keyD3Playing();
  }, 28000);
  setTimeout(() => {
    keyD3NotPlaying();
  }, 28800);
  setTimeout(() => {
    keyC3Playing();
  }, 29000);
  setTimeout(() => {
    keyC3NotPlaying();
  }, 31000);
}; */
export function playNote(note) {
  const piano = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  Tone.loaded().then(() => {
    piano.triggerAttackRelease(`${note}`, 4); //use this number to add a sustain option
  });
  console.log(note);
}
export function keyE3Yellow() {
  const E3 = document.getElementById("E3");
  E3.style.backgroundColor = "yellow";
}
export function keyE3White() {
  const E3 = document.getElementById("E3");
  E3.style.removeProperty("background");
}
export function keyD3Yellow() {
  const D3 = document.getElementById("D3");
  D3.style.backgroundColor = "yellow";
}
export function keyD3White() {
  const D3 = document.getElementById("D3");
  D3.style.removeProperty("background");
}
export function keyC3Yellow() {
  const C3 = document.getElementById("C3");
  C3.style.backgroundColor = "yellow";
}
export function keyC3White() {
  const C3 = document.getElementById("C3");
  C3.style.removeProperty("background");
}
export function keyG3Yellow() {
  const G3 = document.getElementById("G3");
  G3.style.backgroundColor = "yellow";
}
export function keyG3White() {
  const G3 = document.getElementById("G3");
  G3.style.removeProperty("background");
}
