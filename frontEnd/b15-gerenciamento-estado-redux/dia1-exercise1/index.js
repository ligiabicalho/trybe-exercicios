/* 
Script está contido no index.html

import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state, //manter as outras chaves do INITIAL_STATE
        index: (state.index % (state.colors.length - 1)) + 1,
      }
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1
      }
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const actionNext = { type: 'NEXT_COLOR' };
const actionPrevious = { type: 'PREVIOUS_COLOR' };

const btnNext = document.querySelector('#next');
btnNext.addEventListener('click', () => store.dispatch(actionNext));

const btnPrevious = document.querySelector('#previous');
btnPrevious.addEventListener('click', () => store.dispatch(actionPrevious));

store.subscribe(() => {
  const globalStore = store.getState();

  const valueColorEl = document.querySelector('#value');
  const newIndex = globalStore.index;
  const newColor = globalStore.colors[newIndex];
  valueColorEl.innerHTML = newColor;

  const containerEl = document.querySelector('#container');
  containerEl.style.backgroundColor = newColor;
}) */