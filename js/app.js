//
////Borrowed from JQuery Basics
//
////Problem: hints are shown even when form is valid
////Solution: hide and show them at appropriate times
//var $email = $("#email");
//var $confirmEmail = $("#confirm-email");
//
////Hide hints
//$("form span").hide();
//
////function isPasswordValid() {
////  return $password.val().length > 8;
////}
//
//function areEmailsMatching() {
//  return $email.val()=== $confirmEmail.val();
//}
//
////function passwordEvent (){
////  //find out if password is valid
////  if(isPasswordValid()) {
////    //hide hint if valid
////    $password.next().hide();
//    
//function canSubmit() {
//  return areEmailsMatching();
//}
//    
//  } else {
// //else show hint
//    
//    $email.next().show();
//  }
//}
//
//function confirmEmailEvent() {
//   //find out if email and confirmation match
//  if(areEmailsMatching()) {
//    //hide hint if matched
//  } else {$confirmEmail.next().hide();
//    //else show hint
//    $confirmEmail.next().show();
//  }
//}
//
//function enableSubmitEvent() {
//  $("#submit").prop("disabled", !canSubmit());
//}
//
////when event happens on password input
//$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//  
//
////When event happens on confirmation input
//$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
// 
//enableSubmitEvent();
//


//1. hide spans/prompts: #empty and #no-match
$("#empty #no-match").hide();

//2. show span #empty on hover in email input
$("#confirm-email").hover(
  function() {
    $("#empty").show();
  }, function() {
    $("#empty").hide();
  }
);


//2. check if #email matches #confirm-email if don't match show span #no-match
var $email = $("#email");
var $confirmEmail = $("#confirm-Email");

function areEmailsMatching() {
 $($email).val() !== $($confirmEmail).val();
}
 if (areEmailsMatching){
   $("#no-match").show();
 };

//function areEmailsMatching() {
////  return $email.val()=== $confirmEmail.val();
//3. show span #no-match if emails don't match
//4. hide all spans if emails match
//5. allow form submit







