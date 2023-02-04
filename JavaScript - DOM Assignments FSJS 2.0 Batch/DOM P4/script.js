// Task 1

// Card Barbarian
let cardBarbarian = document.querySelector(
  '.clash-card__unit-stats--barbarian.clash-card__unit-stats'
);

cardBarbarian.style.backgroundColor = '#ec9b3b';
cardBarbarian.style.color = '#fff';

// Card Archer
let cardArcher = document.querySelector(
  '.clash-card__unit-stats--archer.clash-card__unit-stats'
);

cardArcher.style.backgroundColor = '#ee5487';
cardArcher.style.color = '#fff';

// Card Giant
let cardGiant = document.querySelector(
  '.clash-card__unit-stats--giant.clash-card__unit-stats'
);

cardGiant.style.backgroundColor = '#f6901a';
cardGiant.style.color = '#fff';

// Card Goblin
let cardGoblin = document.querySelector(
  '.clash-card__unit-stats--goblin.clash-card__unit-stats'
);

cardGoblin.style.backgroundColor = '#82bb30';
cardGoblin.style.color = '#fff';

// Card Wizard
let cardWizard = document.querySelector(
  '.clash-card__unit-stats--wizard.clash-card__unit-stats'
);

cardWizard.style.backgroundColor = '#4facff';
cardWizard.style.color = '#fff';

// For all the divs with no-border on right
let divNoBorder = document.querySelectorAll(
  '.clash-card__unit-stats .no-border '
);

divNoBorder.forEach((div) => {
  div.style.color = '#fff';
});
