import Logo from "./img/sombrero-mexican.svg";
import "./styles.css";

const content = document.getElementById("content");

function loadLogo() {
  const img = new Image();
  img.src = Logo;
  img.id = "logo";
  content.appendChild(img);
}

function createHeader() {
  const header = document.createElement("h1");
  header.innerText = "Babosa Kitchen";

  content.appendChild(header);
}

function createTabs() {
  const tabsContainer = document.createElement("div");
  tabsContainer.id = "tabs-wrapper";

  const links = document.createElement("div");
  links.id = "links";

  const tabsContent = document.createElement("div");
  tabsContent.id = "tabs-content";

  const home = document.createElement("div");
  home.id = "home";
  home.innerText = "Home";
  home.classList.add("selected");

  const menu = document.createElement("div");
  menu.id = "menu";
  menu.innerText = "Menu";

  const contact = document.createElement("div");
  contact.id = "contact";
  contact.innerText = "Contact Us";

  links.appendChild(home);
  links.appendChild(menu);
  links.appendChild(contact);

  tabsContainer.appendChild(links);
  tabsContainer.appendChild(tabsContent);
  content.appendChild(tabsContainer);
}

function createPattern() {
  for (let i = 0; i < 13; i++) {
    const pattern = document.createElement("div");
    pattern.id = "pattern";
    // pattern.style.top = `${i * 100}px`;
    content.appendChild(pattern);
  }
}

// function createPattern() {
//   const pattern = document.createElement("div");
//   pattern.id = "pattern";
//   content.appendChild(pattern);
// }

export { loadLogo, createHeader, createTabs, createPattern };
