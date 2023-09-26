$( document ).ready(function() {
    console.log( "ready!" );


$('#btnUserName').click(function() {
    console.log("button clicked");
    // var x;
    // var x = "";
    // var y =8; 
    // var z = TRUE;
    
    
    let fname = $('#fname').val()
    let length = fname.length
    
    console.log(fname);
    // $('#fname').val()
    
    let greeting;
    greeting = "Your name is " + length +" character long!"
    
    $('#something').text(greeting)
  });
});