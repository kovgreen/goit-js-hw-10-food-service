import './css/styles.css';
import menus from './menu.json';
import cardTemplate from './templates/card-template.hbs';
import cardTemplateItem from './templates/card-template__item.hbs';

const refs = {
  body: document.querySelector('body'),
  menuList: document.querySelector('.js-menu'),
  input: document.querySelector('.js-switch-input'),
};

//Оформление темы
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('theme');

const switcher = (add, remove) => {
  document.body.classList.remove(remove);
  document.body.classList.add(add);
};

if (currentTheme !== Theme.DARK) {
  refs.input.checked = false;
  refs.body.classList.add(Theme.LIGHT);
} else {
  refs.input.checked = true;
  refs.body.classList.add(Theme.DARK);
}

refs.input.addEventListener('change', e => {
  if (!e.target.checked) {
    switcher('light-theme', 'dark-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    switcher('dark-theme', 'light-theme');
    localStorage.setItem('theme', Theme.DARK);
  }
});

//Разметка из шаблона элемента списка
buildMenu(menus);

function buildMenu(menus) {
  const markup = menus.map(menu => cardTemplateItem(menu)).join('');
  refs.menuList.insertAdjacentHTML('afterbegin', markup);
}

//Разметка из шаблона списка
// const markup = cardTemplate(menus);
// console.log(markup);

// refs.menuList.insertAdjacentHTML('afterbegin', markup);
