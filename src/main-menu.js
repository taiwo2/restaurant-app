function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (arrayClasses) arrayClasses.forEach((myClass) => element.classList.add(myClass));

  if (content) element.innerText = content;

  return element;
}
const $content = document.getElementById('content');

const menu = [
  {
    name: 'Ofada rice',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
    price: '20$',
  },
  {
    name: 'White soup',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
    price: '20$',
  },
  {
    name: 'jollof mixture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
    price: '20$',
  },
];

function renderMenu() {
  const $main = document.createElement('main');
  $main.classList.add('main');

  const $bienvenidos = createHtmlElement('p', null, ['cursive', 'golden'], 'Tonaz Restaurant');
  const $title = createHtmlElement('h1', null, ['gray'], 'Menu');

  const $hr = document.createElement('hr');

  $main.appendChild($bienvenidos);
  $main.appendChild($title);
  $main.appendChild($hr);

  menu.forEach((item) => {
    const $div = createHtmlElement('div', null, ['menu-item'], null);

    const $name = createHtmlElement('h2', null, ['golden'], item.name);
    const $description = createHtmlElement('p', null, ['gray'], item.description);
    const $price = createHtmlElement('h2', null, ['golden'], item.price);
    const $hr = createHtmlElement('hr', null, ['menu-hr'], null);

    $div.appendChild($name);
    $div.appendChild($description);
    $div.appendChild($price);
    $div.appendChild($hr);

    $main.appendChild($div);
  });

  $content.appendChild($main);
}

export default renderMenu;
