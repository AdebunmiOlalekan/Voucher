var div =  document.getElementById("sec1");
var div2 = document.getElementById("sec2");
var div3 = document.getElementById("sec3");
var div4 = document.getElementById("sec4");
var div5 = document.getElementById("sec5");

alert('Click the button below to Generate your code')

 function suBmit(){
 div.innerHTML = (Math.round(Math.random()*10000000000000000));
 div2.innerHTML = (Math.round(Math.random()*10000000000000000));
 div3.innerHTML = (Math.round(Math.random()*10000000000000000));
 div4.innerHTML = (Math.round(Math.random()*10000000000000000));
 div5.innerHTML = (Math.round(Math.random()*10000000000000000));
   console.log("gooo");

}



