import { body, characters, GameLanguage, language, players } from '../index.js';
import { playerTurn } from './functions.js';

export class GameClass {
    constructor(version,site,language) {
        switch(site) {
            case 'menu':
                this.siteMenu(version,language);
            break;
            case 'selection':
                this.siteSelection();
            break;
            case 'game':
                this.siteGame();
            break;
        }
    }
    siteMenu = (version,language) => {
        body.innerHTML = `
        <!-- Site Header -->
        <header class="header-menu">
            <p>${GameLanguage.menuTitle(language)}</p>
            
            <div class="version">
                <p>${version}</p>
            </div>
        </header>
    
        <!-- Site Main -->
        <main class="main-menu">
            <button id="btn-play" class="btn btn-primary">${GameLanguage.menuButtons(language,0)}</button>
            <button id="btn-options" class="btn btn-primary">${GameLanguage.menuButtons(language,1)}</button>
            <button id="btn-rules" class="btn btn-primary">${GameLanguage.menuButtons(language,2)}</button>
        </main>
    
        <!-- Site Footer -->
        <footer class="footer-menu">
            <p>${GameLanguage.menuFooter(language)} <span>Henry Vega | Jackson Vega</span></p>
            <p>${GameLanguage.copyright(language)} &copy;</p>
        </footer>`;
    }
    siteSelection = () => {
        body.innerHTML = `
        <!-- Site Header -->
        <header class="header-selection">
            <p>${GameLanguage.selectionTitle(language)}</p>
        </header>

        <!-- Site Main -->
        <main class="main-selection">
            <div class="character-selection"></div>

            <i id="change-arrow" class="fa-solid fa-caret-down arrow"></i>

            <div class="div-character-name">
                <input id="name" type="text" placeholder="${GameLanguage.selectionInput(language)}">
                <button id="btn-confirm" class="btn btn-primary">${GameLanguage.selectionButtons(language,0)}</button>
            </div>
        </main>
        
        <!-- Site Footer -->
        <footer>
            <i id="numberPlayers" class="fa-solid fa-user">0</i>
            <button id="btn-start" class="btn btn-primary">${GameLanguage.selectionButtons(language,1)}</button>
        </footer>`;
    }
    siteGame = () => {
        body.innerHTML = `
        <!-- Site Header -->
        <header class="header-game">
            <p>Turno de <span>${players[0]}</span></p>
        </header>

        <!-- Site Main -->
        <main class="main-game">
            <div class="deck"><img src="./assets/img/card_back.jpg" alt="Deck"></div>
            <button id="btn-draw" class="btn btn-primary mt-2">Tomar</button>
        </main>
        
        <!-- Site Footer -->
        <footer class="footer-game">
            <div class="player">
                <div class="player-img"><img src="./assets/goblins/goblin_${characters[0]}.png" alt="Goblin"></div>
                <p>${players[0]}<p>
                <i class="fa-solid fa-flask">1</i>
            </div>

            <div class="div-player-cards">
                <div class="player-card"><img src="./assets/img/card_back.jpg" alt="Drink"></div>
                <div class="player-card"><img src="./assets/img/card_back.jpg" alt="Drink"></div>
                <div class="player-card"><img src="./assets/img/card_back.jpg" alt="Drink"></div>
                <div class="player-card"><img src="./assets/img/card_back.jpg" alt="Drink"></div>
            </div>
        </footer>`;
    }
    createDeck = () => {
        let deck = ['Beben todos los goblins de color verde','Beben todos los goblins con armas','beben los goblins que no tengan armas',
        'beben solo los goblins con arco', 'beben los goblins que lleven alguna cuchilla o espada'];
        return deck;
    }
}
export class GameLanguageClass {
    copyright = (language) => {
        const copyright = ['All Right Reserved','Todos Los Derechos Reservados'];
        return copyright[language];
    }
    menuTitle = (language) => {
        const title = ['First Drink','Primer Trago'];
        return title[language];
    }
    menuButtons = (language,event) => {
        const buttons = [['Play','Options','How To Play?'],['Jugar','Opciones','¿Como Jugar?']];
        return buttons[language][event];
    }
    menuFooter = (language) => {
        const footer = ['Create By:','Creado Por:'];
        return footer[language];
    }
    selectionTitle = (language) => {
        const title = ['Select Your Character','Selecciona Tu Personaje'];
        return title[language];
    }
    selectionInput = (language) => {
        const title = [`Name`,'Nombre'];
        return title[language];
    }
    selectionButtons = (language,event) => {
        const buttons = [['Confirm,Start'],['Confirmar','Empezar']];
        return buttons[language][event];
    }
}
export class SaveClass {
    saveGame = (site) => {
        localStorage.setItem('site',site);
    }
    savePlayers = (players) => {
        localStorage.setItem('players',JSON.stringify(players));
    }
    saveCharacters = (goblins) => {
        localStorage.setItem('characters',JSON.stringify(goblins));
    }
}
export class LoadClass {
    loadSite = () => {
        if (localStorage.getItem('site')) {
            return localStorage.getItem('site');
        } else { return 'menu'; }
    }
    loadPlayers = () => {
        if (localStorage.getItem('players')) {
            return JSON.parse(localStorage.getItem('players'));
        } else { return []; }
    }
    loadCharacters = () => {
        if (localStorage.getItem('characters')) {
            return JSON.parse(localStorage.getItem('characters'));
        } else { return []; }
    }
}