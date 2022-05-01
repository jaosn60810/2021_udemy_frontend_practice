const header = document.querySelector('header');
const headerAnchor = document.querySelectorAll('header ul li a');

window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    header.style.backgroundColor = 'rgba(0,0,0,0.5)';
    header.style.color = 'white';
    headerAnchor.forEach((item) => {
      item.style.color = 'white';
    });
  } else {
    header.style = '';
    headerAnchor.forEach((item) => {
      item.style.color = '#09777d';
    });
  }
});
