function bmiCalculator(weight,height){

    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    if (bmi > 24.9){
        return "Your BMI is " +bmi+", so you are overweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return "Your BMI is "+bmi+", so you are a normal weight";
    }else{
        return "Your BMI is "+bmi+", so you are underweight";
    }
}

var person1 = bmiCalculator(65,1.8);

console.log(person1);