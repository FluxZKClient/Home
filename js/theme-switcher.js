/**
 * Lógica para trocar entre o tema principal (roxo/rosa) e o modo Grayscale (Preto e Branco)
 * Usa LocalStorage para salvar a preferência do usuário.
 */

console.log("FluxZK Theme Switcher: Script Carregado!"); // TESTE DE CARREGAMENTO

const BODY_ID = 'site-body';
const TOGGLE_CLASS = 'grayscale-mode';
const STORAGE_KEY = 'fluxzk_theme_mode';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById(BODY_ID);
    
    // 1. Verifica se há um tema salvo
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    // Se o tema salvo for 'grayscale', aplica a classe
    if (savedTheme === 'grayscale') {
        body.classList.add(TOGGLE_CLASS);
        console.log("FluxZK Theme Switcher: Modo Grayscale restaurado.");
    } else {
        console.log("FluxZK Theme Switcher: Modo Default carregado.");
    }
});

// Esta função é chamada pelo onclick="toggleTheme()" no HTML
function toggleTheme() {
    const body = document.getElementById(BODY_ID);
    
    // 2. Alterna a classe 'grayscale-mode'
    const isGrayscale = body.classList.toggle(TOGGLE_CLASS);

    // 3. Salva a preferência
    if (isGrayscale) {
        localStorage.setItem(STORAGE_KEY, 'grayscale');
        console.log("FluxZK Theme Switcher: Mudança para Grayscale.");
    } else {
        localStorage.setItem(STORAGE_KEY, 'default');
        console.log("FluxZK Theme Switcher: Mudança para Default.");
    }
}
