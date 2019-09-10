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
var pageHeaderSlogan = document.querySelector(".page-header__slogan");
var pageHeaderSloganWrapperFloat = document.querySelector(".page-header__slogan-wrapper-float");
var pageHeader = document.querySelector(".page-header");
var bgDownload = document.getElementById("download");
var pageHeaderCaption = document.querySelector(".page-header__caption");
var toggleEnable = document.querySelector(".page-header__main-nav-toggle");
var pageHeaderLogoContainer = document.querySelector(".page-header__logo-container");
var fileName = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
var downloadWrapper = document.querySelector(".download__wrapper");
var tablet = window.matchMedia("(min-width: 660px)");
var desktop = window.matchMedia("(min-width: 960px)");
var mobile = window.matchMedia("(min-width: 320px)");
var pageMain = document.querySelector(".page-main--bg-index");
var pageHeaderWrapper = document.querySelector(".page-header__wrapper-enable");
var menuOpen = false;
//popup window
var winSuccess=document.querySelector(".popup-success");
var winFailure=document.querySelector(".popup-failure");
var form = document.querySelector(".contest__form");
var lastName = document.querySelector("#last-name");
var firstName = document.querySelector("#first-name");
var patronymic = document.querySelector("#patronymic");
var phone = document.querySelector("#phone-number");
var email = document.querySelector("#email");
var story = document.querySelector("#contest__emotions-textarea");
var failureButton = document.querySelector(".popup-failure__button");
var successButton = document.querySelector(".popup-success__button");
var lastNameStorage = "";
var patronymicStorage = "";
var firstNameStorage = "";
var emailStorage = "";
var phoneStorage ="";
var storyStorage = "";
var isStorageSupport  = true;

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

function mediaDesktop(desktop) {
  if (desktop.matches && menuOpen == true) {
    mainNav.classList.remove("main-nav__list--show");
    mainNav.classList.remove("main-nav__list--disable");
  } else if (menuOpen == true){
    mainNav.classList.add("main-nav__list--disable");
    mainNav.classList.add("main-nav__list--show");
  }
};

toggleEnable.classList.add("page-header__main-nav-toggle--show-content");
mainNav.classList.add("main-nav__list--disable");
pageHeader.classList.add("page-header__strip");
pageHeaderLogoContainer.classList.add("page-header__logo-container--disable-opacity");
pageHeaderLogoContainer.classList.add("page-header__logo-container--disable-border");


mediaDesktop(desktop);
desktop.addListener(mediaDesktop);

console.log("Исходно: ");
console.log(mainNav);

window.onload = function() {
  if (fileName === "index.html") {
    downloadWrapper.classList.add("download__wrapper--up");
    pageHeader.classList.add("page-header--bg-index-js");
    pageHeaderSlogan.classList.add("page-header__slogan--js-mod");
    pageHeaderSloganWrapperFloat.classList.add("page-header__slogan-wrapper-float--js-mod");
  } else {
    pageHeaderCaption.classList.add("page-header__caption--js-bg-disable");
    pageHeader.classList.add("page-header--bg-inner-js");
  }

  toggle.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (menuOpen==true) {
      menuOpen = false;
    } else {
      menuOpen = true;
    }
    mainNav.classList.toggle("main-nav__list--show");
    console.log(menuOpen);
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

//form:
if (fileName === "competition.html") {
  try {
    lastNameStorage = localStorage.getItem("lastName");
    firstNameStorage = localStorage.getItem("firstName");
    patronymicStorage = localStorage.getItem("patronymic");
    emailStorage = localStorage.getItem("email");
    phoneStorage = localStorage.getItem("phone");
    storyStorage = localStorage.getItem("story");

  } catch (err) {
    isStorageSupport = false;
  }

  if (firstNameStorage || lastNameStorage || patronymicStorage || emailStorage || phoneStorage || storyStorage){
    firstName.value = firstNameStorage;
    lastName.value = lastNameStorage;
    patronymic.value = patronymicStorage;
    email.value = emailStorage;
    phone.value = phoneStorage;
    story.value = storyStorage;
  }

  lastName.addEventListener("click", function(evt) {
    evt.preventDefault();
    lastName.classList.remove("warning");
  });

  firstName.addEventListener("click", function(evt) {
    evt.preventDefault();
    firstName.classList.remove("warning");
  });

  email.addEventListener("click", function(evt) {
    evt.preventDefault();
    email.classList.remove("warning");
  });

  story.addEventListener("click", function(evt) {
    evt.preventDefault();
    story.classList.remove("warning");
  });


  form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!lastName.value) {
      winFailure.classList.add("popup-failure--show");
      lastName.classList.add("warning");
    }

    if (!firstName.value) {
      winFailure.classList.add("popup-failure--show");
      firstName.classList.add("warning");
    }

    if (!email.value) {
      winFailure.classList.add("popup-failure--show");
      email.classList.add("warning");
    }

    if (!story.value) {
      winFailure.classList.add("popup-failure--show");
      story.classList.add("warning");
    }

    else if (firstName.value && lastName.value && email.value && story.value){
      winSuccess.classList.add("popup-success--show");
      if (isStorageSupport) {
        localStorage.setItem("firstName", firstName.value);
        localStorage.setItem("lastName", lastName.value);
        localStorage.setItem("patronymic", patronymic.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("phone", phone.value);
        localStorage.setItem("story", story.value);
      }
    }
    });

    failureButton.addEventListener("click", function(evt) {
      evt.preventDefault();
      winFailure.classList.remove("popup-failure--show");
    });

    winSuccess.addEventListener("click", function(evt) {
      evt.preventDefault();
      winSuccess.classList.remove("popup-success--show");
    });
  }
};
