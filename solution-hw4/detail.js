let basePrice = parseFloat(document.querySelector('#detailPrice').innerText); 


let currentPackSize = 1; 
let currentGlazePrice = 0; 

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
    document.querySelector('#detailPrice').innerHTML = ((basePrice + currentGlazePrice)*currentPackSize).toFixed(2); 
}



