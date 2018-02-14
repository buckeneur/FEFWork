function totalPrice(sqEdge, pricePerSqFt) {
return (sqEdge ** 2) * pricePerSqFt
}
console.log(totalPrice(10,100));

let day = "26";
let month = "June";
let year = "1981";

let myBirthday = month + " " + day + ", " + year;

console.log(myBirthday);

let age = 19;

if (age < 10) {
    console.log("Not permitted")
} else if 
    (age < 15)
{
    console.log("Permitted with parent")
} else if 
    (age < 18)
{
    console.log("Permitted with anyone over 18")
} else if
        (age >=18) 
{
    console.log("Permitted to attend alone")
}
