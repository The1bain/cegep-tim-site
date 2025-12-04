// Cartes interactives Étudiant d’un jour
const choiceCards = document.querySelectorAll('.choice-card');
const choiceDescs = document.querySelectorAll('.choice-desc');

if (choiceCards.length) {
  choiceCards.forEach(card => {
    card.addEventListener('click', () => {
      choiceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      choiceDescs.forEach(d => d.classList.remove('active'));
      const target = document.querySelector(card.dataset.desc);
      if (target) target.classList.add('active');
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Fermer tous les autres
      faqItems.forEach(i => {
        i.classList.remove("open");
        i.querySelector(".faq-answer").style.maxHeight = 0;
      });

      // Ouvrir l’item cliqué
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
