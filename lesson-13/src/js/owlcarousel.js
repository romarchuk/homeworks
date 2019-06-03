$(document).ready(function(){


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<img src='img/portfolio/left-arrow.png'>", "<img src='img/portfolio/right-arrow.png'>"],
    responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1200:{
          items:3
            
        },
    },
  });
  
});


