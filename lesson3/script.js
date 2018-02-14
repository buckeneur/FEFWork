//Check your HS grade
let highSchoolGrade = 11;
let yourGrade;

switch (highSchoolGrade) {
    case 9:
        yourGrade = "Freshman";
        break;
    case 10:
        yourGrade = "Sophomore";
        break;
    case 11:
        yourGrade = "Junior"
        break;
    case 12:
        yourGrade = "Senior"
        break;
    default:
        yourGrade = "Invalid"

}
console.log(yourGrade)


//Hover to 'Hello World
document.addEventListener("pointerover", function() {
    let mouseHover = document.getElementById('mouse');
    mouseHover.innerHTML = "Hello World";
});


//Print birthday to screen
document.addEventListener("pointerover", function(){
    let enterDate = document.getElementById("enter");
    enterDate.innerHTML = "Please enter your information below."
} ); 

function submit(entryMonth,entryDay,entryYear) {
    entryMonth = parseInt(document.getElementById('month').value);
    entryDay = document.getElementById('day').value;
    entryYear = document.getElementById('year').value;

    //Set month value
    let printMonth;
    switch (entryMonth){
        case 1:
        printMonth = "January";
        break;
        case 2:
        printMonth = "February";
        break;
        case 3:
        printMonth = "March";
        break;
        case 4:
        printMonth = "April";
        break;
        case 5:
        printMonth = "May";
        break;
        case 6:
        printMonth = "June";
        break;
        case 7:
        printMonth = "July";
        break;
        case 8:
        printMonth = "August";
        break;
        case 9:
        printMonth = "September";
        break;
        case 10:
        printMonth = "October";
        break;
        case 11:
        printMonth = "November";
        break;
        case 12:
        printMonth = "December";
        break;
        default:
        printMonth = "#Month#";
    }

    let printDate = document.getElementById('printDate');

    //Print full date
    printDate.innerHTML = "Your birthday is: " + printMonth + " " + entryDay + ", " + entryYear;
  

}