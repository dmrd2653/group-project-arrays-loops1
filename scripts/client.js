console.log('JS sourced');
let cities = 'Washington, Minneapolis, St. Paul';
console.log(Array.isArray(cities));
let newCities = cities.split(',');
console.log(newCities);
// let html = document.getElementById("ourCities").innerHTML;
// console.log(html) 
//Need to come back to innerHTML 

// For loop determining if Minneapolis was within the list
for (i=0; i <= newCities.length; i ++){
    if (newCities[i] === newCities['Minneapolis'])
    console.log('The Array Contains Minneapolis!')
}

// Build in method using last.index
console.log(newCities);
console.log(newCities.lastIndexOf(' Minneapolis'));
let newerCities = '      Washington, Minneapolis, St. Paul        ';
console.log(newerCities.trim());