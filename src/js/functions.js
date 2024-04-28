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
export function createBubbles() {
    for (let i = 0; i < 1; i++) {
        const bubbles = document.querySelector('.bubbles'),
        span = document.createElement('span');
        let speed = [1,2,3,4,5,6,7,8,9,10];
        span.style = 'i--: 5';
        bubbles.append(span);
    }
}