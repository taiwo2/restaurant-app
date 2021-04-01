import { $content, createHtmlElement } from './index';

function renderFooter() {
  const $footer = document.createElement('footer');
  const $p = createHtmlElement(
    'p',
    null,
    ['white'], 'Developed with ♥ by Taiwo Adetona'
  );
  $footer.appendChild($p);
  $content.appendChild($footer);
}

export default renderFooter;
