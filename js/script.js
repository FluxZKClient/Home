document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 300);
    });
});
