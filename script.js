// =======================================================
// --- Lógica do Modal de Login ---
// =======================================================
const openLoginBtn = document.getElementById('openLoginBtn');
const loginUnavailableModal = document.getElementById('loginUnavailable');
const closeUnavailableBtn = document.getElementById('closeUnavailableBtn');
const closeUnavailableSpan = document.getElementById('closeUnavailable');

// Verifica se todos os elementos do modal existem antes de adicionar event listeners
if (openLoginBtn && loginUnavailableModal && closeUnavailableBtn && closeUnavailableSpan) {
    // Abrir modal
    openLoginBtn.addEventListener('click', () => {
        loginUnavailableModal.classList.remove('hidden');
    });

    // Fechar modal pelo botão "Fechar" dentro do modal
    closeUnavailableBtn.addEventListener('click', () => {
        loginUnavailableModal.classList.add('hidden');
    });

    // Fechar modal pelo "x" (span)
    closeUnavailableSpan.addEventListener('click', () => {
        loginUnavailableModal.classList.add('hidden');
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === loginUnavailableModal) {
            loginUnavailableModal.classList.add('hidden');
        }
    });

    // Fechar modal ao pressionar ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !loginUnavailableModal.classList.contains('hidden')) {
            loginUnavailableModal.classList.add('hidden');
        }
    });
}


// =======================================================
// --- Lógica do Carrossel de Screenshots (Com Botões) ---
// =======================================================
const carouselTrack = document.querySelector('.carousel-track');
const carouselImages = document.querySelectorAll('.carousel-track img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Define variáveis essenciais para o carrossel
let currentIndex = 0; // Índice da imagem atualmente visível
const totalImages = carouselImages.length;


// Função para atualizar a posição do carrossel
function updateCarousel() {
    if (carouselImages.length === 0) return;
    
    // Obtém a largura atual da imagem
    const imageWidth = carouselImages[0].clientWidth; 
    
    // Aplica o movimento (translateX)
    carouselTrack.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

// Event Listener para o botão 'Anterior' (Prev)
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Volta para a última imagem (comportamento de loop)
            currentIndex = totalImages - 1; 
        }
        updateCarousel();
    });
}

// Event Listener para o botão 'Próximo' (Next)
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            // Volta para a primeira imagem (comportamento de loop)
            currentIndex = 0; 
        }
        updateCarousel();
    });
}

// Garante que o carrossel se ajuste se a janela for redimensionada
window.addEventListener('resize', updateCarousel);

// Inicializa o carrossel na primeira imagem ao carregar a página
if (carouselTrack) {
    updateCarousel();
}


// =======================================================
// --- Lógica Anti-Cópia (Botão Direito) ---
// =======================================================
document.addEventListener('contextmenu', (event) => {
    // 1. Impede que o menu de contexto padrão do navegador apareça.
    event.preventDefault(); 
    
    // 2. Exibe o alerta (o pop-up simples do navegador).
    alert("Copiar conteúdo não é permitido!");
});
