let score = 0;

// Getting all DOM nodes containing the "hole" class and assign the list to a variable
var holes = Array.from(document.getElementsByClassName('hole'));

// Get a random # between 0 and the # of holes we have, 
// then toggle the "mole" class in that specific <div>
var randHoleIdx; //= Math.floor(Math.random()*(holes.length));
// holes[randHoleIdx].classList.toggle("mole");

// Repeat the code above on a timed interval using setInterval 
function repeatMoles () {
    randHoleIdx = Math.floor(Math.random()*(holes.length)+1);
    holes[randHoleIdx].classList.toggle("mole");
}

setInterval(repeatMoles(), 1000);

var scoreDisplay = document.getElementById('score');
console.log(scoreDisplay);
