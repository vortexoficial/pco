document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simulador de Video Play (Remover quando colocar o iframe real)
    const playBtn = document.querySelector('.video-placeholder');
    if(playBtn) {
        playBtn.addEventListener('click', () => {
            alert('Aqui inicia seu vídeo de vendas (VSL).');
        });
    }
});