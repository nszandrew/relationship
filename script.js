// Função de rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  let currentIndexPage = 0;

  function changeSlidePage(direction) {
    const images = document.querySelectorAll(".carousel-image-page");
    
    // Esconde a imagem atual
    images[currentIndexPage].style.display = 'none';
    
    // Atualiza o índice
    currentIndexPage = (currentIndexPage + direction + images.length) % images.length;
    
    // Mostra a nova imagem
    images[currentIndexPage].style.display = 'block';
  }
  
  // Inicializa o carrossel da página para exibir apenas a primeira imagem
  document.querySelectorAll(".carousel-image-page").forEach((image, index) => {
    image.style.display = index === 0 ? 'block' : 'none';
  });
  
  // Funções para o carrossel no modal ("Ver Fotos")
  const momentPhotos = [
    ["imagens/conhecemos/fdp.png"], // Fotos para Momento 1
    ["imagens/image.jpg", "imagens/image2.jpg"], // Fotos para Momento 2
    ["imagens/viagem/image.jpg", "imagens/image2.jpg"], // Fotos para Momento 3
    ["imagens/namoro/image.jpg", "imagens/namoro/namoro.png", "imagens/namoro/alianca.jpg", "imagens/namoro/beijo.jpg", "imagens/namoro/caiu.jpg", "imagens/namoro/mordida.jpg", "imagens/namoro/palmeiras.jpg", "imagens/namoro/aw.jpg", "imagens/namoro/tatuagem.jpg"], // 4
    ["imagens/2023/japa.jpg", "imagens/2023/amor.png", "imagens/2023/amor2.png", "imagens/2023/amor3.png", "imagens/2023/amor4.png", "imagens/2023/amor5.png"], // 5
    ["imagens/foto5.jpg"], // 6
    ["imagens/foto5.jpg"], // 7
    ["imagens/image3.jpg", "imagens/socorro/gostosa.png", "imagens/socorro/gostosa2.jpg", "imagens/socorro/image.jpg"], // 8
    ["imagens/faculdade/alianca.jpg", "imagens/faculdade/beber.jpg", "imagens/faculdade/usjt.png"], // 9
    ["imagens/itanhaem/piscina.jpg", "imagens/itanhaem/ney.jpg", "imagens/itanhaem/linda.jpg"], // 10
    ["imagens/resto/tartaruga.jpg", "imagens/resto/parque.png", "imagens/resto/cirurgia.jpg", "imagens/resto/festa.jpg", "imagens/resto/nois.jpg", "imagens/resto/beijo.jpg", "imagens/resto/oque.png", "imagens/resto/amigos.png"], // 11
    ["imagens/bernardo/image2.png", "imagens/bernardo/pe.png", "imagens/bernardo/gordinho.png", "imagens/bernardo/cabecudo.png"],
    ["imagens/aniversario/image.png"]
  ];
  
  let currentMomentIndex = 0;
  let currentPhotoIndex = 0;
  
  function openModal(momentIndex) {
    currentMomentIndex = momentIndex;
    currentPhotoIndex = 0;
    const modal = document.getElementById("photo-modal");
    modal.style.display = "block";
    updateCarouselModal();
  }
  
  function closeModal() {
    const modal = document.getElementById("photo-modal");
    modal.style.display = "none";
  }
  
  function updateCarouselModal() {
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.innerHTML = ""; // Limpa as fotos antigas
  
    momentPhotos[currentMomentIndex].forEach((photo, index) => {
      const img = document.createElement("img");
      img.src = photo;
      img.alt = `Foto ${index + 1}`;
      img.classList.add("carousel-image");
      img.style.display = index === currentPhotoIndex ? "block" : "none";
      carouselContainer.appendChild(img);
    });
  }
  
  function changeSlideModal(direction) {
    const photos = momentPhotos[currentMomentIndex];
    currentPhotoIndex = (currentPhotoIndex + direction + photos.length) % photos.length;
    updateCarouselModal();
  }
  
  // Fechar modal ao clicar fora do conteúdo
  window.onclick = function(event) {
    const modal = document.getElementById("photo-modal");
    if (event.target === modal) {
      closeModal();
    }
  };
  
  function toggleMusic() {
    const music = document.getElementById("background-music");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  function toggleMusic() {
    const music = document.getElementById("background-music");
    const button = document.getElementById("music-button");
    if (music.paused) {
      music.play();
      button.innerText = "⏸ Pausar Música";
    } else {
      music.pause();
      button.innerText = "▶️ Tocar Música";
    }
  }
  
  function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }
  