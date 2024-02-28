let basePrice = parseFloat(document.querySelector('#detailPrice').innerText); 
let currentGlazePrice = 0; 
let currentPackSize = 1; 

const allGlazes = {
    'Keep original': 0.00,
    'Sugar milk': 0.00, 
    'Vanilla milk': 0.50,
    'Double chocolate': 1.50
};

const allPackSizes = {
    '1' : 1, 
    '3' : 3, 
    '6' : 5, 
    '12' : 10
}

let glazingSelectElement = document.querySelector('#glazing'); 
let packSizeSelectElement = document.querySelector('#packsize'); 

for (var glaze in allGlazes) { 
    var option = document.createElement('option'); 
    option.text = glaze; 
    option.value = allGlazes[glaze]; 
    glazingSelectElement.add(option); 
}

for (var packsize in allPackSizes) {
    var option = document.createElement('option'); 
    option.text = packsize; 
    option.value = allPackSizes[packsize]; 
    packSizeSelectElement.add(option); 

}

console.log(glazingSelectElement); 
console.log(packSizeSelectElement); 

function glazingChange(element) {
    currentGlazePrice = parseFloat(element); 
    calculatePrice(); 
}

function packSizeChange(element){
    currentPackSize = element; 
    calculatePrice(); 
}

function calculatePrice(){
    document.querySelector('#detailPrice').innerHTML = ((basePrice + currentGlazePrice)*currentPackSize).toFixed(2); 
}

/*
function glazingChange(glazeIndex){
    let allGlazes = [0,0,0.5,1.5];
    currentGlazePrice = allGlazes[glazeIndex];
    calculatePrice(); 
}

function packsizeChange(packSize){
    let allPackSizes = [1, 3, 16, 12]; 
    currentPackSize= allPackSizes[packSize];
    calculatePrice(); 
}
*/

