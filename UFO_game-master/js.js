//Да простит меня святая корова!
$(document).ready(function(){
    var pos=55;
    var point=10;
$('#start').one("click",function(){
  for(i=0; i<100;i++){
  $('.game-block').append('<div class="block"></div>')    
  }
    $('.block').eq(55).addClass('hero');
    setInterval(creatEat,6000);
    setInterval(creatEnemy,6100);
    
     
    
})
$('body').keydown(function(e){
//$(.output).html(e.which);
    if(e.which==39){//right
    $('.block').eq(pos).removeClass('hero');
        pos=pos+1;
        if(pos%10==0){
        pos=pos-10;
        }
    }
    
     if(e.which==37){//left
    $('.block').eq(pos).removeClass('hero');
        pos=pos-1;
          if(pos%10==0){
        pos=pos+9;
        }
    }
    
         if(e.which==38){//down
    $('.block').eq(pos).removeClass('hero');
        pos=pos-10;
          if(pos<0){
        pos=pos+100;
        }
    }
    
         if(e.which==40){//up
    $('.block').eq(pos).removeClass('hero');
        pos=pos+10;
          if(pos>=100){
        pos=pos-100;
        }
    }
    
    
    $('.block').eq(pos).addClass('hero')
    
    if($('.block').eq(pos).hasClass('eat')){
    $('.block').eq(pos).removeClass('eat')
    point=point+10;
    $('output').html(point);
    }
    

    point--;
    
    
    $('output').html(point);
    if(point<=0){
    $('.block').eq(pos).removeClass('hero');
        $('output').html("Game over");
    }
    if(point>=500){
    $('.block').eq(pos).removeClass('hero');
        $('output').html("You have won!");
    }
    if($('.block').eq(pos).hasClass('enemy')){
    alert("Cow!");
     $('.block').eq(pos).removeClass('hero');
        $('output').html("Game over");
        point=-15;
    }
})

})
    function creatEat(){
        for(i=0;i<3;i++){
    $('.block').eq(random()).addClass('eat')
        }
}
    function creatEnemy(){
        for(c=0;c<1;c++){
    $('.block').eq(random()).addClass('enemy')
        }
} 


function random(){
	return Math.floor(100*Math.random())
}

