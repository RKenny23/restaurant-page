import empanadas from "./img/empanadas_de_carne.jpeg";
import ensalada from "./img/ensalada_fresca.jpeg";
import quesadilla from "./img/quesadilla_de_pollo.jpeg";
import tartar from "./img/tartar_de_salmon.jpeg";

function createMenuItem(tabs, img, name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodImage = new Image();
  foodImage.src = img;
  menuItem.appendChild(foodImage);

  const foodName = document.createElement("h2");
  foodName.textContent = name;
  menuItem.appendChild(foodName);

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;
  menuItem.appendChild(foodDescription);

  tabs.appendChild(menuItem);

  return menuItem;
}

function loadMenuTab() {
  const content = document.getElementById("tabs-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const menuGrid = document.createElement("div");
  menuGrid.id = "menu-grid";
  content.appendChild(menuGrid);

  createMenuItem(
    menuGrid,
    empanadas,
    "Empanadas de Carne - $14.50",
    "half-moon turnovers, sirloin picadillo, bell peppers, scallions, tomatoes, mint mojo-pepper escabeche"
  );

  createMenuItem(
    menuGrid,
    ensalada,
    "Ensalada Fresca - $10",
    "field greens, cherry tomatoes, mango, goat cheese, tamarind-raspberry vinaigrette"
  );

  createMenuItem(
    menuGrid,
    quesadilla,
    "Quesadilla de Pollo - $13.50",
    "grilled chicken, guacamole, cheddar cheese, cilantro"
  );

  createMenuItem(
    menuGrid,
    tartar,
    "Tartar de Salmon - $13",
    "chilean salmon, mango, red onions, avocado, lemon citrus"
  );
}

export { loadMenuTab };
