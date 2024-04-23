export function characterSelection(goblin = 1) {
    const card = document.querySelector('.character-selection'),
    arrow = document.querySelector('#change-arrow'),
    name = document.querySelector('#name');
    card.innerHTML = `<img src="./assets/goblins/goblin_${goblin}.png" alt="Goblin">`;

    arrow.addEventListener('click',() =>{
        (goblin == 10) ? goblin = 1 : goblin += 1;
        characterSelection(goblin);
    });
}