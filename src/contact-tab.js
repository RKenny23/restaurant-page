function loadContactTab() {
  const content = document.getElementById("tabs-content");
  
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const contactWrapper = document.createElement("div");
  contactWrapper.id = "contact-wrapper";
  content.appendChild(contactWrapper);

  const location = document.createElement("div");
  location.innerHTML = `
      <h2>Location</h2>
      <p>784 123 Spooner Ave., Middletown</p>
      <p>Opening Hours: 11:00 AM - 10:00 PM</p>
  `;

  const cont = document.createElement("div");
  cont.innerHTML = `
      <h2>Contact</h2>
      <p>Email: questions@babosakitchen.com</p>
      <p id="last">Call us: 860-577-3125</p>
  `;
  contactWrapper.appendChild(location);
  contactWrapper.appendChild(cont);
}
export { loadContactTab };
