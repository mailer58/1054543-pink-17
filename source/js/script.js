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
  var bgDownload = document.getElementById("download");
  var bgHeaderChildPagePosition = document.querySelector(".page-header__caption");
  var toggleEnable = document.querySelector(".page-header__main-nav-toggle");
  var pageHeaderLogoContainer = document.querySelector(".page-header__logo-container");
  var fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
  var downloadWrapper = document.querySelector(".download__wrapper");
  var tablet = window.matchMedia("(min-width: 660px)");
  var desktop = window.matchMedia("(min-width: 1200px)");
  var mobile = window.matchMedia("(min-width: 320px)");
  var pageMain = document.querySelector(".page-main--bg-index");
  var pageHeaderWrapper = document.querySelector(".page-header__wrapper-enable");

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

  function mediaTablet(tablet) {
  if (tablet.matches) { // If media query matches
    downloadWrapper.classList.add("download__wrapper--tablet");
    document.body.style.backgroundColor = "yellow";
  }
};

  function mediaMobile(mobile) {
  if (mobile.matches) { // If media query matches
    downloadWrapper.classList.remove("download__wrapper--tablet");
    document.body.style.backgroundColor = "pink";
  }
};




  toggleEnable.classList.add("page-header__main-nav-toggle--show-content");
  mainNav.classList.add("main-nav__list--disable");
  pageHeader.classList.add("page-header__strip");
  pageHeaderLogoContainer.classList.add("page-header__logo-container-disable");
  pageHeader.classList.remove("page-header--bg-index-desktop");

  pageHeaderLogoContainer.classList.add("page-header__logo-container--disable-border");


  window.onload = function() {
    if (fileName === "index.html") {
     downloadWrapper.classList.add("download__wrapper--up");
     pageMain.classList.remove("page-main--bg-index");
     pageHeader.classList.add("page-header--bg-index");
     pageHeaderLogoContainer.classList.add("page-header__logo-container--slogan");

   } else {
      pageHeader.classList.add("page-header--bg-strip");
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
