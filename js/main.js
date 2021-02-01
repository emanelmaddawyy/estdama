$(document).ready(function(){
    // $("#searchBtn").on("click",function(e){
    //     e.preventDefault();
    //     $("#inputSearch").toggleClass("inputSearch");
    // })
    $('.carousel').carousel({
    })
   
    const carousel = $("#carousel").flipster({
      style: 'carousel',
      spacing: -0.5,
      nav: 'after',
      buttons: false,
      keyboard: true,
      autoplay: true,
      scrollwheel: true
    });
  
    $('.flipster__nav__link').html('');
})