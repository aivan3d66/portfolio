import todo from '../assets/images/todo-prew.png'
import trip from '../assets/images/trip.png'
import social from '../assets/images/social-prew.png'
import maroon from '../assets/images/maroonPrewiev.png'
// import converter from '../assets/images/converter.png'
import game from '../assets/images/game.png'
import card from '../assets/images/card-prew.png'
import movie from '../assets/images/movie.png'
import shop from './../assets/images/foodShop-prew.png'
import { DiJavascript1, DiReact } from 'react-icons/di'
import {
    SiCypress,
    SiGithub,
    SiGraphql,
    SiMobx,
    SiNodedotjs,
    SiRedux,
    SiSass,
    SiStorybook, SiStyledcomponents, SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

export type WorkItemType = {
    title: string,
    pagesLink: string,
    githubLink: string,
    description: string,
    bgImage: string,
}
export type SkillsDataType = {
    title: string,
    text: string,
    icon: object,
}

export const WorksData = [
    {
        title: 'Todo List',
        pagesLink: 'https://aivan3d66.github.io/toDoList-TS/',
        githubLink: 'https://github.com/aivan3d66/toDoList-TS',
        description: 'Simple todo list with storage of data on remote server. Technology stack: React, Redux (Redux-thunk), REST API, Storybook, Unit and snapshot tests',
        bgImage: `url(${todo})`,
    },
    {
        title: 'Cards',
        pagesLink: 'https://ershisan99.github.io/cards/',
        githubLink: 'https://github.com/aivan3d66/cards',
        description: 'Team IT-INCUBATOR project. We used next technologies: TypeScript, React, Redux, Redux-toolkit, Tailwind UI',
        bgImage: `url(${card})`,
    },
    {
        title: 'Food-shop',
        pagesLink: 'https://aivan3d66.github.io/food-shop/',
        githubLink: 'https://github.com/aivan3d66/food-shop',
        description: 'Test project with strong stack. Front-end: TypeScript, React, Redux, Redux-toolkit, Apollo GraphQL, Styled Components. Back-end (deployed to Heroku): Node.js + Express, MongoDB, GraphQL',
        bgImage: `url(${shop})`,
    },
    {
        title: 'Big trip',
        pagesLink: 'https://aivan3d66.github.io/Big-trip/',
        githubLink: 'https://github.com/aivan3d66/Big-trip',
        description: 'Features: The MVP architectural pattern is used, based on the Object-oriented programming (classes), Off-line mode (Service Worker)',
        bgImage: `url(${trip})`,
    },
    {
        title: 'Social Network',
        pagesLink: 'https://aivan3d66.github.io/socialNetwork-project/',
        githubLink: 'https://github.com/aivan3d66/socialNetwork-project',
        description: 'Mini-version of Social network. It is possible to write messages to another users, add posts, and search for new friends.',
        bgImage: `url(${social})`,
    },
    {
        title: 'Maroon',
        pagesLink: 'https://aivan3d66.github.io/Maroon/',
        githubLink: 'https://github.com/aivan3d66/Maroon',
        description: 'E-shop website with main, catalog, product card pages. Adaptive design (desktop, tablet, mobile) flex and grid-based layout, "Mobile first"',
        bgImage: `url(${maroon})`,
    },
    // {
    //   title: 'Currency exchange',
    //   pagesLink: 'https://currency-exchange-converter.herokuapp.com/',
    //   githubLink: 'https://github.com/aivan3d66/currency-converter',
    //   description: 'Simple Currency exchange app. Using stack: React + MobX library of state management, Styled components and Heroku deploying',
    //   bgImage: `url(${converter})`,
    // },
    {
        title: 'Movie-graph',
        pagesLink: 'https://aivan3d66.github.io/movie-graph/',
        githubLink: 'https://github.com/aivan3d66/movie-graph',
        description: 'Movie-manager APP. For Back-end I used: Node.js + Express, GraphQl, MongoDB and Front-end: React, Apollo GraphQL, Material UI. All this stuff deploying to Heroku',
        bgImage: `url(${movie})`,
    },
    {
        title: '2048',
        pagesLink: 'https://the-2048-game-vanilla-js.herokuapp.com/',
        githubLink: 'https://github.com/aivan3d66/game-2048',
        description: 'A copy of a famous mobile game created with React.js and Heroku deploying',
        bgImage: `url(${game})`,
    },
] as Array<WorkItemType>

export const skillsData = [
    {
        title: 'JavaScript',
        text: '"The love and pain of millions of programmers around the world"',
        icon: DiJavascript1,
    },
    {
        title: 'TypeScript',
        text: 'This thing helps to love JavaScript',
        icon: SiTypescript,
    },
    {
        title: 'React',
        text: 'Library? Software framework? We can argue on this subject for a very long time, and it doesn \'t make any sense',
        icon: DiReact,
    },
    {
        title: 'Redux',
        text: 'A powerful library of state management for the proper construction of an application architecture',
        icon: SiRedux,
    },
    {
        title: 'MobX',
        text: 'Anything that can be derived from the application state, should be. Automatically.',
        icon: SiMobx,
    },
    {
        title: 'GraphQL',
        text: 'Faster and powerful React APP without GrapQL? No thanks',
        icon: SiGraphql,
    },
    {
        title: 'Node.js',
        text: 'If you need simple Back-end, just leave it to this guy',
        icon: SiNodedotjs,
    },
    {
        title: 'Application testing',
        text: 'In my projects I use \'End to end\' (Cypress <3), snapshot (Jest) and unit tests',
        icon: SiCypress,
    },
    {
        title: 'Storybook',
        text: 'It streamlines UI development, testing, and documentation',
        icon: SiStorybook,
    },
    {
        title: 'GIT',
        text: 'Where the world builds software',
        icon: SiGithub,
    },
    {
        title: 'SASS',
        text: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
        icon: SiSass,
    },
    {
        title: 'Tailwind CSS',
        text: 'I feel like an idiot for not using this amazing thing until now',
        icon: SiTailwindcss,
    },
    {
        title: 'Styled components',
        text: 'Everything can be better than vanilla CSS. Styled components better than everything :)',
        icon: SiStyledcomponents,
    },

] as Array<SkillsDataType>
