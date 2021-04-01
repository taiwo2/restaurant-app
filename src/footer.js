function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
}

const $content = document.getElementById('content');

function renderFooter() {
  const $footer = document.createElement('footer');
  const $p = createHtmlElement('p', null, ['white'], 'Developed with ♥ by Taiwo Adetona');
  $footer.appendChild($p);
  $content.appendChild($footer);
}

export default renderFooter;
