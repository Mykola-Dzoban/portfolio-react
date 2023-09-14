import css from "./img/css.svg";
import sass from "./img/sass.svg";
import bootstrap from "./img/bootstrap.svg";
import styled from "./img/styled.svg";
import git from "./img/git.svg";
import github from "./img/github.svg";
import html from "./img/html.svg";
import javascript from "./img/javascript.svg";
import typescript from "./img/typescript.svg";
import node from "./img/node.svg";
import npm from "./img/npm.svg";
import linkedin from "./img/linkedin.svg";
import react from "./img/react.svg";
import redux from "./img/redux.svg";
import telegram from "./img/telegram.svg";
import twitter from "./img/twitter.svg";
import website from "./img/website.svg";

import backroads1 from "./img/projectsImg/backroads1.png";
import backroads2 from "./img/projectsImg/backroads2.png";
import backroads3 from "./img/projectsImg/backroads3.png";
import quote1 from "./img/projectsImg/quote1.png";
import quote2 from "./img/projectsImg/quote2.png";
import quote3 from "./img/projectsImg/quote3.png";
import sign1 from "./img/projectsImg/sign1.png";
import sign2 from "./img/projectsImg/sign2.png";
import sign3 from "./img/projectsImg/sign3.png";
import timer1 from "./img/projectsImg/timer1.png";
import timer2 from "./img/projectsImg/timer2.png";
import timer3 from "./img/projectsImg/timer3.png";
import twit1 from "./img/projectsImg/twit1.png";
import twit2 from "./img/projectsImg/twit2.png";
import twit3 from "./img/projectsImg/twit3.png";
import virtual1 from "./img/projectsImg/virtual1.png";
import virtual2 from "./img/projectsImg/virtual2.png";
import virtual3 from "./img/projectsImg/virtual3.png";
import unsplash1 from "./img/projectsImg/unsplash1.png";
import unsplash2 from "./img/projectsImg/unsplash2.png";
import unsplash3 from "./img/projectsImg/unsplash3.png";

