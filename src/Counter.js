import { createElement } from './utils';

function Counter() {
  function updateCount(element, count) {
    element.textContent = count;
  }

  let count = 0;

  const label = createElement('label', {
    className: 'counter-label',
    textContent: count,
  });
  const labelContainer = createElement('div', {}, [label]);

  const incButton = createElement('button', {
    className: 'counter-button',
    textContent: '+',
  });
  const decButton = createElement('button', {
    className: 'counter-button',
    textContent: '-',
  });

  incButton.addEventListener('click', () => updateCount(label, ++count));
  decButton.addEventListener('click', () => updateCount(label, --count));

  const footer = createElement('footer', { className: 'counter-footer' }, [
    incButton,
    decButton,
  ]);

  return createElement('div', { className: 'counter' }, [
    labelContainer,
    footer,
  ]);
}

export default Counter;