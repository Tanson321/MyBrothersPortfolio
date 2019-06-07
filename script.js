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



$('.top-image').ready(function(){
  var images = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg'
  ];
  var randomImages = images[Math.floor(Math.random() * images.length)];

  $('.wrapper-top').css("background-image","url("+randomImages+")");
});

function colorPickerNews(){
    var i = 0;
    var colorArray = [];
   
    while(i<3){
      var num =Math.floor( Math.random() * (max + 1 - min) ) + min ;
      colorArray.push(num);
      i++;
      news.style.background  = 'rgb('+colorArray+')';
    }
      $('.wrapper-news').ready(function(){
        $('.wrapper-news').css("box-shadow","0 0 8px 0px "+news.style.background+"")
  });
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
    $('.wrapper-profile').ready(function(){
      $('.wrapper-profile').css("box-shadow","0 0 8px 0px "+profile.style.background+"")
  })
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
  $('.wrapper-portrait').ready(function(){
    $('.wrapper-portrait').css("box-shadow","0 0 8px 0px "+portrait.style.background+"")
  })
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
  $('#footer').ready(function(){
    $('#footer').css("box-shadow","0 0 8px 0px "+footer.style.background+"")
  })
  };




  
