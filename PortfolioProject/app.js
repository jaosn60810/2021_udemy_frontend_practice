const text = document.querySelectorAll('.thePaths');

const lastWord = document.querySelector('#sixteenth');
const animation = document.querySelector('.animation');
lastWord.addEventListener('animationend', () => {
  animation.style =
    'transition: all 1s ease; opacity: 0;  pointer-events: none;';
});
