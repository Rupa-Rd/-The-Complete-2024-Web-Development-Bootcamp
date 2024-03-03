function whosPaying(names){
    var noOfPersons = names.length;
    var personPosition = Math.floor(Math.random() * noOfPersons);
    var randomPersonName = names[personPosition];
    return randomPersonName + " is going to buy lunch today!";


}
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(names));