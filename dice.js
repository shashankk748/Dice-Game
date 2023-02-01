
var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var dice1="dice"+random1+".png";
var dice2="dice"+random2+".png";    
document.querySelector("h1").addEventListener("click",roll);
function roll(){
document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);
if(random1>random2){
    document.querySelector("h1").innerText=" Player 1 wins";
}
else if( random2>random1){
    document.querySelector("h1").innerText="Player 2 wins";
}
else {
    document.querySelector("h1").innerText=" Draw";
}
}

