// var person1Name = prompt("Enter the name of the person1 :");
// var person2Name = prompt("Enter the name of the person2 :");

// Random Percentage
var randomPercentage = Math.floor(Math.random() * 100) + 1;

if (randomPercentage > 70){
    console.log("Love Score: "+randomPercentage+" % You love each other like Knaye loves kanye");
}else if(randomPercentage > 30 && randomPercentage <= 70){
    console.log("Love Score: "+randomPercentage+" %");
}
else{
    console.log("Love Score: "+randomPercentage+" % You go together like oil and water.");
}
