import style from "./Works.module.scss";
import {WorkItem} from "./WorkItem/WorkItem";
import {BlockTitle} from "../../common/Title/BlockTitle";
import todos from "./../../assets/images/todos.png";
import trip from "./../../assets/images/trip.png"
import social from "./../../assets/images/social.png"

export const Works = () => {
  const todoListBgImg = {
    backgroundImage: 'url(' + todos + ')',
  };
  const socialNetworkBgImg = {
    backgroundImage: 'url(' + trip + ')',
  };
  const bigTripBgImg = {
    backgroundImage: 'url(' + social + ')',
  };

  return (
    <section className={style.worksContainer}>
      <BlockTitle title={"My works"}/>
      <div className={style.worksWrapper}>
        <div className={style.worksList}>
          <WorkItem
            title={"Todo List"}
            description={"Simple todo list with storage of data on remote server. Technology stack: React, Redux, REST API, Storybook, Unit and snapshot tests"}
          />
          <WorkItem
            title={"Social Network"}
            description={"Mini-version of Social network. It is possible to write messages to another users, add posts, and search for new friends."}
          />
          <WorkItem
            title={"Big trip"}
            description={"Features: The MVP architectural pattern is used, based on the Object-oriented programming (classes)"}
          />
        </div>
      </div>
    </section>
  )
}
