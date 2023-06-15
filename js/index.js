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
    }, 3000); // 7000 миллисекунд = 7 секунд
  });
  
  
  