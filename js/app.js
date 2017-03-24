//
////Some Code Borrowed from JQuery Basics


//1. hide spans/prompts: #empty and #no-match
$("form span").hide();

//2. show span #empty on hover in email input
$("#email").hover(
  function() {
    $("#empty").show();
  }, function() {
    $("#empty").hide();
  }
);

//3. show span #no-match on hover in confirm-email input
$("#confirm-email").hover(
  function() {
    $("#no-match").show();
  }, function() {
    $("#no-match").hide();
  }
);

//4. #submit input brings up alert dialogue box.
$( "#submit" ).click(function() {
  alert( "Thanks for your message! We'll get back with you soon." );
});
