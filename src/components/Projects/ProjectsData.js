import ATI_MAKER from '../../images/Projects Images/A.T.I Music Maker.jpg';
import TC_TEAM_CONNECTION from '../../images/Projects Images/T.C Team-Connection.jpg';
import PORTFOLIO_V1 from '../../images/Projects Images/Portfolio V1.jpg';
import SQL_CUSTOMERS from '../../images/Projects Images/SQL-Customers.jpg';
import HOTEL_BOOKING from '../../images/Projects Images/HotelBookingSystem.jpg';
import THE_RIVER from '../../images/Projects Images/The River.jpg';
import SPEED from '../../images/Projects Images/Speed.jpg';
import PORTFOLIO_V2 from '../../images/Projects Images/Portfolio V2.jpg';
import COVID19_STATICS from '../../images/Projects Images/COVID19-Statics.jpg';
import PORTFOLIO_V3 from '../../images/Projects Images/Portfolio V3.jpg';
import SPORT_EVENT_CALENDAR from '../../images/Projects Images/SportCalendar.jpg';
import STORYBOOK from '../../images/Projects Images/Storybook.jpg';
import {VisitButton } from './ProjectsStyle';



let ProjectsData = [
  {
    id: 1,
    title: "A.T.I Music Maker",
    description:
      "A.T.I Music Maker is a desktop application built on the (Electron framework, express, Tone.js, SQLite3) stack for my exam in 2020.",
    buttonText: "View Source",
    buttonLink: "",
    imgSrc: ATI_MAKER,
    link: "https://github.com/atikis87/A.T.I-Music-Maker",

  },
  {
    id: 2,
    title: "T.C Team-Connection",
    description:
      "Basically, T.C Team-Connection is a simple window that appears on your website to display text. Visitors can enter text in it and you can see it and reply from your own live chat backend.",
    buttonText: "View Source",
    buttonLink: "",
    imgSrc: TC_TEAM_CONNECTION,
    link: "https://github.com/atikis87/T.C-Team-Connection"
  },
  {
    id: 3,
    title: "Personal Website V1",
    description:
      "My first portfolio website I created with Bootstrap in 2019. I learned quite a bit about HTML, CSS. Since then, I think my web development and design skills have improved immensely.",
    buttonText: "View Source",
    buttonLink: "Visit Site",
    imgSrc: PORTFOLIO_V1,
    link: "https://github.com/atikis87/v1",
    html: <VisitButton href="https://atikis87.github.io/v1">Visit Site</VisitButton>

  },
  {
    id: 4,
    title: "SQL-Customers",
    description:
      "This is a database management application based on PHP. List table with 100 contacts to which new contacts can be added. Contacts can be edited and deleted. I used PhpMyAdmin to create the database.",
    buttonText: "View Source",
    buttonLink: "",
    imgSrc: SQL_CUSTOMERS,
    link: "https://github.com/atikis87/SQL-Customers"
  },
  {
    id: 5,
    title: "Hotel Booking System",
    description:
      "A simple Hotel Room booking system built with Java.",
    buttonText: "View Source",
    buttonLink: "",
    imgSrc: HOTEL_BOOKING,
    link: "https://github.com/atikis87/HotelBookingSystem"
  },
  {
    id: 6,
    title: "The River",
    description:
      "The classic River Crossing Game that I made with my own idea and Java graphics. I used JPanel, JFrame, Mouseevent and the OOP approach from a Java library.",
    buttonText: "View Source",
    buttonLink: "",
    imgSrc: THE_RIVER,
    link: "https://github.com/atikis87/The_River"
  },
  {
    id: 7,
    title: "Speed The Tuning Car",
    description:
      "This is a Java project I created in 2020 as part of my studies. A desktop application to help a cars rental company to manage their rentals.",
    buttonText: "View Source",
    buttonLink: "",
    imgSrc: SPEED,
    link: "https://github.com/atikis87/Speed_TheTuningCar"
  },
  {
    id: 8,
    title: "Personal Website V2",
    description:
      "My simple CV with React. Just an simple version of my resume I made with React. Definitely didn't need to use react, but at least I learned something.",
    buttonText: "View Source",
    buttonLink: "Visit Site",
    imgSrc: PORTFOLIO_V2,
    link: "https://github.com/atikis87/v2",
    html: <VisitButton href="https://atikis87.github.io/v2/">Visit Site</VisitButton>,
  },
  {
    id: 9,
    title: "Covid statistics with Vue",
    description:
      "Covid statistics system. A simple application that makes the world's corona virus infections visible.",
    buttonText: "View Source",
    buttonLink: "",
    imgSrc: COVID19_STATICS,
    link: "https://github.com/atikis87/covid-statistics-with-vue"
  },
  {
    id: 10,
    title: "Personal Website V3",
    description:
      "This is the third version of my Personal Portfolio website. ",
    buttonText: "View Source",
    buttonLink: "Visit Site",
    imgSrc: PORTFOLIO_V3,
    link: "https://github.com/atikis87/atikis87.github.io",
    html: <VisitButton href="https://atikis87.github.io/v3">Visit Site</VisitButton>
  },
  {
    id: 11,
    title: "Sport Event Calendar",
    description:
      "Sport calendar, for recording various sports events in a database. I used Vue technology for the frontend part. PHP laravel for backend and PHP admin for database creation.",
    buttonText: "View Source",
    imgSrc: SPORT_EVENT_CALENDAR,
    link: "https://github.com/atikis87/Sport_events_calendar"
  },
  {
    id: 12,
    title: "Storybook Restplatzbörse",
    description:
      "This is a practice task, with which I learned how to manage the storybook.The topic is holiday prices.",
    buttonText: "View Source",
    imgSrc: STORYBOOK,
    link: "https://github.com/atikis87/storybook-vue-example",
    html: <VisitButton href="https://atikis87.github.io/storybook-vue-example">Visit Site</VisitButton>
  },
];

export default ProjectsData;