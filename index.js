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

const projectCard = [
  {
    title: 'Profesional Art Printing Data More',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/w1w4bg.png',
    liveLink: 'https://karanj2212.github.io/',
    sourceLink: 'https://github.com/karanJ2212/KaranJainPortfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/bgw2.svg',
    liveLink: 'https://karanj2212.github.io/',
    sourceLink: 'https://github.com/karanJ2212/KaranJainPortfolio',
  },
  {
    title: 'Website Protfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/w6bgdt.png',
    liveLink: 'https://karanj2212.github.io/',
    sourceLink: 'https://github.com/karanJ2212/KaranJainPortfolio',
  },
  {
    title: 'Profesional Art Printing Data More',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/w1w4bg.png',
    liveLink: 'https://karanj2212.github.io/',
    sourceLink: 'https://github.com/karanJ2212/KaranJainPortfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/bgw2.svg',
    liveLink: 'https://karanj2212.github.io/',
    sourceLink: 'https://github.com/karanJ2212/KaranJainPortfolio',
  },
  {
    title: 'Website Protfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    image: 'SVG/w6bgdt.png',
    liveLink: 'https://karanj2212.github.io/',
    sourceLink: 'https://github.com/karanJ2212/KaranJainPortfolio',
  },
];

// populating cards
const workcards = document.querySelector('.workcards');

projectCard.forEach((work, index) => {
  workcards.innerHTML += ` <div id="w${index + 1}" class="cards">
    <div class="cardDiscription" id="w${index + 1}cardDiscription">
      <h2 ><span class="cardTitle">${work.title}</span></h2>
      <p class="cardDiscriptionp">
        ${work.description}
      </p>
      <ul class="cardlist">
        <li>${work.technology[0]}</li>
        <li>${work.technology[1]}</li>
        <li>${work.technology[2]}</li>
      </ul>
    </div>
    <p class="card-liveLink" hidden>${work.liveLink}</p>
                <p class="card-sourceLink" hidden>${work.sourceLink}</p>
                <p class="card-image" hidden>${work.image}</p>
    <button class="btn cardbtn" id="w${index + 1}button">See Project</button>
  </div>`;
});

// populating MODALS
// for (let i = 0; i < projectCard.length + 1; i++) {
//   document.querySelector(".modal-info").innerHTML = `
//   <div class="modal-top">
//     <div class="project-title">
//       <h4>${projectCard[i].title}</h4>
//     </div>
//     <div class="project-tools">
//       <ul>
//       <li>${projectCard[i].technology[0]}</li>
//       <li>${projectCard[i].technology[1]}</li>
//       <li>${projectCard[i].technology[2]}</li>
//       </ul>
//     </div>
//   </div>
//   <div class="modal-bottom" id="modal-bottom">
//     <div class="project-img">
//       <img src="SVG/modalimgpng.png" alt="${projectCard[i].title} Image">
//     </div>
//     <div class="project-details">
//       <div class="project-desc">
//       <p> ${projectCard[i].description}</p>
//       </div>

//       <div class="project-links">
//         <a href="${projectCard[i].sourceLink}" id="project-link-1">
//          See Source
//         <img src="/SVG/GitHub_modal.svg" alt="see-project-icon">
//       </a>
//       <a href="${projectCard[i].liveLink}" id="project-link-1">
//       See live
//      <img src="/SVG/seelivemodal.svg" alt="see-project-icon">
//    </a>

//       </div>
//     </div>
//   </div>
//   `;
// }

document.querySelector('.modal-info').innerHTML = `
    <div class="modal-top">
      <div class="project-title">
        <h4 class="project-title">dynamic title</h4>
      </div>
      <div class="project-tools">
        <ul>
        <li>html</li>
        <li>Bootstrap</li>
        <li>Ruby on Rails </li>
        </ul>
      </div>
    </div>
    <div class="modal-bottom" id="modal-bottom">
      <div class="project-img">
        <img src="SVG/modalimgpng.png" alt=" Image" class="project-img-source">
      </div>
      <div class="project-details">
        <div class="project-desc">
        <p class="project-desc"> dynamic des</p>
        </div>

        <div class="project-links">
          <a href="" id="project-link-1" class="project-link-source">
           See Source
          <img src="/SVG/GitHub_modal.svg" alt="see-project-icon">
        </a>
        <a href="" id="project-link-1" class="project-link-live">
        See live
       <img src="/SVG/seelivemodal.svg" alt="see-project-icon">
     </a>

        </div>
      </div>
    </div>
    `;

// --------------------------------------------------------------------------version1
// const modal = document.getElementById("myModal");
// const btn = document.querySelectorAll(".cardbtn");

// const span = document.getElementsByClassName("close")[0];

// btn.forEach((button) => {
//   button.onclick = () => {
//     modal.style.display = "block";
//   };
// });
// span.onclick = () => {
//   modal.style.display = "none";
// };
// window.onclick = (event) => {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// };

// ------------------------------------------------------------------------------version1end

// version2------------------------------------------------

const modaltitle = document.querySelector('.project-title');
const modalDes = document.querySelector('.project-desc');
const modalLive = document.querySelector('.project-link-source');
const modalSource = document.querySelector('.project-link-source');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.project-img-source');

const cardTitle = document.querySelectorAll('.cardTitle');
const cardDes = document.querySelectorAll('.cardDiscriptionp');
const cardLiveLink = document.querySelector('.card-liveLink');
const cardSourceLink = document.querySelector('.card-sourceLink');
const cardImage = document.querySelectorAll('.card-image');
const btn = document.querySelectorAll('.cardbtn');

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', () => {
    modal.style.display = 'block';

    modaltitle.textContent = cardTitle[i].innerHTML;
    modalDes.textContent = cardDes[i].innerHTML;
    modalLive.sourceLink = cardLiveLink[i].outerHTML;
    modalSource.sourceLink = cardSourceLink[i].outerHTML;
    modalImage.sourceLink = cardImage[i].outerHTML;
  });
}
const span = document.getElementsByClassName('close')[0];

span.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
