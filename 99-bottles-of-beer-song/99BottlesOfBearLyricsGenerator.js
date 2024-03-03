function lyricsGenerator(){
    var nOfBottles = 99;
    while(nOfBottles != 0){
        

        if(nOfBottles == 1){
            console.log(nOfBottles+" bottle of beer on the wall, "+nOfBottles+" bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.\n\n");
            break;
        }
        console.log(nOfBottles+" bottles of beer on the wall, "+nOfBottles+" bottles of beer.");
        
        nOfBottles --;
        console.log("Take one down and pass it around, " +nOfBottles+" bottles of beer on the wall.\n\n");
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

}

lyricsGenerator();