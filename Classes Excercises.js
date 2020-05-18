// Q1 and Q2
// class Pet{
//     givenName;
//     age;
//     ownerId;
// }

//Q3
// class Pet{
//     constructor(givenName, age, ownerId){
//     this.givenName = givenName;
//     this.age = age;
//     this.ownerId = ownerId;
// }
// }
//Q4 and Q5
class Owner {
    constructor(givenName, familyName, ownerId) {
        this.givenName = givenName;
        this.familyName = familyName;
        this.ownerId = ownerId;
    }
    getFullName() {
        return `${this.givenName} ${this.familyName}`
    }

}
// let me = new Owner("George", "Knapasjo", 21)
// console.log(me.getFullName())

// class Pet {
//     constructor(givenName, age, ownerId) {
//         this.givenName = givenName;
//         this.age = age;
//         this.ownerId = ownerId;
//     } static findOwnerById(myPet, owners) {
//         let findOwner;
//         for (let i = 0; i < owners.length; i++) {
//             let owner = owners[i]
//             if (owner.ownerId === myPet.ownerId){
//             findOwner = owner;
//             break}
//         } if(!findOwner){
//             return "Error, owner not found"
//         }
//         return findOwner.getFullName()
   
// }}



// let owners = [
//     new Owner("jeff", "jeffington", 21),
//     new Owner("brad", "bradly", 40),
//     new Owner("chad", "chadington", 29)]


// let myPet = new Pet("rex", 6, 29)


// let people = owners.map(Pet.findOwnerById(myPet, owners))
// console.log(people)
// console.log(Pet.findOwnerById(myPet, owners))

class Pet {
    constructor(givenName, age, ownerId) {
        this.givenName = givenName;
        this.age = age;
        this.ownerId = ownerId;
    } static findOwnerById(myPet, owners) {
        let foundOwner = owners.find(function(owner){
            return owner.ownerId == myPet.ownerId
        });
        if(!foundOwner){
            console.log("Error, owner not found")
        }
        return foundOwner.getFullName();
   
}}

let owners = [
    new Owner("jeff", "jeffington", 21),
    new Owner("brad", "bradly", 40),
    new Owner("chad", "chadington", 29)]


let myPet = new Pet("rex", 6, 29)

console.log(Pet.findOwnerById(myPet, owners))


class Square {
    constructor(sideLength){
        this.sideLength = sideLength
    }
}

