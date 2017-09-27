// JavaScript Document

//HEADER ON CLICK FUNCTION
         	$('.home_h1 li:last ').click(function(){
   $('.home_h2 li ').slideDown(500).css("display","block");
   $('.home_h1').hide();
  
 });
 $('.home_h2 li:last').click(function(){
   $('.home_h1').slideDown(500).show();
   $('.home_h2 li').hide();
 
   });
 		  //MENU BUTTON
		
		$('.home_hh p').click(function(){
					$('.button_menu').slideDown(600).show();
    $('.cross').show();
  $('.home_hh p').hide();
						});
	
 	$('.cross').click(function(){
					$('.home_hh p').show();
  $('.cross,.button_menu').hide();
						});
						
		//CSS
		
$('ul').css('list-style', 'none');
$('.D').css('display', 'flex');
$('.HC').css('justify-content', 'center');
$('.HSA').css('justify-content','space-around');
$('.HSB').css('justify-content','space-between');
$('.T-C').css('text-align','center');
$('.FW').css('flex-wrap','wrap');
$('.VC').css('align-items','center');
$('.C-P').css('cursor','pointer');
$('.center').css({"width": "90%","margin": "0 auto"});
				