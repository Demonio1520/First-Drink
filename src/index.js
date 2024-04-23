import { GameClass, GameLanguageClass } from './js/class.js';
import './css/normalize.css';
import './styles.css';

export const body = document.querySelector('body'),
header = document.querySelector('header'),
main = document.querySelector('main'),
footer = document.querySelector('footer'),
divVersion = document.querySelector('.version'),
btnPlay = document.querySelector('#btn-play');
export let version = 'V-1.0.5', language = 0;
export const Game = new GameClass(version), GameLanguage = new GameLanguageClass(language);

btnPlay.addEventListener('click',() =>{
    body.replaceChildren();
    Game.characterSelection();
});