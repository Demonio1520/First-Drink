import { Load, Save, players } from "../index.js";

export function reload() {
    location.reload(true);
}
export function playerCard(character) {
    return `<img src="./assets/goblins/goblin_${character}.png" alt="Goblin">`
}