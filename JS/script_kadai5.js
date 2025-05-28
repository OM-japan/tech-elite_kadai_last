
$("body").on("click" , ".header_title, .header_menu" , function(){// クリックでスクロール移動する
    const scroll_target = $(this).find("a").attr("href");
    const target_id = scroll_target.split("#")[1];
    const scroll_position = $("#" + target_id).offset().top;
    $("html, body").animate({ scrollTop: scroll_position }, 400);
});

$("body").on("click" , ".hamburger" , function(){//ハンバーガーメニューの表示折りたたみ
  $("#hamburger").toggleClass("open");
    $(".header_menu").slideToggle();
});

$("body").on("click" , ".header_list li" , function(){//ハンバーガーメニューの表示折りたたみ
  if($(".header_list").css("display") === "block"){
    $(".header_menu").slideToggle();
    $("#hamburger").toggleClass("open");
  }
});

$(".service_menu li").hover(
    function () {// マウスが乗ったときの処理
      $(this).addClass("active");
    },
    function () {// マウスが離れたときの処理
      const description_target_class = "." + $(this).attr("id");
      if (!$(description_target_class).hasClass("active")) {//service_descriptionのidのクラスがactiveでない場合
        $(this).removeClass("active");
      }
    }
  );

$(".service_menu li").click(function(){//サービス内容をクリックすると説明が表示される
    $(".service_menu li").removeClass("active")
    $(".service_description p").removeClass("active")
    const description_target_class = "." + $(this).attr("id");
    $(description_target_class).addClass("active");
    $(this).addClass("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    // 基本的な設定
    centeredSlides: true, // アクティブなスライドを中央にする
    slidesPerView: 1.1,// 次のスライドを少し見せる
    spaceBetween: 10, // スライド間の距離
    loop: true, // ループさせる
    pagination: {
      el: '.swiper-pagination', // ページネーションの要素
      clickable: true, // クリック可能にする
    },
    navigation: {
      nextEl: '.swiper-button-next', // 次へボタン
      prevEl: '.swiper-button-prev', // 前へボタン
    },
  });
});

$("input[name='tel']").on("input" , function(){
  const value = $("input[name='tel']").val();
  const telregexp = /^0\d{9,10}$/;
  if(value){
    if(!telregexp.test(value)){
      $(".Form-Item-Label-telcheck").addClass("active");
    }else{
      $(".Form-Item-Label-telcheck").removeClass("active");
    }
  }else{
    $(".Form-Item-Label-telcheck").removeClass("active");
  }
})

$("input[name='email']").on("input" , function(){
  const value = $("input[name='email']").val();
  const emailregexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(value){
    if(!emailregexp.test(value)){
      $(".Form-Item-Label-emailcheck").addClass("active");
    }else{
      $(".Form-Item-Label-emailcheck").removeClass("active");
    }
  }else{
    $(".Form-Item-Label-emailcheck").removeClass("active");
  }
})

$("form").on("input" , function(){
  const name_value = $("input[name='name']").val();
  const seat_value = $("select[name='seat']").val();
  const email_value = $("input[name='email']").val();
  if (!$(".Form-Item-Label-telcheck").hasClass("active") &&
      !$(".Form-Item-Label-emailcheck").hasClass("active") &&
     name_value &&
     seat_value &&
     email_value
    ){
    $(".Form-Btn ").addClass("enable");
  }else{
    $(".Form-Btn ").removeClass("enable");
  }
})

$("body").on("click" , "#back" , function(){
  const name_value = $("textarea[name='name']").val();
  const seat_value = $("textarea[name='seat']").val();
  const email_value = $("textarea[name='email']").val();
  const tel_value = $("textarea[name='tel']").val();
  sessionStorage.setItem('name', name_value);
  sessionStorage.setItem('seat', seat_value);
  sessionStorage.setItem('email', email_value);
  sessionStorage.setItem('tel', tel_value);
});

$(function() {
  if (sessionStorage.getItem('name')) {
    const name = sessionStorage.getItem('name');
    const seat = sessionStorage.getItem('seat');
    const email = sessionStorage.getItem('email');
    const tel = sessionStorage.getItem('tel');
    if (name) {
      $("input[name='name']").val(name);
      $("select[name='seat']").val(seat);
      $("input[name='email']").val(email);
      $("input[name='tel']").val(tel);
      sessionStorage.clear(); 
      $(".Form-Btn ").addClass("enable");
    }
  }
});
