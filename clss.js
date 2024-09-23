// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():


// Syntax
// class ClassName {
//   constructor() { ... }
// }

// A JavaScript class is not an object.

// It is a template for JavaScript objects.


class ClassName {
  constructor(firstName,lastName,location,eduction,age) { 

    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.eduction = eduction;
    this.age = age
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }
    


   }
}


const newPerson1 = new ClassName("Mohmmad",'Mausm','Dhaka','Bsc in EEE',27)
const newPerson2 = new ClassName("Mohmmad",'Mausm','Dhaka','Bsc in EEE',27)

console.log(newPerson1)
console.log(newPerson2)



class Year{
  constructor(name,location,year){
    this.name = name;
    this.location = location;
    this.year = year;
  }

  birth_yeay(){
    let date = new Date()
    return date.getFullYear()-this.year
  }

  addmistion(educations){
    if(this.birth_yeay() < 18){
      console.log(`sorry!You are not allowed because your age is ${this.birth_yeay()} and eductions is ${educations}`)
    }
    
    else if (this.birth_yeay() >= 18 && this.birth_yeay() <= 30){
      console.log(`Congratulation! You are allowed because your age is ${this.birth_yeay()} and eduction is ${educations}`)
    }

    else{
      console.log(`You are not allowed because your age is ${this.birth_yeay()} and eduction is ${educations}`)
    }




  }
  
}



const newYear = new Year("Mohmmad masum",'Dhaka',1997)
newYear.addmistion('Bsc in EEE')




