let basePrice = parseFloat(document.querySelector('#detailPrice').innerText); 

console.log (basePrice);

let currentPackSize = 0
let currentGlazePrice = 1

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

function calculatePrice(){
    document.querySelector('#detailPrice').innerHTML = ((basePrice + currentGlazePrice)*currentPackSize); 
}