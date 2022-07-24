$(document).ready(function () {
  var list = $(".partners__ul li");
  var numToShow = 8;
  var button = $(".partners__button__a");
  var numInList = list.length;
  var isShowing = true;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    var showing = list.filter(":visible").length;
    if (isShowing) {
      list.slice(showing - 1, showing + numToShow).fadeIn(100, onFadeComplete);
    } else {
      list.slice(showing - numToShow, numInList).fadeOut(100, onFadeComplete);
    }
  });

  function onFadeComplete() {
    var nowShowing = list.filter(":visible").length;

    if (nowShowing == numInList && isShowing) {
      isShowing = false;
      button.text("Show less");
    } else if (isShowing) {
      button.text("Show more");
    }

    if (nowShowing == numToShow) {
      button.text("Show more");
      isShowing = true;
    }
  }
});

// ==========================

$(document).ready(function () {
  var list = $(".kuyakata__ul li");
  var numToShow = 8;
  var button = $(".kuyakata__button__a");
  var numInList = list.length;
  var isShowing = true;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    var showing = list.filter(":visible").length;
    if (isShowing) {
      list.slice(showing - 1, showing + numToShow).fadeIn(100, onFadeComplete);
    } else {
      list.slice(showing - numToShow, numInList).fadeOut(100, onFadeComplete);
    }
  });

  function onFadeComplete() {
    var nowShowing = list.filter(":visible").length;

    if (nowShowing == numInList && isShowing) {
      isShowing = false;
      button.text("SHOW LESS");
    } else if (isShowing) {
      button.text("SHOW MORE");
    }

    if (nowShowing == numToShow) {
      button.text("SHOW MORE");
      isShowing = true;
    }
  }
});
// ======================Tab=================
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// ======================Tab=================

// ================HomeNav-scroll==============
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// ===========home menu hide  show===========
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  console.log("button Clicked");
}
// Add active class to the current button (highlight it)
$(document).ready(function () {
  $("ul li a").click(function () {
    $("li a").removeClass("active");
    $(this).addClass("active");
  });
});
