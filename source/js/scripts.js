  var togglesArray = new Array(
    "img/icon-menu-burger.svg",
    "img/icon-menu-cross.svg"
  );
  var burgers = new Array(
    "img/icon-menu-burger.svg",
    "img/icon-menu-burger-pink.svg",
    "img/icon-menu-burger-opacity.svg"
  );
  var crosses = new Array(
    "img/icon-menu-cross.svg",
    "img/icon-menu-cross-pink.svg",
    "img/icon-menu-cross-opacity.svg"
  );

  var currentToggle = 0;
  var toggle = document.getElementById("menuToggle");
  var mainNav = document.querySelector(".site-list");
  var pageHeader = document.querySelector(".page-header");
  var bgHeaderIndexPagePosition = document.querySelector(".page-header--index");
  var bgHeaderChildPagePosition = document.querySelector(".page-header__caption");
  var toggleEnable = document.querySelector(".page-header__main-nav-toggle");
  var pageHeaderLogoContainer = document.querySelector(".page-header__logo-container");
  var fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

  logoPinkRoseMobile = new Image();
  logoPinkRoseMobile.src = "img/logo-pink-rose-mobile.svg";
  logoPinkWhiteMobileOpacity = new Image();
  logoPinkWhiteMobileOpacity.src = "img/logo-pink-white-mobile-opacity.svg";
  burgerPink = new Image();
  burgerPink.src = "img/icon-menu-burger-pink.svg";
  burgerOpacity = new Image();
  burgerOpacity.src = "img/icon-menu-burger-opacity.svg";
  crossPink = new Image();
  crossPink.src = "img/icon-menu-cross-pink.svg";
  crossOpacity = new Image();
  crossOpacity.src = "img/icon-menu-cross-opacity.svg";

  pageHeader.classList.add("page-header--bg-transparent");
  toggleEnable.classList.add("page-header__main-nav-toggle--show-content");
  mainNav.classList.add("main-nav__list--disable");
  pageHeader.classList.add("page-header__strip");
  pageHeaderLogoContainer.classList.add("page-header__logo-container--disable-border");

  window.onload = function() {
    if (fileName === "index.html") {
      bgHeaderIndexPagePosition.classList.add("page-header--index-position");
    }

    toggle.addEventListener("click", function(evt) {
      evt.preventDefault();
      mainNav.classList.toggle("main-nav__list--show");
      mainNav.classList.toggle("main-nav__list--position");
      console.log(mainNav);
      currentToggle++;
      if (currentToggle == togglesArray.length) {
        currentToggle = 0;
      }
      document.getElementById("menuToggle").setAttribute("src", togglesArray[currentToggle]);
    });

    toggle.addEventListener("mouseover", function(evt) {
      evt.preventDefault();
      if (currentToggle === 0) {
        document.getElementById("menuToggle").setAttribute("src", burgers[1]);
      } else {
        document.getElementById("menuToggle").setAttribute("src", crosses[1]);
      }
    });

    toggle.addEventListener("mouseout", function(evt) {
      evt.preventDefault();
      if (currentToggle === 0) {
        document.getElementById("menuToggle").setAttribute("src", burgers[0]);
      } else {
        document.getElementById("menuToggle").setAttribute("src", crosses[0]);
      }
    });

    toggle.addEventListener("mousedown", function(evt) {
      evt.preventDefault();
      if (currentToggle === 0) {
        document.getElementById("menuToggle").setAttribute("src", burgers[2]);
      } else {
        document.getElementById("menuToggle").setAttribute("src", crosses[2]);
      }
    });
  };
