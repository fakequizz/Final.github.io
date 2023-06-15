$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $("nav").toggleClass("active");
  });
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




