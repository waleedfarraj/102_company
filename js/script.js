"use strict";

function getTime(){
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening, ';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, ';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } 
 
return greeting ;

}
function getName(){
var name = prompt("What is your name?");
return name
}
function hala(){
  var welcome;
  var confirmation = prompt("Did you visit jordan before ?,please answer yes or no?");
 if (confirmation === "yes" )
 {welcome= "Welcome back!"; 
} else if (confirmation === "no") { 
    welcome =" Welcome ,you would love it here i am sure "
} else {
    welcome ="Even if you can't answer a yes or no question you are welcome here  <3 "
}
return welcome;
}

function vaildation(){
  var usrinput = "";
  while ( usrinput !== "yes" ){
    usrinput = prompt("are you excited to visit jordan ?you can only answer yes !")
//  if (usrinput == "yes")
   // break; 
    //else usrinput = prompt("are you excited to visit jordan ?you can only answer yes !")
  }
return usrinput;
}
var item
function k()
 {
  var kay = prompt("how many plates of knafah do you want ?write it in number form")
   item ='<img src="https://1.bp.blogspot.com/-twYs6GQdKdQ/Vh8API1rZ8I/AAAAAAAAAtU/OSQI-p1zChM/s1600/Kunafa-traditional-arabic-dessert-cuisine-everyday-arabic-recipe.jpg">';
 

  for ( var i=1 ; i<kay ; i=i+1) {
item = item +'<img src="https://1.bp.blogspot.com/-twYs6GQdKdQ/Vh8API1rZ8I/AAAAAAAAAtU/OSQI-p1zChM/s1600/Kunafa-traditional-arabic-dessert-cuisine-everyday-arabic-recipe.jpg">';
  }
  console.log (item)
  return item;
}