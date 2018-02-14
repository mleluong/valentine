// console.log
console.log('reading js');

// use strict parsing
'use strict';

// declare and populate array
var hearts = ['images/honey.png', 'images/adore.png', 'images/lucky.png', 'images/ily.png', 'images/sweetheart.png', 'images/love.png', 'images/happy.png', 'images/sweetpotato.png', 'images/greencard.png', 'images/inlove.png', 'images/mish.png', 'images/fav.png']

//declare variable for candies
var candy = document.getElementById('candy');

//declare variable for box
var box = document.getElementById('box');

// capture img
var img=document.getElementsByTagName('img')[0];

//initialize button
var button=document.getElementById('button');

//click button to change img of candy hearts
button.addEventListener('click', function(){
  //hide box show candy
  box.style.display="none";
  img.style.display="block";
  //click button for random candies
  var i = Math.floor(Math.random()*hearts.length);
  console.log(i);
  img.src=hearts[i];
  //change msg to "more!"
  button.innerHTML="More!";
})

//count how many candies Eaten
//declare variable for clicksCount
var clicksCount=0;

//declare variable for p
var p = document.getElementsByTagName('p')[0];

//click button to update candies eaten
button.addEventListener('click', updateClicks);
function updateClicks(){
 console.log(clicksCount);
 clicksCount++;
 p.innerHTML= "Candies Eaten: "+ clicksCount;
}
