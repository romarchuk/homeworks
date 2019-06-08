$(document).ready(function() {
  $('#brif-form').validate({
    rules: {
      phone: {
        required: true
      },
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      phone: {
        required: "Заполните поле"
      },
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Минимальное количество символов: 2"),
        maxlength: jQuery.validator.format("Вводите не более: {0} символов!")
      },
      email: {
        required: "Заполните поле",
        email: jQuery.validator.format("Введите корректный email")
    },
      
    },



    


      focusInvalid: true,
      errorClass: "invalid",
      
      

  });

  
  
    


});


