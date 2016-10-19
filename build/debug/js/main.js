(function() {
  var callbackForm, callbackTextBox, createPointer, headerEffects, initMap, logoEffects, phoneCallback, selectedHeaderEffect, selectedLogoEffect;

  createPointer = function(map) {
    var mapPointer;
    mapPointer = new ymaps.Placemark(map.getCenter(), {}, {
      iconLayout: "default#image",
      iconImageHref: "img/map-pointer.png",
      iconImageSize: [58, 61],
      iconImageOffset: [-58, -61]
    });
    return map.geoObjects.add(mapPointer);
  };

  initMap = function() {
    var map;
    map = new ymaps.Map("map", {
      center: [54.529926, 36.291399],
      zoom: 16,
      controls: []
    });
    return createPointer(map);
  };

  ymaps.ready(initMap);

  emailjs.init("user_oHeyBY4y1Fy53T1946xK5");

  callbackForm = {
    textbox: document.querySelector(".email__input"),
    submit: document.querySelector(".email__submit")
  };

  callbackForm.submit.onclick = function() {
    var contacts, email;
    contacts = callbackForm.textbox.value;
    if (contacts === "") {
      alert("Введите свой номер телефона или адрес электронной почты");
      callbackForm.textbox.focus();
      return;
    }
    email = emailjs.send("mail_ru", "callback", {
      contacts: contacts
    });
    return email.then((function() {
      alert("Ваш запрос успешно отправлен. Мы с Вами свяжемся в ближайшее время");
      return callbackForm.textbox.value = "";
    }), (function() {
      return alert("Во время отправки вашего запроса произошла ошибка. Попробуйте повторить запрос позже");
    }));
  };

  phoneCallback = $(".phone__callback");

  callbackTextBox = $(".email__input");

  phoneCallback.click(function() {
    callbackTextBox.goTo();
    return callbackTextBox.focus();
  });

  $.fn.goTo = function() {
    return $("html, body").animate({
      scrollTop: $(this).offset().top + "px"
    }, 500);
  };

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      return $(".scroll-top").fadeIn();
    } else {
      return $(".scroll-top").fadeOut();
    }
  });

  $(".scroll-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  $("img.client-logo").hover((function() {
    return $(this).addClass("animated pulse");
  }), (function() {
    return $(this).removeClass("animated pulse");
  }));

  logoEffects = ["rubberBand", "shake", "tada", "jello", "bounceIn", "flip"];

  selectedLogoEffect = logoEffects[0];

  $(".logo img").hover((function() {
    selectedLogoEffect = logoEffects[Math.floor(Math.random() * logoEffects.length)];
    return $(this).addClass("animated " + selectedLogoEffect);
  }), (function() {
    return $(this).removeClass("animated " + selectedLogoEffect);
  }));

  headerEffects = ["bounceInDown", "bounceInLeft", "bounceInRight", "fadeInDown", "fadeInLeft", "fadeInRight", "lightSpeedIn", "zoomIn", "rollIn"];

  selectedHeaderEffect = headerEffects[Math.floor(Math.random() * headerEffects.length)];

  $(function() {
    return setTimeout((function() {
      $(".header").css("visibility", "visible");
      return $(".header").addClass("animated " + selectedHeaderEffect);
    }), 500);
  });

}).call(this);
