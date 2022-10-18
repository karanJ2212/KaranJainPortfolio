const hamburger = document.querySelector('.menuIcon');
const closebtn = document.querySelector('.closebtn');
const navHeader = document.querySelector('.header');
const toggleNavlist = () => {
  navHeader.classList.toggle('active');
};

hamburger.addEventListener('click', () => toggleNavlist());

closebtn.addEventListener('click', () => {
  if (navHeader.classList.contains('active')) {
    navHeader.classList.remove('active');
  }
});

const scrollLinks = document.querySelectorAll('.scroll-links');

scrollLinks.forEach((item) => {
  item.addEventListener('click', (a) => {
    const id = a.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    if (id) {
      navHeader.classList.remove('active');
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
