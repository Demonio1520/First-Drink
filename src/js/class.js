import { body, Load, Game, GameLanguage, language } from '../index.js';

export class GameClass {
    constructor(version,site,language) {
        switch(site) {
            case 'menu':
                this.siteMenu(version,language);
            break;
            case 'selection':
                this.siteSelection();
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
        </main>`;
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
        localStorage.setItem('goblins',JSON.stringify(goblins));
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
        if (localStorage.getItem('goblins')) {
            return JSON.parse(localStorage.getItem('goblins'));
        } else { return []; }
    }
}