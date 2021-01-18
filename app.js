// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

function steepTime(grams, milliliters){
    if (milliliters / grams >= 33) return '30 seconds';
    else if (milliliters / grams < 33 && milliliters / grams >= 20) return '15 seconds';
    else return '5 seconds';
}
console.log(steepTime(6, 100));

function howMuchTea(teaType, milliliters){
    if (teaType === 'green' && milliliters < 100) return '3 grams';
    console.log(teaType, milliliters);
}
console.log(howMuchTea('green', 90));