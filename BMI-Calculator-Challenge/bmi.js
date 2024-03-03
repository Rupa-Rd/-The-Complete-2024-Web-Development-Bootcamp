function bmiCalculator(weight,height){

    var bmi = weight / (height * height);
    return bmi;
}

var person1 = bmiCalculator(65,1.8);

console.log(Math.round(person1));