document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
        downloadBtn.classList.add('clicked');
        setTimeout(() => downloadBtn.classList.remove('clicked'), 300);
    });
});
