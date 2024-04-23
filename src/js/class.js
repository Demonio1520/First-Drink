import { menuTitle, menuButtons, menuFooter } from './language.js';
import { body, header, main, footer, divVersion } from '../index.js';

export class GameClass {
    constructor(version) {
        divVersion.innerHTML = `<p>${version}</p>`;
    }
    characterSelection = () => {
        body.innerHTML = `
        <!-- Site Header -->
        <header class="header-selection">
            <p>Select Your Character</p>
        </header>

        <!-- Site Main -->
        <main class="main-selection">
            <div class="character-selection"></div>

            <i id="change-arrow" class="fa-solid fa-caret-down arrow"></i>

            <div class="div-character-name">
                <input id="name" type="text" placeholder="Character's Name">
                <button id="btn-confirm" class="btn btn-primary">Confirm</button>
            </div>
        </main>
        `;
    }
}
export class GameLanguageClass {
    constructor(language) {
        this.menuLanguage(language);
    }
    menuLanguage = (language) => {
        header.children[0].textContent = menuTitle[language];
        main.children[0].textContent = menuButtons[language][0];
        main.children[1].textContent = menuButtons[language][1];
        main.children[2].textContent = menuButtons[language][2];
        footer.children[0].innerHTML = `<p>${menuFooter[language][0]}<span>Henry Vega | Jackson Vega</span></p>`;
        footer.children[1].textContent = menuFooter[language][1];
    }
}