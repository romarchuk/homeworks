$(document).ready(function() {
  $('#offer-form').validate({
    rules: {
      mobile: {
        required: true
      },
      user: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
    
    },
    messages: {
      mobile: {
        required: "Заполните поле"
      },
      user: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Минимальное количество символов: 2"),
        maxlength: jQuery.validator.format("Вводите не более: {0} символов!")
      },
      
    },    
    
    focusInvalid: true,
    errorClass: "invalid",
 
  });

});


