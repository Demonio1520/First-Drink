import { GameClass, GameLanguageClass, SaveClass, LoadClass } from './js/class.js';
import { reload, playerCard, playerTurn } from './js/functions.js';
import './css/normalize.css';
import './styles.css';

export const body = document.querySelector('body');
export const Save = new SaveClass(), Load = new LoadClass();
export let version = 'V-1.0.8', site = Load.loadSite(), language = 1, players = Load.loadPlayers(), characters = Load.loadCharacters();
export const GameLanguage = new GameLanguageClass(), Game = new GameClass(version,site,language);

if (site == 'menu') {
    const btnPlay = document.querySelector('#btn-play');

    btnPlay.addEventListener('click',() =>{
        btnPlay.disabled = true;
        site = 'selection', Save.saveGame(site);
        setTimeout(reload);
    });
}
if (site == 'selection') {
    const card = document.querySelector('.character-selection'),
    arrow = document.querySelector('#change-arrow'),
    name = document.querySelector('#name'),
    btnConfirm = document.querySelector('#btn-confirm'),
    btnStart = document.querySelector('#btn-start'),
    numberPlayers = document.querySelector('#numberPlayers');
    let goblins = [0,1,2,3,4,5,6,7,8,9], goblin = goblins[0];

    card.innerHTML = playerCard(goblins[goblin]);

    arrow.addEventListener('click',() => {
        (goblin == goblins.length -1) ? goblin = 0 : goblin += 1;
        card.innerHTML = playerCard(goblins[goblin]);
    });
    btnConfirm.addEventListener('click',() => {
        btnConfirm.disabled = true;
        players.push(name.value);
        name.value = '';
        characters.push(goblins[goblin]);
        numberPlayers.textContent = players.length;
        goblins.splice(goblin,1);
        (goblin >= goblins.length -1) ? goblin = 0 : goblin = goblin;
        card.innerHTML = playerCard(goblins[goblin]);
        setTimeout(() => {
            btnConfirm.disabled = false
        }, 500);
    });
    btnStart.addEventListener('click',() => {
        btnStart.disabled = true;
        Save.savePlayers(players), Save.saveCharacters(characters);
        site = 'game', Save.saveGame(site);
        setTimeout(reload);
    });
}
if (site == 'game') {
    const btnDraw = document.querySelector('#btn-draw');
    let turn = playerTurn();

    btnDraw.addEventListener('click',() => {
        document.querySelector('.main-game').innerHTML = `
        <div class="drew-card">
            <p>Todos Los Goblins Con Armas Beben</p>
        <div>`
        turn = playerTurn(turn);
    });
}