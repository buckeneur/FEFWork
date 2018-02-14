//Create a class to  output stadium data
class Stadium {
    constructor(name, city, capacity) {
        this.name = name;
        this.city = city;
        this.capacity = capacity;
    }

    describeStadium() {
        console.log("The " + this.name + " is in " + this.city + " and holds " + this.capacity + ".");
        
    }

}


class SeatsOpen extends Stadium {
    constructor(name, city, capacity, sport, seats) {
        super(name, city, capacity);
        this.sport = sport;
        this.seats = seats;
    }
    
    sportPlayed() {
        console.log("The following sport is mainly played in this statium: " + this.sport);
        
    }
    
    seatsAvailable() {
        console.log("There are " + this.seats + " seats still available for tonight's game.");
        
    }
}   

let stadium1 = new SeatsOpen(
    "Mercedes Benz Arena",
    "Atlanta",
    70000,
    "Football",
    55000
);

stadium1.describeStadium();
stadium1.sportPlayed();
stadium1.seatsAvailable();


//Create a class to handle Employee data
let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let fullName = firstName + " " + lastName;

class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    
    getName() {
        console.log("Name: " + this.name.toUpperCase());
    }
    
    getSalary() {
        console.log("Pay: $" + this.salary + "/year");        
    }
    
    getHireDate() {
        console.log("Hired on: " + this.hireDate);
        
    }
    
}





//Add methods to employee class

class Manager extends Employee {
    constructor(name,salary,hireDate,report,schedule) {
        super(name,salary,hireDate);
        this.report = report;
        this.schedule = schedule;
    }
    
    directReport() {
        console.log("This position will report to " + this.report + ".");        
    }
    
    workSchedule() {
        console.log("Schedule: " + this.schedule)
    }
    
}

let firstEmployee = new Manager(
    document.getElementById("fName").value, //Not sure why this is not generating
    "50000",
    "12/1/2018",
    "Shift Lead",
    "Full-time"
);

function listEntry(firstName,lastName) {
    firstName = document.getElementById("fName").value;
    lastName = document.getElementById("lName").value;    
    document.getElementById("showFirstName").innerHTML = firstName + " " + lastName;

    firstEmployee.getHireDate();
    firstEmployee.getSalary()
    firstEmployee.directReport();
    firstEmployee.workSchedule();
}

class Designer extends Employee {
    constructor(title,experience,name,salary,hireDate) {
        super(name,salary,hireDate)
        this.title = title;
        this.experience = experience;
    }
    
    jobTitle() {
        console.log("Title: " + this.title);
        return document.getElementById("designer").innerHTML = "Title: " + this.title;        
    }
    
    jobDescription() {
        let fullDescription = "For " + this.title + " position, you will be responsible for " + this.experience + ".";
        console.log(fullDescription);
        return document.getElementById("description").innerHTML = fullDescription;
        
    }
    
}

let displayDetails = new Designer(
    "Designer",
    "1) read, 2) write, 3) add",
    "",
    "",
    ""
    )

function showDescription() {
    displayDetails.jobTitle();
    displayDetails.jobDescription();    
}

class QA extends Employee {
    constructor(degree,name,salary,hireDate) {
        super(name,salary,hireDate)
        this.degree = degree;
    }
    additionalReq() {
        console.log("Additional Requisites: " + this.degree)
    }

    postDegree() {
        return document.getElementById("degree").innerHTML = "Education Level: " + this.degree;
    }
}

let qADetails = new QA (
    "Bachelors",
    "Obart Finkelstein",
    "45000",
    "01/13/2018"
)

function showQADescription() {
    console.log("QA Details:");
    
    qADetails.getName();
    qADetails.getHireDate();
    qADetails.additionalReq();
    qADetails.postDegree();
}




/*  For lesson examples 
class Vehicle {
    constructor(make, model, year) {
        this.make;
        this.model;
        this.year;
    }
}

//let myCar = new Vehicle("Nissan", "Rogue", 2017);

//console.log(myCar);


class Person {

 /*   constructor(name, age) {
        this.name = name;
        this.age = age;
        
    }
    
    run() {
        console.log(this.name + " is running.");        
    }
    walk() {
        console.log(this.name + " is walking.");        
    }
    greeting() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + ".");
        }
}

let andrew = new Person("Andrew",30);
let mike = new Person("Mike",24);
let frank = new Person("Frank",29);

andrew.greeting();
mike.greeting();
frank.greeting();
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        console.log("Hello, my name is " + this.firstName + ".");
        
    }
}

class NewStudent extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    studentInfo() {
        console.log(this.studentID + " " + this.firstName + ", " + this.lastName);
        
    }
}

let student = new NewStudent(12, "John", "Smith");
student.greeting();
student.studentInfo();

class Car {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    get make() {
        return this._make;
    }

    set make(value){
        const possibleMakes = ["Honda", "Toyota", "Nissan"];

        if (possibleMakes.includes(value)) {
            this._make = value;
        } else {
            throw Error(value + " is not a valid make.");
        }
    }

    get description() {
        return this._year + " " + this._make + " " + this._model;
    }
}

let myCar = new Vehicle("Nissan", "Rogue", 2017);

myCar.make = "Volvo";
*/