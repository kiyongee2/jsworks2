function throwDice(){
    var rand = Math.floor(Math.random()*6) + 1;
    
    document.getElementById("demo").innerHTML = rand;
}