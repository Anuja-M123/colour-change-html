function set(){
    setTimeout((()=> {
        document.body.style.background = "blue"
        document.getElementById("h1").innerHTML= "ON THE <br>FLOOR BABY";
    }),400);
    setTimeout((()=> {
        document.body.style.background = "green"
        document.getElementById("h1").innerHTML= "HIT IT <br>HARD BABY";
    }),800);
    setTimeout((()=> {
        document.body.style.background="red"
        document.getElementById("h1").innerHTML= "ROCK THE<br> party baby";
    }),1200);
    setTimeout((()=> {
        document.body.style.background = "brown"
        document.getElementById("h1").innerHTML= "PATTOOLENGIL PODI";
    }),1600);
}
  
setInterval(set,900)