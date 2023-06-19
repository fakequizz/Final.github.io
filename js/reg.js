function validateForm() {
  let first_name = document.forms[0]["first_name"].value;
  let last_name = document.forms[0]["last_name"].value;
  let email = document.forms[0]["email"].value;
  let password = document.forms[0]["Password"].value;
  let Date_Of_Birth = document.forms[0]["Date_Of_Birth"].value;
  let confirmPassword = document.forms[0]["ConfirmPassword"].value;

  if (!email.includes("@")) {
    alert("Please enter a valid email that includes @ at the beginning.");
    return false;
  }

  if (!password.match(/^[a-zA-Z0-9]+$/)) {
    alert("Password can only contain letters from a-z, A-Z, and numbers.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Confirm password must match the password.");
    return false;
  }

  if (!first_name.match(/^[a-zA-Z]+$/)) {
    alert("First name can only contain letters from a-z.");
    return false;
  }

  if (!last_name.match(/^[a-zA-Z]+$/)) {
    alert("Last name can only contain letters from a-z.");
    return false;
  }

  let today = new Date();
  let inputDate = new Date(Date_Of_Birth.replace(/-/g, '/'));

  if (inputDate > today) {
    alert("Please enter a valid birth date.");
    return false;
  }

  alert("You submitted successfully!");
}


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