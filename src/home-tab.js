import homeImage from "./img/bistro.jpg";

function loadHomeTab() {
  const content = document.getElementById("tabs-content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const img = document.createElement("img");
  img.id = "home-img";
  img.src = homeImage;
  content.appendChild(img);

  const infoText = document.createElement("p");

  infoText.innerText = `Owner Ryan Kenny has been treating Middletown residents for over 20 years with authentic Mexican recipes passed down from his grandmother and shared with his family in his hometown of Puebla, Mexico. His passion for his food and his heritage is reflected in his restaurant’s décor and how he greets his guests as if they were family.
  
  Come to Babosa Kitchen and enjoy fresh guacamole, sizzling fajitas and traditional favorites like Chile Rellenos, Flautas and Enchiladas. The bar is fully stocked and his staff serves up some of the best margaritas around. Come and enjoy your time out on the patio with a specialty margarita or a great mexican beer like Dos Equis or Negra Modelo.`;

  content.appendChild(infoText);
}

export { loadHomeTab };
