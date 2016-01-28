//var previousSize = "big";

//$(document).ready(function () {

//    if ($(".contact__container").css("width") == "80%") {
//        previousSize = "small";
//    } else {
//        previousSize = "big";
//    }

//    $(window).resize(checkSize);
//});

//function checkSize() {

//    if ($(".contact__container").css("width") == "80%") {
        
//        //Swap description with input field if previous size is big
//        if (previousSize == "big") {
//            var description = $(".form_description");
//            var email = $(".form_email");

//            $(".form_description").remove();
//            $(".form_email").remove();

//            $(".form_name").after(description);
//            $(".form_name").after(email);
//        }
//    } else {
//        //Swap them back
//        if (previousSize == "small") {
//            var description = $(".form_description");
//            var email = $(".form_email");

//            $(".form_description").remove();
//            $(".form_email").remove();

//            $(".form_name").after(email);
//            $(".form_name").after(description);
//        }
//    }
//}