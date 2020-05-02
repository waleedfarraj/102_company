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
