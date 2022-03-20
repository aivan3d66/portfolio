import style from "./Works.module.scss";
import {WorkItem} from "./WorkItem/WorkItem";
import {BlockTitle} from "../../common/Title/BlockTitle";
// @ts-ignore
import todos from "../../assets/images/todos.PNG";
// @ts-ignore
import trip from "./../../assets/images/trip.PNG";
// @ts-ignore
import social from "./../../assets/images/social.PNG";

export const Works = () => {
  const todoListBgImg = {
    backgroundImage: `url(${todos})`,
  };
  const socialNetworkBgImg = {
    backgroundImage: `url(${social})`,
  };
  const bigTripBgImg = {
    backgroundImage: `url(${trip})`,
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
            description={"Simple todo list with storage of data on remote server. Technology stack: React, Redux (Redux-thunk), REST API, Storybook, Unit and snapshot tests"}
          />
          <WorkItem
            style={socialNetworkBgImg}
            title={"Social Network"}
            pagesLink={'https://aivan3d66.github.io/profile'}
            description={"Mini-version of Social network. It is possible to write messages to another users, add posts, and search for new friends."}
          />
          <WorkItem
            style={bigTripBgImg}
            title={"Big trip"}
            pagesLink={'https://aivan3d66.github.io/big-trip'}
            description={"Features: The MVP architectural pattern is used, based on the Object-oriented programming (classes)"}
          />
        </div>
      </div>
    </section>
  )
}
