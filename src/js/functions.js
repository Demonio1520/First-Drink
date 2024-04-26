import { Load, Save, players, characters } from "../index.js";

export function reload() {
    location.reload(true);
}
export function playerCard(character) {
    return `<img src="./assets/goblins/goblin_${character}.png" alt="Goblin">`;
}
export function playerTurn(turn = 0) {
    if (turn >= players.length) { turn = 0; }
    document.querySelector('span').textContent = players[turn];
    document.querySelectorAll('img')[1].src = `./assets/goblins/goblin_${characters[turn]}.png`;
    return turn += 1;
}