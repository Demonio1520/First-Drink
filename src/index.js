import { GameClass, GameLanguageClass, SaveClass, LoadClass } from './js/class.js';
import { reload, playerCard } from './js/functions.js';
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
    btnConfirm = document.querySelector('#btn-confirm');
    let goblin = 0, goblins = [0,1,2,3,4,5,6,7,8,9];

    card.innerHTML = playerCard(goblin);

    arrow.addEventListener('click',() => {
        (goblin == goblins.length -1) ? goblin = 0 : goblin += 1;
        console.log(goblin);
        card.innerHTML = playerCard(goblin);
    });
    btnConfirm.addEventListener('click',() => {
        btnConfirm.disabled = true;
        players.push(name.value), Save.savePlayers(players);
        name.value = '';
        characters.push(goblin), Save.saveCharacters(characters);
        goblins.splice(goblin,1);
        (goblin == goblins.length -1) ? goblin = 0 : goblin += 1;
        card.innerHTML = playerCard(goblin);
        setTimeout(() => {
            btnConfirm.disabled = false
        }, 500);
        console.log(goblins);
    });
}