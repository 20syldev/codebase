function copyContent(button) {
  try {
      const copyText = button.getAttribute("data-link");
      navigator.clipboard.writeText(copyText);

      button.classList.add("copied");

      const copiedTextElement = document.createElement("div");
      copiedTextElement.classList.add("copiedText");
      copiedTextElement.textContent = "Lien copié dans le presse-papier !";

      document.body.appendChild(copiedTextElement);

      setTimeout(function () {
          copiedTextElement.classList.add("fadeIn");
      }, 10);

      setTimeout(function () {
          button.classList.remove("copied");
          
          copiedTextElement.classList.remove("fadeIn");
          copiedTextElement.classList.add("fadeOut");

          setTimeout(function () {
              document.body.removeChild(copiedTextElement);
          }, 1000);
      }, 2000);
  } catch (err) {
      console.error("Échec de la copie : ", err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const viewCounts = [];
  for (let i = 0; i < 100; i++) {
    viewCounts[i] = 0;
  }

  function incrementAndView(index) {
    viewCounts[index]++;
    localStorage.setItem(`viewCount${index}`, viewCounts[index]);
    document.getElementById(`viewCount${index}`).textContent = viewCounts[index];
  }

  for (let i = 0; i < 100; i++) {
    const bouton = document.getElementById(`linkCode${i}`);
    bouton.addEventListener('click', () => {
      incrementAndView(i);
    });
  }
});