const mobileMenu = document.querySelectorAll('.mobile-menu-canvas li');
const mobileMenuCanvas = document.querySelector('.mobile-menu-canvas');
const mobileMenuCanvasList = document.querySelector('.mobile-menu-canvas ul');
const mobileMenuIcons = document.querySelectorAll('nav > button');


for (let i = 0; i < mobileMenuIcons.length; i += 1) {
  mobileMenuIcons[i].addEventListener('click', () => {
    mobileMenuCanvas.classList.toggle('hide');
    mobileMenuCanvasList.classList.toggle('show');
    mobileMenuIcons[0].classList.toggle('hide');
    mobileMenuIcons[1].classList.toggle('hide');
  });
}

for (let i = 0; i < mobileMenu.length; i += 1) {
  mobileMenu[i].addEventListener('click', () => {
    mobileMenuCanvas.classList.toggle('hide');
    mobileMenuCanvasList.classList.toggle('show');
    mobileMenuIcons[0].classList.toggle('hide');
    mobileMenuIcons[1].classList.toggle('hide');
  });
}

const speakers = [
  {
    image: 'assets/speaker1.png',
    name: 'Chimamanda Adichie',
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consec',
  },
  {
    image: 'assets/fd.png',
    name: 'Fela Durotoye',
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consec',
  },
  {
    image: 'assets/speaker1.png',
    name: 'Chimamanda Adichie',
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consec',
  },
  {
    image: 'assets/speaker1.png',
    name: 'Chimamanda Adichie',
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consec',
  },
  {
    image: 'assets/speaker1.png',
    name: 'Chimamanda Adichie',
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consec',
  },
  {
    image: 'assets/speaker1.png',
    name: 'Chimamanda Adichie',
    title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consec',
  },
];

const speakersSection = document.querySelector('.speakers');
speakersSection.className = 'speakers';
const speakersSectionTitle = document.createElement('h2');
speakersSectionTitle.textContent = 'Featured Speakers';
const divider = document.createElement('hr');
const speakersList = document.createElement('ul');


const img = document.createElement('img');
img.src = 'assets/down.png';
img.className = 'down';
img.setAttribute('alt', 'more speakers arrow');
const span = document.createElement('span');
span.appendChild(img);
const button = document.createElement('button');
button.textContent = 'MORE';
button.appendChild(span);

speakersSection.append(speakersSectionTitle, divider, speakersList, button);

const moreSpeakersBtn = document.querySelector('.speakers button');

const showSpeakers = function (element) {
  
  moreSpeakersBtn.style.display = 'none';
  if (element.classList.contains('hide-speaker')){
    element.classList.remove('hide-speaker')
    element.classList.add('show-speaker')
  }
}

for (let i = 0; i < speakers.length; i += 1) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const speakerImg = document.createElement('img');
  speakerImg.src = speakers[i].image;
  div.appendChild(speakerImg);
  const speakerProfile = document.createElement('div');
  speakerProfile.className = 'speaker-profile';
  const speakerName = document.createElement('h3');
  speakerName.textContent = speakers[i].name;
  const speakerTitle = document.createElement('p');
  speakerTitle.textContent = speakers[i].title;
  const hr = document.createElement('hr');
  const speakerBio = document.createElement('p');
  speakerBio.textContent = speakers[i].bio;
  if (i <= 1) {
    li.className = 'show-speaker';
  }else {
    li.className = 'hide-speaker';
  }
  moreSpeakersBtn.addEventListener('click', () => {
    showSpeakers(li);
  });
  speakerProfile.append(speakerName, speakerTitle, hr, speakerBio);
  li.append(div, speakerProfile);
  speakersList.appendChild(li);
}




