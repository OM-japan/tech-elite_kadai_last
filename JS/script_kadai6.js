
  $("body").on("click", ".readmore, .readless", function() {
      // $(".hide_speaker").slideToggle();
      // $(".hide_speaker").css('display', 'contents');
      $(".hide_speaker, .readmore, .readless").toggleClass("open");
      $(".transparent").toggleClass("active");
  });
