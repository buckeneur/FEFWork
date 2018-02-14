//function 1 to sum numbers
function addNumbers(a, b =20) 
    {
        return a + b;
    }
console.log(addNumbers(1))


//function 2 to get the quotient of numbers
function divideNumbers (a, b = 5) {
    return a / b;
}

console.log(divideNumbers(105))

//funcion 3 to get the average of numbers
function avgNumbers (a, b = 10) {
    return (a + b) / 2
}

console.log(avgNumbers(32))

//arrow function 1 to sum numbers

const arrowAddNumbers = (a,b) => (a + b);

console.log(arrowAddNumbers(2,3))

//arrow function 2 to get the quotient of numbers
const arrowDivNumbers = (a,b) => a / b;

console.log(arrowDivNumbers(6,2));

//arrow function 3 to get the average of numbers
const arrowAvgNumbers = (a,b) => (a + b) / 2;

console.log(arrowAvgNumbers(0,2));


//Two JS objects using this
let newProduct = {
    prodName: "Teddy",
    prodType: "Bear",
    prodDescription: "Blue-eyed",
    displayName: function() {
        console.log(this.prodDescription + " " + this.prodName + " " + this.prodType);
    }

}

newProduct.displayName();


let wishList = {
    wlHeading: "I wish I had these things: ",
    wlItemOne: "Bentley", //Expensive item
    wlItemTwo: "Devon House Ice Cream", //Food item
    wlItemThree: "Hand Glider", //Aventure item
    wlPrint: function() {
        console.log(this.wlHeading + this.wlItemOne + ", " + this.wlItemTwo + ", " + this.wlItemThree);
    }
}

wishList.wlPrint();