// Menu mobile - Versão corrigida e simplificada
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li');

// Função para alternar o menu
function toggleMenu() {
    // Alternar menu
    nav.classList.toggle('nav-active');
    
    // Animação do burger
    burger.classList.toggle('toggle');
    
    // Animação dos links
    navLinks.forEach((link, index) => {
        if (nav.classList.contains('nav-active')) {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        } else {
            link.style.animation = '';
        }
    });
}

// Event listeners
burger.addEventListener('click', toggleMenu);

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            toggleMenu();
        }
    });
});

// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar a página
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .timeline-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Definir opacidade inicial para elementos animados
window.addEventListener('load', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Disparar animação uma vez após o carregamento
    setTimeout(animateOnScroll, 500);
});

window.addEventListener('scroll', animateOnScroll);

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio (substitua por código real)
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        console.log('Formulário enviado:', formValues);
        
        // Feedback ao usuário
        alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
        this.reset();
    });
}