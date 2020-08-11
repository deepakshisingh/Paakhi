$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#btnScrollTop").fadeIn();
    } else {
      $("#btnScrollTop").fadeOut();
    }
  });

  $("#btnScrollTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 800);
  });
});
