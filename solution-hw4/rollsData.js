const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
}

let cart = []; 

const queryString = window.location.search; 
//console.log(queryString); 
const params = new URLSearchParams(queryString); 
//console.log(params); 
const rollType = params.get('roll'); 
//console.log(rollType);


document.querySelector("h1").innerText=rollType;

//console.log(rolls[rollType].imageFile);
//console.log(document.querySelector('#detailimg').src); 

document.querySelector('#detailimg').src = ('http://127.0.0.1:5500/pui-homework-template-olivia/solution-hw4/assets/products/'+rolls[rollType].imageFile);


let base = rolls[rollType].basePrice; 

function updatePrice (price){
    document.querySelector('#detailPrice').innerHTML = price; 
}

updatePrice(base); 

var glazePrice = 0; 
var pack = 1; 

function glazingChange(glazeIndex){
    let allGlazes = [0,0,0.5,1.5];
    glazePrice = allGlazes[glazeIndex];
    calculatePrice(); 
}

console.log(glazePrice); 

function packsizeChange(packSize){
    let allPackSizes = [1, 3, 16, 12]; 
    pack = allPackSizes[packSize];
    calculatePrice(); 
}

function calculatePrice(){
    updatePrice(((base + glazePrice)*pack).toFixed(2)); 
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let cartItem = new Roll (rollType, glazePrice, pack, base); 

console.log(cartItem); 

/*
document.querySelector('#detailPrice').innerHTML = base; 

let packSize = 1; 
let glazePrice = 0; 


console.log((base + glazePrice)*packSize); 

document.querySelector('#detailPrice').innerHTML = ((base + glazePrice)*packSize).toFixed(2);


/*
let base = rolls[rollType].basePrice; 

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
    document.querySelector('#detailPrice').innerHTML = ((base + currentGlazePrice)*currentPackSize).toFixed(2);
}
 */
