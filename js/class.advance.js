// Class Inheritance
// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:


class Car {
    constructor(brand,year){
        this.brand = brand;
        this.year = year
    }

    displaybrand(){
        return `I have ${this.brand} brand of car which is ${this.year}`;
    }
}



class Model extends Car{
    constructor(brand,year,modelName){
        super(brand,year)
        this.modelName = modelName
    }

    show(){
        return `This is ${this.modelName}  is favourite car`;
    }
}


let myCar = new Model('Toyato',2020,'NewModel20')
console.log(myCar.displaybrand())
console.log(myCar.show())
console.log(myCar.modelName)
console.log(myCar.brand)


// the super() method refere to the parent class
// this super() call the constructor of parent class


// use of inheritance of class

// it is reusabe and and the parent class can used more and more by other classes
//Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.



// static methods in class


//when need a particular object for particul work, not to create new object and it will be created outside of the class then the static methods will be needed


// class NewCar{

//     constructor(brand,year){
//         this.brand = brand;
//         this.year = year;
//     }

//     static showBrand(x){
//         return `I have ${x.brand} brand of car`;
//     }
    
// }

// let myNewCar = new NewCar('Toyato',2020);

// // i wanna create a object with new syntax and only use for creating new objects using the parent class

// console.log(NewCar.showBrand());

// console.log(NewCar.showBrand(myNewCar));



class StaticClass{

    langugae = 'banagla'

    constructor(name,location){

        this.name = name;
        this.location = location;

    }

    static mydetails(){
        return `My name is ${this.name} and i live in ${this.location}`;
    }

    show(){
        return `I am static class and my name is ${this.name} and i live in ${this.location}`;
    }
}

let masum = new StaticClass('Mohmmad masum','Gazipur');

console.log(masum.show())

// show an error message can not access
// console.log(StaticClass.show())
// get the undefined value
console.log(StaticClass.langugae)
// but can this using static

console.log(StaticClass.mydetails())
console.log(StaticClass.name)

document.getElementById('dent4').innerHTML = StaticClass.mydetails()