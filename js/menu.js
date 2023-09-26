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

import firebase from 'firebase/app';
import 'firebase/database';

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
  // Fonction pour incrémenter le compteur de vues.
  function incrementAndView(index) {
    const viewsRef = firebase.database().ref(`/viewCount${index}`);
    
    // Incrémentation de la valeur dans la base de données.
    viewsRef.transaction(function(currentValue) {
      // La fonction de transaction reçoit la valeur actuelle et renvoie la nouvelle valeur.
      return (currentValue || 0) + 1;
    }, function(error, committed, snapshot) {
      if (error) {
        console.error('Transaction a échoué:', error);
      } else if (!committed) {
        console.log('Transaction annulée.');
      } else {
        // La transaction a réussi, mettez à jour l'affichage.
        document.getElementById(`viewCount${index}`).textContent = snapshot.val();
      }
    });
  }

  // Ajoutez des écouteurs d'événements à vos boutons.
  for (let i = 0; i < 100; i++) {
    const bouton = document.getElementById(`linkCode${i}`);
    bouton.addEventListener('click', () => {
      incrementAndView(i);
    });
  }
});