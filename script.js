

var news = document.getElementById('news'); 
var profile = document.getElementById('profile'); 
var portrait = document.getElementById('portrait'); 
var footer = document.getElementById('footer'); 


var min = 0;
var max = 255;


window.addEventListener('load',colorPickerNews,false);
window.addEventListener('load',colorPickerProfile,false);
window.addEventListener('load',colorPickerPortrait,false);
window.addEventListener('load',colorPickerFooter,false);


function colorPickerNews(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    news.style.background  = 'rgb('+colorArray+')';
  }
  };
   
function colorPickerProfile(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    profile.style.background  = 'rgb('+colorArray+')';
  }
  };

  
  function colorPickerPortrait(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    portrait.style.background  = 'rgb('+colorArray+')';
  }
  };

function colorPickerFooter(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
    footer.style.background  = 'rgb('+colorArray+')';
  }
  };
