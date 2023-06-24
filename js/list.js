const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
    temaOscuro() : temaClaro() ;    
}


const products = [
  // Europa
    { 
      name: 'Churarasco',
      category: 'europa',
      image: '../img/kitchen/European/Churrasco.jpg',
      characteristics: ['Addres: Kabanbai batyr 5/3, Working hours:\u200B \u200B \u200B 12:00 - 22:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B15$']
    },
    { 
      name: 'Eva Winecafe',
      category: 'europa',
      image: '../img/kitchen/European/Eva Winecafe.jpg',
      characteristics: ['Addres: Akhmeta Baitursynova 3, Working hours:\u200B \u200B \u200B 09:00 - 00:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B20$']
      },
      { 
      name: 'Local Pub',
      category: 'europa',
      image: '../img/kitchen/European/local pub.jpg',
      characteristics: ['Addres: \u200B \u200B \u200BKoshkarbayeva 10, Working hours:\u200B \u200B \u200B 09:00 - 00:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B25$']
      },
      { 
      name: 'Millionaire',
      category: 'europa',
      image: '../img/kitchen/European/Millionaire.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B Mangilik El 54, Working hours:\u200B \u200B \u200B 19:00 - 05:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B15$']
      },
    { 
      name: 'Море Море',
      category: 'europa',
      image: '../img/kitchen/European/more more.jpeg',
      characteristics: ['Addres: \u200B \u200B \u200B Nazhimedenova 4, Working hours:\u200B \u200B \u200B 12:00 - 00:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B23$']
    },
    { 
      name: 'Once',
      category: 'europa',
      image: '../img/kitchen/European/once.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Turan 24, Working hours:\u200B \u200B \u200B 12:00 - 02:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B32$']
    },
    
    // Italy
    { 
      name: 'Del Papa',
      category: 'italy',
      image: '../img/kitchen/Italian/Del Papa.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Republic 10, Working hours:\u200B \u200B \u200B 09:00 - 00:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B10$']
    },
    { 
      name: 'iL FORNO',
      category: 'italy',
      image: '../img/kitchen/Italian/iL FORNO.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Sarayshyk 5, Working hours:\u200B \u200B \u200B 12:00 - 02:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B20$']
      },
    { 
      name: 'La Bottega',
      category: 'italy',
      image: '../img/kitchen/Italian/La Bottega.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Dostyk 9, Working hours:\u200B \u200B \u200B 11:00 - 23:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B19$']
    },
    { 
      name: 'La Mia Piazza',
      category: 'italy',
      image: '../img/kitchen/Italian/La Mia Piazza.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Turan 22/1, Working hours:\u200B \u200B \u200B 12:00 - 00:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B24$']
      },
      
      { 
      name: 'Pane & Vino',
      category: 'italy',
      image: '../img/kitchen/Italian/Pane & Vino.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Kunaeva 29/1, Working hours:\u200B \u200B \u200B 12:00 - 02:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B20$']
      },
      { 
      name: 'Salone del Gusto',
      category: 'italy',
      image: '../img/kitchen/Italian/Salone del Gusto.jpg',
      characteristics: ['Addres: Turan 24, Working hours:\u200B \u200B \u200B 12:00 - 00:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B35$']
      },

      // France
      { 
      name: 'Cabernet',
      category: 'france',
      image: '../img/kitchen/France/Cabernet.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Kunaeva 14, Working hours:\u200B \u200B \u200B 12:00 - 02:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B14$']
      },
      { 
      name: 'De Paris',
      category: 'france',
      image: '../img/kitchen/France/De Paris.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Turan 37, Working hours:\u200B \u200B \u200B 07:00 - 22:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B9$']
      },
      { 
      name: 'La Belle',
      category: 'france',
      image: '../img/kitchen/France/La Belle.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Zhenis 3, \u200B  Working hours:\u200B \u200B \u200B 12:00 - 02:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B12$']
      },
      { 
      name: 'La Riviere',
      category: 'france',
      image: '../img/kitchen/France/La Riviere.jpg',
      characteristics: ['Addres: Kabanbai batyr 1,  \u200B  \u200B  \u200B  \u200B \u200B Working hours:\u200B \u200B \u200B 07:00 - 23:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B12$']
      },
      { 
      name: 'Lou Lou',
      category: 'france',
      image: '../img/kitchen/France/Lou Lou.jpg',
      characteristics: ['Addres: \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B Dostyk 13, Working hours:\u200B \u200B \u200B 12:00 - 03:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B31$']
      },
      { 
      name: 'Ma Famille',
      category: 'france',
      image: '../img/kitchen/France/Ma Famille.jpg',
      characteristics: ['Addres:  Kenesary 30  \u200B  \u200B  \u200B  \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B \u200BWorking hours:\u200B \u200B \u200B 07:00 - 23:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B25$']
      },

      // Asia
      { 
        name: 'Asia Rooms',
        category: 'asia',
        image: '../img/kitchen/Asian/Asia Rooms.jpg',
        characteristics: ['Addres: Zhenis 3 \u200B  \u200B \u200B \u200B  \u200B  \u200B  \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B \u200BWorking hours:\u200B \u200B \u200B 18:00 - 06:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B20$']
        },
        { 
          name: 'Gentelmens',
          category: 'asia',
          image: '../img/kitchen/Asian/Gentlemens Quality Bar Asia.jpg',
          characteristics: ['Addres:  Dostyk 24  \u200B  \u200B  \u200B  \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B \u200BWorking hours:\u200B \u200B \u200B 18:00 - 06:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B14$']
        },
        { 
        name: 'Korea House',
        category: 'asia',
        image: '../img/kitchen/Asian/Korean House Karaoke.jpg',
        characteristics: ['Addres:  Turan 23  \u200B  \u200B  \u200B  \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B \u200BWorking hours:\u200B \u200B \u200B 12:00 - 02:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B25$']
        },
        { 
        name: 'Tofu',
        category: 'asia',
        image: '../img/kitchen/Asian/Tofu.jpg',
        characteristics: ['Addres:  E489/5  \u200B  \u200B  \u200B  \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B \u200BWorking hours:\u200B \u200B \u200B 12:00 - 02:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B12$']
        },
        { 
        name: 'Yakitoria',
        category: 'asia',
        image: '../img/kitchen/Asian/Yakitoria.jpg',
        characteristics: ['Addres:  Turan 21  \u200B  \u200B  \u200B  \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B \u200BWorking hours:\u200B \u200B \u200B 12:00 - 22:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B20$']
        },
        { 
        name: 'Koreana',
        category: 'asia',
        image: '../img/kitchen/Asian/BBQ.jpg',
        characteristics: ['Addres:  Turan 23  \u200B  \u200B  \u200B  \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B  \u200B \u200B \u200B \u200B \u200B \u200B \u200BWorking hours:\u200B \u200B \u200B 12:00 - 00:00,\u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B \u200B  A/B: \u200B \u200B25$']
        },
  ];
  
  // Get DOM elements
  const searchInput = document.getElementById('search-input');
  const filterSelect = document.getElementById('filter-select');
  const productContainer = document.getElementById('product-container');
  
  displayProducts(products);
  
  document.getElementById('search-btn').addEventListener('click', searchProducts);
  
  function displayProducts(products) {
    productContainer.innerHTML = '';
  
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col');
      
        const card = document.createElement('div');
        card.classList.add('card');
      
        const image = document.createElement('img');
        image.src = product.image;
        image.classList.add('card-img-top');
        image.alt = 'Product Image';
      
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
      
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;
      
        const characteristics = document.createElement('p');
        characteristics.classList.add('card-text');
        characteristics.textContent = product.characteristics.join(', ');
      
        cardBody.appendChild(title);
        cardBody.appendChild(characteristics);
      
        card.appendChild(image);
        card.appendChild(cardBody);
      
        productCard.appendChild(card);
        productContainer.appendChild(productCard);
      });
      
  }
  
  function searchProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
  
    const filteredProducts = products.filter(product => {
if (filterValue === 'All') {
        return product.name.toLowerCase().includes(searchValue);
      } else {
        return (
          product.category === filterValue &&
          product.name.toLowerCase().includes(searchValue)
        );
      }
    });
  
    displayProducts(filteredProducts);
  }

function displayProducts(products) {
    productContainer.innerHTML = '';
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col');
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      image.src = product.image;
      image.classList.add('card-img-top');
      image.alt = 'Product Image';
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = product.name;
  
      const characteristics = document.createElement('p');
      characteristics.classList.add('card-text');
      characteristics.textContent = product.characteristics.join(', ');
  
      const buyButton = document.createElement('button');
buyButton.classList.add('btn', 'btn-primary');
buyButton.textContent = 'Book';
buyButton.addEventListener('click', () => {
  window.location.href = '../html/reg.html'; 
});


      document.body.appendChild(buyButton);
      cardBody.appendChild(title);
      cardBody.appendChild(characteristics);
      cardBody.appendChild(buyButton); 
  
      card.appendChild(image);
      card.appendChild(cardBody);
  
      productCard.appendChild(card);
      productContainer.appendChild(productCard);
    });
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