$(".navbar-toggler").on("click", function () {
  $(".list-group").toggleClass("show");
});

$("#login").on("click", function () {
  $(".black-bg").addClass("show-modal");
  $(".white-bg").addClass("show-modal");
});
$("#close").on("click", function () {
  $(".black-bg").removeClass("show-modal");
  $(".white-bg").removeClass("show-modal");
});

$("form").on("submit", function (e) {
  var email = document.getElementById("id").value;
  var PW = document.getElementById("password").value;
  if (email === "" || PW === "") {
    if (email === "" && document.PW === "") {
      alert("아이디와 비밀번호를 입력하세요.");
    } else if (email === "") {
      alert("아이디를 입력하세요.");
    } else if (PW === "") {
      alert("비밀번호를 입력하세요.");
    }
    e.preventDefault();
  } else if (PW.length < 6) {
    alert("비밀번호를 6자리 이상 입력하세요.");
    e.preventDefault();
  } else if (PW.length >= 6 && /[A-Z]/.test(PW) === false) {
    alert("비밀번호에는 대문자가 들어가야 합니다.");
    e.preventDefault();
  } else if (/\S+@\S+\.\S+/.test(email) === false) {
    alert("아이디는 이메일형식으로 적어주세요");
    e.preventDefault();
  }
});

var count = 0;
$(".badge").on("click", function () {
  count += 1;
  if (count % 2 != 0) {
    $(".badge").html("Light 🔄");
    $(".default").toggleClass("default undefault");
    $(".navbar-light").toggleClass("navbar-light navbar-dark");
    $(".bg-light").toggleClass("bg-light bg-dark");
  } else {
    $(".badge").html("Dark 🔄");
    $(".undefault").toggleClass("undefault default");
    $(".navbar-dark").toggleClass("navbar-dark navbar-light");
    $(".bg-dark").toggleClass("bg-dark bg-light");
  }
});

const countdown = setInterval(timer, 1000);
var count = 5;
function timer() {
  if (count > 0) {
    $("#time").html(count);
    count--;
  } else {
    clearInterval(countdown);
    $(".alert").hide();
  }
}
$(".slide-1").on("click", function () {
  $(".slide-container").css("transform", "translateX(0vw)");
});
$(".slide-2").on("click", function () {
  $(".slide-container").css("transform", "translateX(-100vw)");
});
$(".slide-3").on("click", function () {
  $(".slide-container").css("transform", "translateX(-200vw)");
});
var photo = 0;
if (photo <= 2) {
  $(".next").on("click", function () {
    photo++;
    if (photo > 2) {
      photo = 0;
    }
    $(".slide-container").css("transform", "translateX(-" + photo + "00vw)");
  });
}

var 시작좌표 = 0;
var 누름 = false;
$(".slide-box")
  .eq(0)
  .on("mousedown", function (e) {
    console.log("누름");
    시작좌표 = e.clientX;
    if (누름 == false) {
      누름 = true;
    }
  });

$(".slide-box")
  .eq(0)
  .on("mousemove", function (e) {
    if (누름 == true) {
      $(".slide-container").css(
        "transform",
        `translateX(${e.clientX - 시작좌표}px)`
      );
    }
  });

$(".slide-box")
  .eq(0)
  .on("mouseup", function (e) {
    console.log("누름");
    if (누름 == true) {
      누름 = false;
    }
    if (e.clientX - 시작좌표 < -100) {
      $(".slide-container")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
    } else {
      $(".slide-container")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(0vw)");
    }
    setTimeout(() => {
      $(".slide-container").css("transition", "none");
    }, 500);
  });

  $(".slide-box")
  .eq(0)
  .on("touchstart", function (e) {
    console.log("누름");
    시작좌표 = e.touches[0].clientX;
    if (누름 == false) {
      누름 = true;
    }
  });

$(".slide-box")
  .eq(0)
  .on("touchmove", function (e) {
    if (누름 == true) {
      $(".slide-container").css(
        "transform",
        `translateX(${e.touches[0] - 시작좌표}px)`
      );
    }
  });

$(".slide-box")
  .eq(0)
  .on("touchend", function (e) {
    console.log("누름");
    if (누름 == true) {
      누름 = false;
    }
    if (e.changedTouches[0].clientX- 시작좌표 < -100) {
      $(".slide-container")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(-100vw)");
    } else {
      $(".slide-container")
        .css("transition", "all 0.5s")
        .css("transform", "translateX(0vw)");
    }
    setTimeout(() => {
      $(".slide-container").css("transition", "none");
    }, 500);
  });