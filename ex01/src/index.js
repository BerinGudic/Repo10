var myPet = {
    species: "pitbull",
    name: "obi-wan",
    legs: 4,
    friends: ["max", "rex"]
};

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = {myPet, myFunction};