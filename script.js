// Carrossel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-video');
const totalItems = items.length;

// Avançar para o próximo item do carrossel
function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems; // Cicla para o início ao atingir o último
    updateCarousel();
}

// Voltar para o item anterior
function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Cicla para o final ao atingir o primeiro
    updateCarousel();
}

// Atualiza a exibição do carrossel
function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Intervalo automático para avançar o carrossel
setInterval(nextItem, 5000);

// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Abrir e fechar menu ao clicar no ícone
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.classList.toggle('menu-open'); // Previne o scroll
});

// Fechar o menu ao clicar em um link
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
    });
});
