var commandsColumnVisible1, commandsColumnVisible2, commandsColumnVisible3, commandsColumnVisible4 = true;

function toggleCommandsColumn1() {
  var commandsColumn = document.getElementById("commands-column1");
  var toggleButton = document.querySelector(".toggle1");

  if (commandsColumnVisible1) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible1 = !commandsColumnVisible1;

  localStorage.setItem('selectedMenu1', JSON.stringify(commandsColumnVisible1));
}

document.addEventListener('DOMContentLoaded', function() {
  var selectedMenu1 = localStorage.getItem('selectedMenu1');
  if (selectedMenu1 !== null) {
    selectedMenu1 = JSON.parse(selectedMenu1);
    if (selectedMenu1) {
      toggleCommandsColumn1();
    }
  }
});


function toggleCommandsColumn2() {
  var commandsColumn = document.getElementById("commands-column2");
  var toggleButton = document.querySelector(".toggle2");

  if (commandsColumnVisible2) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible2 = !commandsColumnVisible2;

  localStorage.setItem('selectedMenu2', JSON.stringify(commandsColumnVisible2));
}

document.addEventListener('DOMContentLoaded', function() {
  var selectedMenu2 = localStorage.getItem('selectedMenu2');
  if (selectedMenu2 !== null) {
    selectedMenu2 = JSON.parse(selectedMenu2);
    if (selectedMenu2) {
      toggleCommandsColumn2();
    }
  }
});


function toggleCommandsColumn3() {
  var commandsColumn = document.getElementById("commands-column3");
  var toggleButton = document.querySelector(".toggle3");

  if (commandsColumnVisible3) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible3 = !commandsColumnVisible3;

  localStorage.setItem('selectedMenu3', JSON.stringify(commandsColumnVisible3));
}

document.addEventListener('DOMContentLoaded', function() {
  var selectedMenu3 = localStorage.getItem('selectedMenu3');
  if (selectedMenu3 !== null) {
    selectedMenu3 = JSON.parse(selectedMenu3);
    if (selectedMenu3) {
      toggleCommandsColumn3();
    }
  }
});


function toggleCommandsColumn4() {
  var commandsColumn = document.getElementById("commands-column4");
  var toggleButton = document.querySelector(".toggle4");

  if (commandsColumnVisible4) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible4 = !commandsColumnVisible4;

  localStorage.setItem('selectedMenu4', JSON.stringify(commandsColumnVisible4));
}

document.addEventListener('DOMContentLoaded', function() {
  var selectedMenu4 = localStorage.getItem('selectedMenu4');
  if (selectedMenu4 !== null) {
    selectedMenu4 = JSON.parse(selectedMenu4);
    if (selectedMenu4) {
      toggleCommandsColumn4();
    }
  }
});


function switchTheme(theme) {
  var leftMenu = document.getElementById('left-menu');
  var bodycolor = document.getElementById('body-color');
  var footer = document.getElementById('footer');
  var bar1 = document.getElementById('bar1');
  var bar2 = document.getElementById('bar2');

  leftMenu.classList.remove('theme1', 'theme2', 'theme3');
  bodycolor.classList.remove('theme1', 'theme2', 'theme3');
  footer.classList.remove('theme1', 'theme2', 'theme3');
  bar1.classList.remove('theme1', 'theme2', 'theme3');
  bar2.classList.remove('theme1', 'theme2', 'theme3');
  
  leftMenu.classList.add(theme);
  bodycolor.classList.add(theme);
  footer.classList.add(theme);
  bar1.classList.add(theme);
  bar2.classList.add(theme);

  localStorage.setItem('selectedTheme', theme);
}

document.addEventListener('DOMContentLoaded', function() {
  var selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
    switchTheme(selectedTheme);
  }
});


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