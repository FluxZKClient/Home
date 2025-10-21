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

    // Testa se o elemento body existe
    if (!body) {
        console.error("Erro: Elemento <body> com id='site-body' não encontrado.");
        return;
    }

    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === 'grayscale') {
        body.classList.add(TOGGLE_CLASS);
        console.log("FluxZK Theme Switcher: Modo Grayscale restaurado.");
    } else {
        console.log("FluxZK Theme Switcher: Modo Default carregado.");
    }
});

// Função chamada pelo botão de clique (onclick)
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
