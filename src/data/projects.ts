import { Project } from "@/types/Project";

export const projects: Project[] = [
    {
    title: "HrzNovels Library",
    description:
      "Full-stack web app for browsing and reading Chinese web novels. Features advanced filtering by genres/tags, search, sorting (ASC/DESC), user reviews, ratings, bookmarks, and authentication. Built with Next.js 15, NestJS, TypeORM, and PostgreSQL.",
    demoLink: "https://hrznovels-client.vercel.app/",
    codeLink: "https://github.com/horizon-git/hrznovels-client",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Material-UI",
      "SCSS",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
    ],
    imgURL1: "/library1.png",
    imgURL2: "/library2.png",
    inDevelopment: true,
  },
  {
    title: "WeatherApp",
    description:
      "This is a weather application that shows current weather and forecasts for any city using the OpenWeatherMap API. It features a clean user interface, responsive layout, and real-time data updates. Built with React/Next.js and deployed on Vercel, the project demonstrates API integration and modern frontend development practices.",
    demoLink:
      "https://weather-2yoljejuq-oleksandrs-projects-d632d341.vercel.app/",
    codeLink: "https://github.com/Horizon-git/weather-app",
    technologies: [
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Next.js",
      "Typescript",
      "React Query",
    ],
    imgURL1: "/weather1.png",
    imgURL2: "/weather2.png",
  },
  {
    title: "GroupChat",
    description:
      "This is a simple chat application where user after typing his name can join room to chat between other users. Also user can create and delete rooms.",
    demoLink: "https://horizon-git.github.io/group-chat/",
    codeLink: "https://github.com/Horizon-git/group-chat",
    technologies: [
      "HTML5",
      "Sass(SCSS)",
      "TailwindCSS",
      "React.js",
      "Typescript",
      "Express.js",
      "PostgreSQL",
      "Websockets",
    ],
    imgURL1: "/chat1.png",
    imgURL2: "/chat2.png",
  },
  {
    title: "GadgetGrove",
    description:
      "It is adaptive web store where you can choose phone, tablet or accessory. It has such functions as filtration, sorting, pagination and theme swither. All products in cart stored in localstorage. Data form API is loaded into redux store.",
    demoLink: "https://horizon-git.github.io/gadget-store/",
    codeLink: "https://github.com/Horizon-git/gadget-store",
    technologies: [
      "HTML5",
      "Sass(SCSS)",
      "BEM",
      "React.js",
      "Redux",
      "Typescript",
    ],
    imgURL1: "/gadget2.png",
    imgURL2: "/gadget1.png",
  },
  {
    title: "Taskify",
    description:
      "Taskify is a web application for creating task lists in the browser. Users can add, delete, mark tasks as completed and filter tasks.",
    demoLink: "https://horizon-git.github.io/vue-todo-app/",
    codeLink: "https://github.com/Horizon-git/vue-todo-app",
    technologies: ["HTML5", "Sass(SCSS)", "BEM", "Vue.js"],
    imgURL1: "/todo1.png",
    imgURL2: "/todo2.png",
  },
  {
    title: "TileTango game",
    description:
      "2048 is a browser game where the player moves tiles on a grid. When two tiles with the same number touch, they merge into one, with the sum of the numbers on them. The goal of the game is to reach the 2048 tile. If the grid fills up and no more moves can be made, the game ends.",
    demoLink: "https://horizon-git.github.io/2048-game/",
    codeLink: "https://github.com/Horizon-git/2048-game",
    technologies: ["HTML5", "CSS", "Javascript"],
    imgURL1: "/2048.png",
    imgURL2: "/2048_2.png",
  },
  {
    title: "TerraPot landing",
    description:
      "Landing page for a Potr Pots website. It is demonstrates interesting design with modern backgrounds for sections, shows the gallery and provides contact us form.",
    demoLink: "https://horizon-git.github.io/potr-pots-landing/",
    codeLink: "https://github.com/Horizon-git/potr-pots-landing",
    technologies: ["HTML5", "Sass(SCSS)", "BEM", "Javascript"],
    imgURL1: "/pots1.png",
    imgURL2: "/pots2.png",
  },
  {
    title: "ArtMuseum landing",
    description:
      "Landing page for a museum. It is demonstrates actual events, shows the gallery and provides form for the email newsletter.",
    demoLink: "https://horizon-git.github.io/museum-landing/",
    codeLink: "https://github.com/Horizon-git/museum-landing",
    technologies: ["HTML5", "Sass(SCSS)", "BEM", "Javascript"],
    imgURL1: "/museum1.png",
    imgURL2: "/museum2.png",
  },
  {
    title: "NothingTech landing",
    description:
      "Landing page for a mobile phone store. It demonstrates recommended products, describes the main characteristics and advantages and provides a contact form.",
    demoLink: "https://horizon-git.github.io/nothing-landing/",
    codeLink: "https://github.com/Horizon-git/nothing-landing",
    technologies: ["HTML5", "Sass(SCSS)", "BEM"],
    imgURL1: "/nothing1.png",
    imgURL2: "/nothing2.png",
  },
];
