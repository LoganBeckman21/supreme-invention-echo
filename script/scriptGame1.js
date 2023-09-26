$( document ).ready(function() {
   
    $('#dogeMemePic').click( 
      function(
      ){
        //code goes here
        console.log("position: ", $('#dogeMemePic').position() );
      }
    ); 
    
   
    $( '#dogeMemePic' ).draggable({
        stop: function() {
          if(  $('#dogeMemePic').position().left > 500){
          //  alert("you haswss wowzazzz ");
            
             $('#dogeMemePic').attr('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvOPNj6Q3j7dnKzkwHUnOFoQiQXDLVSAOjg&usqp=CAU');
      }
       
          else if( $('#dogeMemePic').position().left > 300 && $('#dogeMemePic').position().left < 600){
            alert("keep going  ");
          }   
          else {
            alert("Wow!!!");
          }
      }
      
      
    
      
      
    });
    
    
    
    
    
  });