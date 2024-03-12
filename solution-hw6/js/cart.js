

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

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.totalPrice = this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        const currentGlazingPrice = allGlazes[this.glazing];
        const currentPackPrice = allPackSizes[this.size];
        const totalPrice = (this.basePrice + currentGlazingPrice) * currentPackPrice;
        return parseFloat(totalPrice.toFixed(2));
    }

}
const cart = [];

let cartNum = 0; 

//new rolls
let original = new Roll("Original", "Sugar milk", 1, 2.49);  
let walnut = new Roll("Walnut", "Vanilla milk", 12, 3.49); 
let raisin = new Roll("Raisin", "Sugar milk", 3, 2.99); 
let apple = new Roll("Apple", "Keep original", 3, 3.49); 

function addToCart(rollInstance){
    //div
    let t1 = document.querySelector('#target1'); 

    //template
    let template = document.querySelector('.fullCartItem'); 

    //clone of template
    let clone = template.content.cloneNode(true);

    rollInstance.element = clone; 
    
    let removeLink = clone.querySelector('.removeLink'); 
    removeLink.addEventListener('click', () => {
        removeItem(rollInstance); 
    }); 

    let image = clone.querySelector('img'); 
    image.src = ('assets/products/'+ rolls[rollInstance.type].imageFile);
    
    let name = clone.querySelector('#name'); 
    name.textContent = rollInstance.type + ' Cinnamon Roll'; 

    let glazing = clone.querySelector('#glazing'); 
    glazing.textContent = "Glazing: " + rollInstance.glazing; 

    let packsize = clone.querySelector('#packsize'); 
    packsize.textContent = "Pack Size: " + rollInstance.size; 

    let priceText = clone.querySelector('#priceText'); 
    priceText.textContent = "$"+rollInstance.totalPrice;
    
    t1.appendChild(clone); 
    cart.push(rollInstance); 
    updateTotalPrice(); 
    
}

function removeItem(rollInstance){
    let index = cart.indexOf(rollInstance); 

    console.log(cart[index]);

    //cart[index].element.remove(); 

    if (index !== -1){
        cart.splice(index, 1); 
        updateTotalPrice();
    }   

    saveToLocalStorage()
}

function updateTotalPrice(){
    let total = document.querySelector("#totalPrice"); 
    let totalPrice = 0; 

    for (let i=0; i<cart.length; i++){
        totalPrice += cart[i].totalPrice; 
    }

    total.textContent = '$' + totalPrice.toFixed(2); 
}

addToCart(walnut); 
addToCart(original); 
addToCart(raisin); 
addToCart(apple); 


//HW6

function submitCart(roll){
    cart.push(roll);
    rollCounter = rollCounter + 1;
    updateTotalPrice();
    saveToLocalStorage();
}

function saveToLocalStorage(){
    console.log(cart); 

    const cartJSON = JSON.stringify(cart);
    console.log(cartJSON); 
    
    localStorage.setItem('cart', cartJSON); 

}

function retrieveFromLocalStorage(){
    const cartJSON = localStorage.getItem('cart'); 
    const cart = JSON.parse(cartJSON); 

    for (const item of cart){
        const roll = new Roll(item.type, item.glazing, item.size, item.basePrice); 
        cart.push(roll); 
        cartNum = cartNum + 1
        addToCart(roll)
    }

}

if (localStorage.getItem('cart') != null){
    retrieveFromLocalStorage();
}


/*

let basePrice = 0; 
let packOption = 1; 
let rollType = NaN; 
let glazingOption = "Keep Original"; 

*/






