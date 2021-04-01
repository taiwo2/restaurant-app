import $content, {createHtmlElement } from './index';

function renderAbout() {
  const $main = document.createElement('main');
  $main.classList.add('main');

  const $bienvenidos = createHtmlElement('p', null, ['cursive', 'golden'], 'Tonaz Reataurant');
  const $title = createHtmlElement('h1', null, ['gray'], 'About page');

  const $hr = document.createElement('hr');

  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod';
  const $p = createHtmlElement('p', null, ['menu-item'], content);

  $main.appendChild($bienvenidos);
  $main.appendChild($title);
  $main.appendChild($hr);
  $main.appendChild($p);

  $content.appendChild($main);
}

export default renderAbout;
