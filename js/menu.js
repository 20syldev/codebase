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

var firebaseConfig = {
  apiKey: "AIzaSyDcKlJWgVaIJWwfthqijUp34k14IdzJ5ZI",
  authDomain: "codebase-5f5f1.firebaseapp.com",
  databaseURL: "https://codebase-5f5f1.firebaseio.com",
  projectId: "codebase-5f5f1",
  storageBucket: "gs://codebase-5f5f1.appspot.com",
  messagingSenderId: "1028335431763",
  appId: "1:1028335431763:web:d41962ac157e561b9456a6"
};

firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', () => {
  const viewCounts = [];

  for (let i = 0; i < 100; i++) {
    const viewsRef = firebase.database().ref(`/viewCount${i}`);
    viewsRef.once('value')
      .then(function(snapshot) {
        const storedCount = snapshot.val();
        viewCounts[i] = storedCount ? parseInt(storedCount) : 0;
        document.getElementById(`viewCount${i}`).textContent = viewCounts[i];
      })
      .catch(function(error) {
        console.error('Erreur lors de la récupération du compteur de vues :', error);
      });
  }

  function incrementAndView(index) {
    viewCounts[index]++;
    
    const viewsRef = firebase.database().ref(`/viewCount${index}`);
    viewsRef.set(viewCounts[index]);

    document.getElementById(`viewCount${index}`).textContent = viewCounts[index];
  }

  for (let i = 0; i < 100; i++) {
    const bouton = document.getElementById(`linkCode${i}`);
    bouton.addEventListener('click', () => {
      incrementAndView(i);
    });
  }
});
