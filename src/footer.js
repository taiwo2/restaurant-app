import createHtmlElement from './index';

const $content = document.getElementById('content');

function renderFooter() {
  const $footer = document.createElement('footer');
  const $p = createHtmlElement('p', null, ['white'], 'Developed with ♥ by Taiwo Adetona');
  $footer.appendChild($p);
  $content.appendChild($footer);
}

export default renderFooter;
