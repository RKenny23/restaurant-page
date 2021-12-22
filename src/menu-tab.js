import empanadas from "./img/empanadas_de_carne.jpeg";
import ensalada from "./img/ensalada_fresca.jpeg";
import quesadilla from "./img/quesadilla_de_pollo.jpeg";
import tartar from "./img/tartar_de_salmon.jpeg";

function createItem(tabs, img) {
  const parent = document.createElement("div");
  parent.classList.add("menu-content");
  const image = new Image();
  image.src = img;
  parent.appendChild(image);

  const description = document.createElement("p");
  parent.appendChild(description);

  tabs.appendChild(parent);
  return description;
}

function loadMenuTab() {
  const content = document.getElementById("tabs-content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const menuWrapper = document.createElement("div");
  menuWrapper.id = "menu-wrapper";
  content.appendChild(menuWrapper);

  const description1 = createItem(menuWrapper, empanadas);
  description1.innerText = `half moon turnovers-sirloin picadillo bell peppers-scallions-tomatoes - mint mojo-pepper escabeche`;

  const description2 = createItem(menuWrapper, ensalada);
  description2.innerText = `field greens, cherry tomatoes, mango, goat cheese, tamarind-raspberry vinaigrette $10. add chicken $8.00, add shrimp $4.00 per unit.`;

  const description3 = createItem(menuWrapper, quesadilla);
  description3.innerText = `
    grilled chicken, guacamole, cheddar cheese, and cilantro`;
  const description4 = createItem(menuWrapper, tartar);
  description4.innerText = `
    chilean salmon, mango-red-onions-avocado, lemon citrus`;
}

export { loadMenuTab };
