function isEmail(value) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (regex.test(value)) {
    return true;
  } else {
    return false;
  }
}

$(".notify-me").click(function() {
  var userEmail = $("#user-email");
  var errorMsg = $(".error-msg");
  if ((userEmail.val() === "") || (isEmail(userEmail.val()) == false)) {
    userEmail.css("border", "2px solid hsl(354, 100%, 66%)");
    userEmail.addClass("error-display");
    errorMsg.css("display", "inline-block");
    if($("main").width() == 400){
    userEmail.css("margin-bottom","50px");
    $(".illustration-img").css("padding-top", "40px");  
    }
  }
});
