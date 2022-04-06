var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
function myFunction(property, value) {
    lion[property] = value;
    return lion;
}

console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;