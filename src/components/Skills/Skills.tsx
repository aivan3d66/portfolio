import style from "./Skills.module.scss";
import {SkillItem} from "./SkillItem/SkillItem";
import {BlockTitle} from "../../common/Title/BlockTitle";

type SkillItemType = {
  id: number,
  title: string,
  text: string,
}
type SkillsType = Array<SkillItemType>

export const Skills = () => {
  return (
    <section className={style.skillsContainer}>
      <BlockTitle title={"My skills"}/>
      <div className={style.skillsWrapper}>
        <div className={style.skillsList}>
          <SkillItem
            title={"JavaScript"}
            text={"Every programmer has once killed entire hours to a funny little problem - two parameters, not in the order, variable that's somewhere with a big letter, but somewhere else not (Thank you JavaScript!"}
          />
          <SkillItem
            title={"TypeScript"}
            text={"This thing helps to love JavaScript"}
          />
          <SkillItem
            title={"React"}
            text={"Library? Software framework? We can argue on this subject for a very long time, and it doesn 't make any sense"}
          />
          <SkillItem
            title={"Redux"}
            text={"A powerful library of state management for the proper construction of an application architecture"}
          />
          <SkillItem
            title={"Unit test / Jest"}
            text={"TDD -  correct the error before the millions of your nerve cells die"}
          />
        </div>
      </div>
    </section>
  )
}
