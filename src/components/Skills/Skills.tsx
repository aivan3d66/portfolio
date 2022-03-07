import style from "./Skills.module.scss";
import {SkillItem} from "./SkillItem/SkillItem";
import {BlockTitle} from "../../common/Title/BlockTitle";
import {DiReact} from "react-icons/di";
import {DiJavascript1} from "react-icons/di";
import {SiTypescript} from "react-icons/si";
import {SiRedux} from "react-icons/si";
import {SiJest} from "react-icons/si";
import {SiStorybook} from "react-icons/si";

export const Skills = () => {
  return (
    <section className={style.skillsContainer}>
      <BlockTitle title={"My skills"}/>
      <div className={style.skillsWrapper}>
        <ul className={style.skillsList}>
          <li>
            <DiJavascript1 className={style.skillItem__img}/>
            <SkillItem
              title={"JavaScript"}
              text={"The love and pain of millions of programmers around the world"}
            />
          </li>
          <li>
            <SiTypescript className={style.skillItem__img}/>
            <SkillItem
              title={"TypeScript"}
              text={"This thing helps to love JavaScript"}
            />
          </li>
          <li>
            <DiReact className={style.skillItem__img}/>
            <SkillItem
              title={"React"}
              text={"Library? Software framework? We can argue on this subject for a very long time, and it doesn 't make any sense"}
            />
          </li>
          <li>
            <SiRedux className={style.skillItem__img}/>
            <SkillItem
              title={"Redux"}
              text={"A powerful library of state management for the proper construction of an application architecture"}
            />
          </li>
          <li>
            <SiJest className={style.skillItem__img}/>
            <SkillItem
              title={"Unit test / Jest"}
              text={"TDD -  correct the error before the millions of your nerve cells die"}
            />
          </li>
          <li>
            <SiStorybook className={style.skillItem__img}/>
            <SkillItem
              title={"Storybook"}
              text={"It streamlines UI development, testing, and documentation"}
            />
          </li>
        </ul>
      </div>
    </section>
  )
}
