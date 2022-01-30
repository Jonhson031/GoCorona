// Бургер
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $('.header__menu, .header__item').click(function () {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});
// Плавний скрол к блоку
$(document).ready(function () {
  $("a.header__item").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});