function sendToWhatsApp() {
  var name = encodeURIComponent(document.getElementById('name').value);
  var email = encodeURIComponent(document.getElementById('email').value);
  var message = encodeURIComponent(document.getElementById('message').value);
  var phoneNumber = '5531992969244'; // Seu número de WhatsApp aqui

  // Decodificar
  name = decodeURIComponent(name);
  email = decodeURIComponent(email);
  message = decodeURIComponent(message);

  var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent('Nome: ' + name + '\nEmail: ' + email + '\nMensagem: ' + message);
  
  window.open(whatsappUrl);
}

function initMap() {
  const coordinates = { lat: -19.744573, lng: -43.843502 };

  const myLatLng = {
    lat: coordinates.lat,
    lng: coordinates.lng
  };

  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 18,
    mapTypeId: "hybrid",
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });

  // Marker on the map
  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "My location"
  });

  // Infowindow with the address
  const infowindow = new google.maps.InfoWindow({
    content:
      '<h3>Endereço:</h3><p>R. Gama Neto 861c, Barreiro do Amaral, Santa Luzia-MG</p>',
  });

  // Event listener for a click on the marker to display the infowindow
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  // Open the infowindow by default when the map loads
  infowindow.open(map, marker);
}


// Exibição gradual
function animateOnScroll() {
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  elementsToAnimate.forEach((element, index) => {
    if (isElementInViewport(element)) {
      // Add a delay based on the index of the element
      setTimeout(() => {
        element.classList.add('animated'); // Add the 'animated' class to trigger the animation
      }, index * 100); // Adjust the delay (100 milliseconds) to your preference
    }
  });
}


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Call the function when the page loads
window.addEventListener('load', function () {
  document.body.classList.remove('hidden');
  animateOnScroll(); // Trigger the initial animation check on page load
});

// Call the function when the page is scrolled
window.addEventListener('scroll', animateOnScroll);


// Adicione este código JavaScript para rolar a página até o topo quando o botão for clicado
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Monitora o evento de rolagem da página para mostrar/ocultar o botão de acordo com a posição
window.addEventListener('scroll', function () {
  var scrollBtn = document.querySelector('.scroll-top-btn');
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});



// Get the menu icon element
const menuIcon = document.querySelector('.menu-icon');

// Get the close menu icon element
const closeMenuIcon = document.querySelector('.close-menu-icon');

// Get the sidebar element
const sidebar = document.querySelector('.sidebar');

// Toggle the "show" class on the sidebar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('show');
});

// Add event listener to close the sidebar when the close menu icon is clicked
closeMenuIcon.addEventListener('click', () => {
  sidebar.classList.remove('show');
});



// Aguarde até que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
  // Inicialize o Swiper com o efeito "coverflow"
  const mySwiper = new Swiper('.container5', {
    effect: 'coverflow', // Use o efeito de "coverflow"
    coverflowEffect: {
      rotate: 50, // Ângulo de rotação dos slides
      stretch: 0, // Espaçamento entre os slides
      depth: 100, // Profundidade dos slides (z-index)
      slideShadows: true, // Adicionar sombras aos slides
    },
    // Outras configurações do Swiper, se necessário
    slidesPerView: 1, // Quantidade de slides visíveis por vez
    loop: true, // Ativar loop do carrossel
    navigation: {
      nextEl: '.swiper-button-next', // Elemento da seta de próxima imagem
      prevEl: '.swiper-button-prev', // Elemento da seta de imagem anterior
    },
  });
});



// Adicione este código JavaScript para alternar entre os feedbacks
const feedbacks = document.querySelectorAll(".client-feedback");
const totalFeedbacks = feedbacks.length;
let currentIndex = 0;

function showNextFeedback() {
  feedbacks[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % totalFeedbacks;
  feedbacks[currentIndex].classList.add("active");
}

// Mostra o primeiro feedback imediatamente ao carregar a página
feedbacks[currentIndex].classList.add("active");

// Inicia a troca de feedbacks após 10 segundos
setInterval(showNextFeedback, 10000);

