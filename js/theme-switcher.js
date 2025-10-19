/**
 * Script para alternar entre o tema padrão e o modo Grayscale (Preto e Branco)
 * Usa localStorage para lembrar a preferência do usuário.
 */

const BODY_ID = 'site-body';
const TOGGLE_CLASS = 'grayscale-mode';
const STORAGE_KEY = 'fluxzk_theme_mode';

// Função que será chamada ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById(BODY_ID);
    
    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === 'grayscale') {
        body.classList.add(TOGGLE_CLASS);
        console.log("FluxZK Theme Switcher: Modo Grayscale restaurado.");
    }
});

// Função chamada pelo botão de clique (onclick) no HTML
function toggleTheme() {
    const body = document.getElementById(BODY_ID);
    
    if (!body) return;

    // Alterna a classe 'grayscale-mode' no elemento <body>
    const isGrayscale = body.classList.toggle(TOGGLE_CLASS);

    // Salva a preferência
    if (isGrayscale) {
        localStorage.setItem(STORAGE_KEY, 'grayscale');
        console.log("FluxZK Theme Switcher: Mudança para Grayscale.");
    } else {
        localStorage.setItem(STORAGE_KEY, 'default');
        console.log("FluxZK Theme Switcher: Mudança para Default.");
    }
}
