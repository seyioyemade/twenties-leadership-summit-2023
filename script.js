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
    image: 'assets/fd.png',
    name: 'Fela Durotoye',
    title: 'Executive Coach, Leadership Expert',
    bio: 'Fela Durotoye is highly regarded as one of Africa’s leading Executive Coaches. He is an official member of the Forbes Coaches Council.',
  },
  {
    image: 'assets/Ibukun-Awosika.png',
    name: 'Ibukun Awosika',
    title: 'Business Woman, Motivational Speaker',
    bio: 'Ibukun Awosika was appointed a member of Binance Global Board in 2022. She was appointed a member of Binance Global Advisory Board in September 2022.',
  },
  {
    image: 'assets/speaker1.png',
    name: 'Chimamanda Adichie',
    title: 'Author, Publisher',
    bio: 'Chimamanda is an award winning writer of numerous books, sold in over 100 languages.',
  },
  {
    image: 'assets/vusi.png',
    name: 'Vusi Thembekwayo',
    title: 'Venture Capitalist',
    bio: 'Vusi Thembekwayo is a South African venture capitalist and entrepreneur and the Founding CEO of MyGrowthFund & IC Knowledge Bureau.',
  },
  {
    image: 'assets/John-Obidi.png',
    name: 'John Obidi',
    title: 'Entrepreneur, Consultant',
    bio: 'John Obidi is a New Media Consultant, International Speaker and Personal Development Trainer.',
  },
  {
    image: 'assets/Ifedayo.png',
    name: 'Ifedayo Agoro',
    title: 'Content and Media Strategist',
    bio: 'Ife owns an online community that inspires women to lead better lives. She is the founder and creative lead of DANG!.',
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
  if (element.classList.contains('hide-speaker')) {
    element.classList.remove('hide-speaker');
    element.classList.add('show-speaker');
  }
};

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
  } else {
    li.className = 'hide-speaker';
  }
  moreSpeakersBtn.addEventListener('click', () => {
    showSpeakers(li);
  });
  speakerProfile.append(speakerName, speakerTitle, hr, speakerBio);
  li.append(div, speakerProfile);
  speakersList.appendChild(li);
}
