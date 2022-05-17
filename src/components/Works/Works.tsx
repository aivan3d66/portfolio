import style from "./Works.module.scss";
import {WorkItem} from "./WorkItem/WorkItem";
import {BlockTitle} from "../../common/Title/BlockTitle";
// @ts-ignore
import todo from "../../assets/images/todo-prew.PNG";
// @ts-ignore
import trip from "./../../assets/images/trip.PNG";
// @ts-ignore
import social from "./../../assets/images/social-prew.PNG";
// @ts-ignore
import maroon from "./../../assets/images/maroonPrewiev.PNG";
// @ts-ignore
import converter from "./../../assets/images/converter.PNG";
// @ts-ignore
import game from "./../../assets/images/game.PNG";
// @ts-ignore
import card from "./../../assets/images/card-prew.PNG";
// @ts-ignore
import movie from "./../../assets/images/movie.PNG";

export const Works = () => {
  const todoListBgImg = {
    backgroundImage: `url(${todo})`,
  };
  const socialNetworkBgImg = {
    backgroundImage: `url(${social})`,
  };
  const bigTripBgImg = {
    backgroundImage: `url(${trip})`,
  };
  const maroonBgImg = {
    backgroundImage: `url(${maroon})`,
  };
  const converterImg = {
    backgroundImage: `url(${converter})`,
  };
  const gameImg = {
    backgroundImage: `url(${game})`,
  };
  const cardImg = {
    backgroundImage: `url(${card})`,
  };
  const movieImg = {
    backgroundImage: `url(${movie})`,
  };

  return (
    <section className={style.worksContainer}>
      <BlockTitle title={"My works"}/>
      <div className={style.worksWrapper}>
        <div className={style.worksList}>
          <WorkItem
            style={todoListBgImg}
            title={"Todo List"}
            pagesLink={'https://aivan3d66.github.io/toDoList-TS/'}
            githubLink={'https://github.com/aivan3d66/toDoList-TS'}
            description={"Simple todo list with storage of data on remote server. Technology stack: React, Redux (Redux-thunk), REST API, Storybook, Unit and snapshot tests"}
          />
          <WorkItem
            style={cardImg}
            title={"Cards"}
            pagesLink={'https://ershisan99.github.io/cards/'}
            githubLink={'https://github.com/aivan3d66/cards'}
            description={"Team IT-INCUBATOR project. We used next technologies: JS, TypeScript, React, Redux, Redux-toolkit, Tailwind UI"}
          />
          <WorkItem
            style={bigTripBgImg}
            title={"Big trip"}
            pagesLink={'https://aivan3d66.github.io/Big-trip/'}
            githubLink={'https://github.com/aivan3d66/Big-trip'}
            description={"Features: The MVP architectural pattern is used, based on the Object-oriented programming (classes), Off-line mode (Service Worker)"}
          />
          <WorkItem
            style={socialNetworkBgImg}
            title={"Social Network"}
            pagesLink={'https://aivan3d66.github.io/socialNetwork-project/'}
            githubLink={'https://github.com/aivan3d66/socialNetwork-project'}
            description={"Mini-version of Social network. It is possible to write messages to another users, add posts, and search for new friends."}
          />
          <WorkItem
            style={maroonBgImg}
            title={"Maroon"}
            pagesLink={'https://aivan3d66.github.io/Maroon/'}
            githubLink={'https://github.com/aivan3d66/Maroon'}
            description={"E-shop website with main, catalog, product card pages. Adaptive design (desktop, tablet, mobile) flex and grid-based layout, \"Mobile first\""}
          />
          <WorkItem
            style={converterImg}
            title={"Currency exchange"}
            pagesLink={'https://currency-exchange-converter.herokuapp.com/'}
            githubLink={'https://github.com/aivan3d66/currency-converter'}
            description={"Simple Currency exchange app. Using stack: React + MobX library of state management, Styled components and Heroku deploying"}
          />
          <WorkItem
            style={movieImg}
            title={"Movie-graph"}
            pagesLink={'https://movie-graph-front.herokuapp.com/'}
            githubLink={'https://github.com/aivan3d66/movie-graph'}
            description={"Movie-manager APP. For Back-end I used: Node.js + Express, GraphQl, MongoDB and Front-end: React, Apollo GraphQL, Material UI. All this stuff deploying to Heroku"}
          />
          <WorkItem
            style={gameImg}
            title={"2048"}
            pagesLink={'https://the-2048-game-vanilla-js.herokuapp.com/'}
            githubLink={'https://github.com/aivan3d66/game-2048'}
            description={"A copy of a famous mobile game created with React.js and Heroku deploying"}
          />
        </div>
      </div>
    </section>
  )
}
