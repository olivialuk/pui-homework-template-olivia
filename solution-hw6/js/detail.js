

//HW04 Changing URL...
const queryString = window.location.search; 
const params = new URLSearchParams(queryString); 
const rollType = params.get('roll'); 

//HW04 Changing Header...
document.querySelector("h1").innerText=rollType;

//HW04 Changing Image...
document.querySelector('#detailimg').src = ('assets/products/'+rolls[rollType].imageFile);

//HW03 Calculating Price Adjustments...
let base = rolls[rollType].basePrice; 
let currentGlazePrice = 0; 
let currentPackSize = 1; 
let calculatedPrice = 0; 

/*
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
*/

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

function glazingChange(element) {
    currentGlazePrice = parseFloat(element); 
    displayPrice(); 
}

function packSizeChange(element){
    currentPackSize = element; 
    displayPrice(); 
}

function calculatePrice(basePrice, glazing, packSize){
    calculatedPrice = ((base + currentGlazePrice)*currentPackSize).toFixed(2); 
}

function displayPrice(){
    calculatePrice(); 
    document.querySelector('#detailPrice').innerHTML = calculatedPrice; 
}

//HW04...

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function saveProductInfo() {
    let cartItem = new Roll (rollType, currentGlazePrice, currentPackSize, base); 
    cart.push(cartItem); 
    console.log(cartItem);
    submitCart(roll);  
}

//HW 06


/*
let original = new Roll("Original", "Sugar Milk", 1, 2.49); 
let walnut = new Roll("Walnut", "Vanilla Milk", 12, 39.90); 
let raisin = new Roll("Raisin", "Sugar Milk", 3, 8.97); 
let apple = new Roll("Apple", "Original", 3, 10.47); 

*/