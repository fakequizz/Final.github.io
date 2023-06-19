 // Получение ссылки на элемент с помощью селектора
 const myNav = document.getElementById('myNav');

 // Привязка обработчика события mouseover с помощью метода
 myNav.addEventListener('mouseover', function() {
   myNav.classList.add('text-danger');
 });

 // Привязка обработчика события mouseout с помощью метода
 myNav.addEventListener('mouseout', function() {
   myNav.classList.remove('text-danger');
 });

function generatePromoCode() {
    var promoCodeElement = document.getElementById("promoCode");
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var promoCode = "";
    var codeLength = 8;
  
    for (var i = 0; i < codeLength; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      promoCode += characters.charAt(randomIndex);
    }
  
    promoCodeElement.textContent = promoCode;
  }
  function copyPromoCode() {
    var promoCodeElement = document.getElementById("promoCode");
    var promoCode = promoCodeElement.textContent;
  
    navigator.clipboard.writeText(promoCode)
      .then(function() {
        alert("Copied!");
      })
      .catch(function(error) {
        console.error("error", error);
      });
  }
  
  

  window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    setTimeout(function() {
      loader.style.display = "none";
    }, 200);
  });
  
  
  
  var song = document.getElementsByTagName('audio')[0];
  var played = false;
  var tillPlayed = getCookie('timePlayed');

  function toggleMute() {
    if (song.muted) {
      song.muted = false;
      document.getElementById('music-icon').classList.replace('bi-volume-mute', 'bi-volume-up');
    } else {
      song.muted = true;
      document.getElementById('music-icon').classList.replace('bi-volume-up', 'bi-volume-mute');
    }
  }

  function update() {
    if (!played) {
      if (tillPlayed) {
        song.currentTime = tillPlayed;
        song.play();
        played = true;
      } else {
        song.play();
        played = true;
      }
    } else {
      setCookie('timePlayed', song.currentTime);
    }
  }
  
  document.addEventListener('keypress', function(event) {
    if (event.key === 'f' || event.key === 'F') {
      toggleMute();
    }
  });
  
  setInterval(update, 1000);
  
  function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }
  
  function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
  }