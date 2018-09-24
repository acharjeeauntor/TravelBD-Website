$('.slider').slick({
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1
});

$(document).ready(function(){
  
    
var subscribe = $('sub').click(function(){
    
});
    
});


///// Scroll up/down Button/// start////

$(document).ready(function(){
    var offset = 600;
    var duration = 850;

$(window).scroll(function(){
   if($(this).scrollTop()> offset){
         $('.far').fadeIn();
      }else{
        $('.far').fadeOut();
      }
});

     $('.far').click(function(){
            $(' html,body').animate({scrollTop:0}, duration);

                  });
    
    
});

///// Scroll up/down Button///// end //

$(document).ready(function(){
   
    var fname =$('#fname').val();
   var lname =$('#lname').val();
   var phone =$('#pnum').val();
   var email =$('#email').val();
   var massege =$('#massege').val();
   

    $('#note').hide();
   $('#sub').click(function(){
   var fname =$('#fname').val();
   var lname =$('#lname').val();
   var phone =$('#pnum').val();
   var email =$('#email').val();
   var massege =$('#massege').val()
 
      if(fname=='' || lname=='' || email==''){
           $('#note').html('please fill up all information.');
      }
      else{
        
         $('#note').html('Thank You for Send Messege. We will contact with you as early as possible.'); 
      }
     
     $('#note').show();
      
      $('#fname').html(' ');
       $('#lname').html(' ');
       $('#pnum').html(' ');
       $('#email').html(' ');
       $('#massege').html(' ');
      
      
   });
});



























