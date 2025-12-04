// Scroll doux pour le menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  btn.addEventListener('click', () => {
    const isOpen = answer.style.maxHeight;
    // ferme tout
    document.querySelectorAll('.faq-answer').forEach(a => (a.style.maxHeight = null));

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// Chatbot simple (simulation)
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotBody = document.getElementById('chatbot-body');

chatbotToggle.addEventListener('click', () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === 'block' ? 'none' : 'block';
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.style.display = 'none';
});

chatbotForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = chatbotInput.value.trim();
  if (!text) return;

  addChatMessage(text, 'user');

  // réponse très simple
  let reply =
    "Je suis un chatbot de démonstration. Pour des infos détaillées, consulte la FAQ ou écris au département TIM.";

  if (text.toLowerCase().includes('stage')) {
    reply =
      "Les stages ont lieu à la 6e session et sont encadrés par un cours spécifique. Tu peux voir la section « Les stages » plus haut sur la page.";
  }
  if (text.toLowerCase().includes('bourse')) {
    reply =
      "Le programme TIM peut donner droit aux bourses Perspective Québec de 1500$ par session réussie.";
  }

  setTimeout(() => addChatMessage(reply, 'bot'), 500);
  chatbotInput.value = '';
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
});

function addChatMessage(text, type) {
  const div = document.createElement('div');
  div.className = 'chatbot-msg ' + type;
  div.textContent = text;
  chatbotBody.appendChild(div);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

// Bouton FR / EN (démonstration simple)
const langBtn = document.getElementById('lang-toggle');
let isEnglish = false;

langBtn.addEventListener('click', () => {
  isEnglish = !isEnglish;
  langBtn.textContent = isEnglish ? 'EN / FR' : 'FR / EN';

  // Ici tu pourrais faire une vraie traduction.
  // Pour l’instant on affiche juste une alerte pour montrer l’intention.
  alert(
    isEnglish
      ? 'Version anglaise en construction (mock). Ton prof verra que le multilingue est prévu.'
      : 'Retour à la version française.'
  );
});