/* ============== Main ============== */
export const mainGB = [
  {
    id: 1,
    h1: "Hi there!",
    p1: "My name is ",
    p2: "I am a ",
    name: "Mykola Dzoban",
    position: "Front-end developer",
  },
];
export const mainUA = [
  {
    id: 1,
    h1: "Привіт!",
    p1: "Мене звати ",
    p2: "Я - ",
    name: "Микола Дзьобань",
    position: "Front-end розробник",
  },
];
/* ============== Projects ============== */
export const projectsGB = [
  {
    id: 1,
    title: "Random quote",
    stack: "HTML + CSS + JS + API",
    description:
      'This website is a platform for displaying random quotes and their authors. The user can click the "New quote" button to get a new quote. All content and dynamic actions on the page are controlled by JavaScript, which is integrated through a script file.',
    githubLink: "https://github.com/Mykola-Dzoban/random-quote",
    pageLink: "https://mykola-dzoban.github.io/random-quote/",
    github,
    website,
    photos: [{ photo: quote1 }, { photo: quote2 }, { photo: quote3 }],
  },
  {
    id: 2,
    title: "Timer",
    stack: "React + CSS",
    description:
      'This website is a timer that allows users to set a specific time to keep track of hours, minutes and seconds. The user can set the time by clicking the "Set time" button and reset the timer to zero by clicking the "Reset time" button. The site uses the React library and component state to manage the time and its display.',
    githubLink: "https://github.com/Mykola-Dzoban/timer",
    pageLink: "https://mykola-dzoban.github.io/timer/",
    github,
    website,
    photos: [{ photo: timer1 }, { photo: timer2 }, { photo: timer3 }],
  },
  {
    id: 3,
    title: "Twitterskyi",
    stack: "React + Redux + CSS",
    description:
      "This website is a platform for displaying and creating posts. It uses the React library along with Redux to manage the state of the application. The site has a home page with a list of posts and a page for creating new posts, which can be accessed using the navigation bar.",
    githubLink: "https://github.com/Mykola-Dzoban/react21",
    pageLink: "https://mykola-dzoban.github.io/react21/",
    github,
    website,
    photos: [{ photo: twit1 }, { photo: twit2 }, { photo: twit3 }],
  },
  {
    ud: 4,
    title: "Sign form",
    stack: "React + Styled components",
    description:
      "This website is a platform for user authentication and registration. Using the SignIn and SignUp components, users can log in or register their account. The site also uses routing with the React Router library to navigate between authentication and registration pages.",
    githubLink: "https://github.com/Mykola-Dzoban/react20",
    pageLink: "https://mykola-dzoban.github.io/react20/",
    github,
    website,
    photos: [{ photo: sign1 }, { photo: sign2 }, { photo: sign3 }],
  },
  {
    id: 5,
    title: "Backroads",
    stack: "React",
    description:
      'This website is a travel and adventure resource. It provides information about various tours, including photos, dates, descriptions and prices. In addition, the site contains the "About Us", "Services" and "Contacts" sections to help users learn more about the company and its offerings.',
    githubLink: "https://github.com/Mykola-Dzoban/backroads-app",
    pageLink: "https://backroadscom.netlify.app/",
    github,
    website,
    photos: [
      { photo: backroads1 },
      { photo: backroads2 },
      { photo: backroads3 },
    ],
  },
  {
    id: 6,
    title: "Virtual Reality",
    stack: "HTML + CSS + JS",
    description:
      "This website presents a company that specialises in the production of virtual reality solutions and business consulting. The site offers information on the services provided by the company, including order management, social assistant, crypto platform, and others. In addition, it contains information about the company's experience and the opportunity to join them.",
    githubLink:
      "https://github.com/Mykola-Dzoban/sites/tree/main/virtual-reality-business-solutions",
    pageLink:
      "https://mykola-dzoban.github.io/sites/virtual-reality-business-solutions/",
    github,
    website,
    photos: [{ photo: virtual1 }, { photo: virtual2 }, { photo: virtual3 }],
  },
  {
    id: 7,
    title: "Unsplash images",
    stack: "React + React query + CSS + API",
    description:
      "This website is a collection of photos from Unsplash where users can search and browse different images using keywords. The site allows you to quickly find photos by various criteria, add them to your own projects or use them for various creative purposes. It is a great resource for photographers, designers and anyone who needs high-quality images for their projects.",
    githubLink: "https://github.com/Mykola-Dzoban/unsplash-images",
    pageLink: "https://free-unsplash-images.netlify.app/",
    github,
    website,
    photos: [{ photo: unsplash1 }, { photo: unsplash2 }, { photo: unsplash3 }],
  },
];
export const projectsUA = [
  {
    id: 1,
    title: "Random quote",
    stack: "HTML + CSS + JS + API",
    description:
      'Цей веб-сайт є платформою для відображення випадкових цитат та їх авторів. Користувач може натиснути кнопку "New quote" для отримання нової цитати, а також поділитися цитатою в Twitter за допомогою кнопки "Tweet". Весь вміст та динамічні дії на сторінці керуються за допомогою JavaScript, що інтегрований через скриптовий файл.',
    githubLink: "https://github.com/Mykola-Dzoban/random-quote",
    pageLink: "https://mykola-dzoban.github.io/random-quote/",
    github,
    website,
    photos: [{ photo: quote1 }, { photo: quote2 }, { photo: quote3 }],
  },
  {
    id: 2,
    title: "Timer",
    stack: "React + CSS",
    description:
      'Цей веб-сайт представляє собою таймер, який дозволяє користувачам встановлювати певний час для обліку годин, хвилин і секунд. Користувач може налаштувати час, натиснувши кнопку "Set time", а також скинути таймер до нульового значення кнопкою "Reset time". Сайт використовує бібліотеку React та стан компонент для управління часом та його відображенням.',
    githubLink: "https://github.com/Mykola-Dzoban/timer",
    pageLink: "https://mykola-dzoban.github.io/timer/",
    github,
    website,
    photos: [{ photo: timer1 }, { photo: timer2 }, { photo: timer3 }],
  },
  {
    id: 3,
    title: "Twitterskyi",
    stack: "React + Redux + CSS",
    description:
      "Цей веб-сайт є платформою для відображення та створення постів. Він використовує бібліотеку React разом з Redux для управління станом додатку. Сайт має головну сторінку зі списком постів і сторінку для створення нових постів, до яких можна перейти за допомогою навігаційної панелі.",
    githubLink: "https://github.com/Mykola-Dzoban/react21",
    pageLink: "https://mykola-dzoban.github.io/react21/",
    github,
    website,
    photos: [{ photo: twit1 }, { photo: twit2 }, { photo: twit3 }],
  },
  {
    id: 4,
    title: "Sign in/up",
    stack: "React + Styled components",
    description:
      "Цей веб-сайт представляє собою платформу для автентифікації та реєстрації користувачів. Використовуючи компоненти SignIn та SignUp, користувачі можуть увійти або зареєструвати свій обліковий запис. Сайт також має заголовок (Header) і використовує маршрутизацію за допомогою бібліотеки React Router для навігації між сторінками автентифікації та реєстрації.",
    githubLink: "https://github.com/Mykola-Dzoban/react20",
    pageLink: "https://mykola-dzoban.github.io/react20/",
    github,
    website,
    photos: [{ photo: sign1 }, { photo: sign2 }, { photo: sign3 }],
  },
  {
    id: 5,
    title: "Backroads",
    stack: "React",
    description:
      'Цей веб-сайт представляє собою туристичний ресурс для подорожей та пригод. Він надає інформацію про різні тури, включаючи фотографії, дати, описи та вартість. Крім того, сайт містить розділи "Про нас", "Послуги" та "Контакти", що допомагають користувачам дізнатися більше про компанію і її пропозиції.',
    githubLink: "https://github.com/Mykola-Dzoban/backroads-app",
    pageLink: "https://backroadscom.netlify.app/",
    github,
    website,
    photos: [
      { photo: backroads1 },
      { photo: backroads2 },
      { photo: backroads3 },
    ],
  },
  {
    id: 6,
    title: "Virtual Reality",
    stack: "HTML + CSS + JS",
    description:
      "Цей веб-сайт представляє компанію, яка спеціалізується на виробництві рішень в області віртуальної реальності та бізнес-консультінгу. Сайт пропонує інформацію про послуги, які надає компанія, включаючи управління замовленнями, соціального асистента, криптоплатформу та інші. Крім того, він містить інформацію про досвід компанії та можливість приєднатися до них.",
    githubLink:
      "https://github.com/Mykola-Dzoban/sites/tree/main/virtual-reality-business-solutions",
    pageLink:
      "https://mykola-dzoban.github.io/sites/virtual-reality-business-solutions/",
    github,
    website,
    photos: [{ photo: virtual1 }, { photo: virtual2 }, { photo: virtual3 }],
  },
  {
    id: 7,
    title: "Unsplash images",
    stack: "React + React query + CSS + API",
    description:
      "Цей веб-сайт - це колекція фотографій з Unsplash, де користувачі можуть шукати та переглядати різні зображення, використовуючи ключові слова. Сайт надає можливість швидко знайти фотографії за різними критеріями, додати їх до власних проектів або використовувати для різних творчих цілей. Це відмінний ресурс для фотографів, дизайнерів та всіх, хто потребує якісні зображення для своїх проектів.",
    githubLink: "https://github.com/Mykola-Dzoban/unsplash-images",
    pageLink: "https://free-unsplash-images.netlify.app/",
    github,
    website,
    photos: [{ photo: unsplash1 }, { photo: unsplash2 }, { photo: unsplash3 }],
  },
];
/* ============== Technologies ============== */
export const technologies = [
  { techUrl: html, techName: "HTML" },
  { techUrl: css, techName: "CSS" },
  { techUrl: sass, techName: "SASS" },
  { techUrl: bootstrap, techName: "BOOTSTRAP" },
  { techUrl: styled, techName: "STYLED COMPONENTS" },
  { techUrl: javascript, techName: "JAVASCRIPT" },
  { techUrl: typescript, techName: "TYPESCRIPT" },
  { techUrl: react, techName: "REACT" },
  { techUrl: redux, techName: "REDUX" },
  { techUrl: node, techName: "NODE.JS" },
  { techUrl: npm, techName: "NPM" },
  { techUrl: git, techName: "GIT" },
];
/* ============== Contacts ============== */
export const contacts = [
  {
    id: 1,
    icon: github,
    name: "GitHub",
    link: "https://github.com/Mykola-Dzoban",
  },
  {
    id: 2,
    icon: telegram,
    name: "Telegram",
    link: "https://t.me/nikalaaay",
  },
  {
    id: 3,
    icon: twitter,
    name: "Twitter",
    link: "https://twitter.com/gushidomo",
  },
  {
    id: 4,
    icon: linkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mykola-dzoban-9007a0261/",
  },
];
/* ============== Work experience ============== */
export const work = [
  {
    id: 1,
    position: "Junior recruiter",
    date: "Jan 2023 - Aug 2023",
  },
];
