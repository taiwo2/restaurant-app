import { $content, createHtmlElement } from './main-menu' 

function renderFooter() {
  const $footer = document.createElement('footer');
  const $p = createHtmlElement('p', null, ['white'], 'Developed with ♥ by Taiwo Adetona');
  $footer.appendChild($p);
  $content.appendChild($footer);
}

export default renderFooter;
