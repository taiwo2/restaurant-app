const container = document.getElementById('content');

const main = document.createElement('div');
main.classList.add('main');

const mainWrapper = document.createElement('div');
mainWrapper.classList.add('main-wrapper');

const mainText = document.createElement('h1');
mainText.innerText = 'Delicious Tonaz Foods';

const mainTextP = document.createElement('p');
mainTextP.innerText = 'Popular with its variety of Foods';

const mainPage = () => {
  container.appendChild(main);
  main.appendChild(mainWrapper);
  mainWrapper.appendChild(mainText);
  mainWrapper.appendChild(mainTextP);
};

export default mainPage;
