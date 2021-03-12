//pagescroll start
$(document).ready(function () {
  $('.scrollTop').click(function (e) {

    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({ scrollTop: targetPos }, 1000);
  });
  
  //滾動高度
  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    console.log(scrollPos, windowHeight);


    $('.scrollTop').each(function () {
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      if (targetPos <= scrollPos && (targetPos + targetHeight) > scrollPos) {
        $('.scrollTop').removeClass('active')
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
      });   
  })
});

//sidebar
const menuIcon = document.querySelector
  ('.nav_bar');
  const navbar = document.querySelector('.nav_bar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
  })
