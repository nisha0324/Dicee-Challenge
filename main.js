var i = Math.floor((Math.random() * 6)) + 1;
var j = Math.floor((Math.random() * 6)) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + i +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + j +".png");

if(i > j){
    document.querySelector("h1").textContent = "🚩 Play 1 Wins!";
}else if(j > i){
    document.querySelector("h1").textContent = "🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").textContent = "Draw!"
}
