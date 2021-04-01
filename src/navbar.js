function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
}

const $content = document.getElementById('content');

function renderNav() {
  const navItems = ['home', 'menu', 'about'];
  const $ul = document.createElement('ul');

  navItems.forEach((item) => $ul.appendChild(createHtmlElement('li', null, null, item)));

  const $nav = document.createElement('nav');
  $nav.appendChild($ul);

  $content.appendChild($nav);
}

export default renderNav;
