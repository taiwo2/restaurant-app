import createHtmlElement from './index';

const $content = document.getElementById('content');

function renderHome() {
  const $main = document.createElement('main');

  const $bienvenidos = createHtmlElement('p', null, ['cursive', 'golden'], 'Tonaz Restuarant');
  const $title = createHtmlElement('h1', null, ['white'], 'Home of Foods');

  const $hr = document.createElement('hr');
  const $subtitle = createHtmlElement('p', null, ['text-center', 'white'], 'A Place to enjoy Good food that satisfy Heart!');
  const $button = createHtmlElement('button', null, null, 'HERE FOR MENU');

  $main.appendChild($bienvenidos);
  $main.appendChild($title);
  $main.appendChild($hr);
  $main.appendChild($subtitle);
  $main.appendChild($button);

  $content.appendChild($main);
}

export default renderHome;
