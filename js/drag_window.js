$(function () {
  $("#content").draggable({
    handle: "div.title"

  });
});
$(function () {
  $(".nxtwdw").draggable();
});

// open window //

$(function () {
  $(".works-open").click(function () {
    $(".works-window").removeClass("close_window");
  });
});
$(function () {
  $(".education-open").click(function () {
    $(".education-window").removeClass("close_window");
  });
});
$(function () {
  $(".research-open").click(function () {
    $(".research-window").removeClass("close_window");
  });
});

// close window //

$(function () {
  $(".close-active-1").click(function () {
    $(".main-window").toggleClass("close_window");
  });
});
$(function () {
  $(".close-active-2").click(function () {
    $(".works-window").toggleClass("close_window");
  });
});
$(function () {
  $(".close-active-3").click(function () {
    $(".education-window").toggleClass("close_window");
  });
});
$(function () {
  $(".close-active-4").click(function () {
    $(".research-window").toggleClass("close_window");
  });
});
