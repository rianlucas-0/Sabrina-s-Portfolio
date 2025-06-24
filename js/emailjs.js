  (function(){
    emailjs.init('GNBXC29OUgc0XKIgU'); // Substitua pela sua public key do EmailJS
  })();

  const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recarregar a página

  emailjs.sendForm('service_kxgorgh', 'template_sx8jzbw', this)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      form.reset();
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Ocorreu um erro ao enviar, tente novamente.');
    });
});
