const inputSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


inputSizeControlEl.addEventListener('input', event => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
});

