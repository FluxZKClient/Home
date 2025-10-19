/**
 * Lógica para trocar entre o tema principal (roxo/rosa) e o modo Grayscale (Preto e Branco)
 * Usa LocalStorage para salvar a preferência do usuário.
 */

const BODY_ID = 'site-body';
const TOGGLE_CLASS = 'grayscale-mode';
const STORAGE_KEY = 'fluxzk_theme_mode';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById(BODY_ID);
    
    // 1. Verifica se há um tema salvo no LocalStorage ao carregar a página
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    // Se o tema salvo for 'grayscale', aplica a classe para manter o modo P&B
    if (savedTheme === 'grayscale') {
        body.classList.add(TOGGLE_CLASS);
    }
});

// Esta função é chamada quando o usuário clica no ícone de sol/lua/engrenagem na navbar
function toggleTheme() {
    const body = document.getElementById(BODY_ID);
    
    // 2. Alterna a classe 'grayscale-mode' no elemento <body>
    const isGrayscale = body.classList.toggle(TOGGLE_CLASS);

    // 3. Salva a nova preferência no LocalStorage
    if (isGrayscale) {
        localStorage.setItem(STORAGE_KEY, 'grayscale');
    } else {
        localStorage.setItem(STORAGE_KEY, 'default');
    }
}
