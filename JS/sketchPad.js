$(document).ready(function(){

var num=prompt("How many grid do you want");


makeGrid(num);
$('.pad').hover(function(){
   $(this).css({"background-color":"red"});
});

function makeGrid(num){

for (i=0;i<num*num;i++)
  {
    $('.contain16').append("<div class=pad></div>");
  }
  makeSquare();
}

function makeSquare(){
  var square = 800/num;
$('.pad').css('height',square+'px');
$('.pad').css('width',square+'px');
}

$('.clear').click(function(){
  $('.pad').css({"background-color":"white"});
});

$('.submit').click(function(){

  makeGrid();

});


});/*last document ready bracket*/
