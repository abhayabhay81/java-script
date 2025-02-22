//factory function 

// function personmaker(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log("sey hello")
//         }
//     }
//     return person
// }

// let p1 = personmaker("abhay",1234)
// let p2 = personmaker("abhay",1234)

// new opertor

// function Person(name, age){
//     this.name = name;
//     this.age = age
// }

// Person.prototype.talk = function () {
//     console.log(`my name is abhay ${this.name} and age is ${this.age}`)
// }

// let p1 = new Person("abhay",123)
// let p2 = new Person("kumar",54)

// p1.talk()
// p2.talk()

// // in this function this case satisfied
// // p1.talk === p2.talk

// class
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    talk(){
        console.log(`my name is abhay ${this.name} and age is ${this.age}`)
    }
}

let p1 = new Person("abhay",123)
p1.talk()