var playerTitleElement = document.getElementById('player_title');

playerTitleElement.addEventListener('click', updateName);

function updateName(event) {
 var name = prompt('Enter a new name');
 event.target.textContent = 'Player 1: ' + name;
}

var costGetter = document.getElementById('add_tip')

costGetter.addEventListener('click', makePrice)

function makePrice(event) {
    var tipAmount = prompt('what percent tip do you want to leave?')
    var withoutTip = document.getElementById("meal_cost")
    var totalCost = document.getElementById("total_cost");
    var totalPrice = tipAmount * withoutTip;
    totalPrice = totalPrice + withoutTip
    totalCost.target.textContent = totalPrice
}