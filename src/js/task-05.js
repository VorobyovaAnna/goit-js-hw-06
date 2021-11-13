const refs = {
  input: document.querySelector('input#name-input'),
  span: document.querySelector('span#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
  if (refs.input.value === '') {
      refs.span.textContent = 'Anonymous'
    }
    else { refs.span.textContent = refs.input.value }
}