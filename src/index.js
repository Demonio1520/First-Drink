import { GameClass, GameLanguageClass } from './js/class.js';
import './css/normalize.css';
import './styles.css';

export const body = document.querySelector('body'),
header = document.querySelector('header'),
main = document.querySelector('main'),
footer = document.querySelector('footer'),
btnPlay = document.querySelector('#btn-play');
export let language = 0;
export const Game = new GameClass(), GameLanguage = new GameLanguageClass(language);

btnPlay.addEventListener('click',() =>{
    body.replaceChildren();
});