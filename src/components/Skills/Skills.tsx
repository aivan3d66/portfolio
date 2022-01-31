import style from "./Skills.module.css";
import {SkillItem} from "./SkillItem/SkillItem";

type SkillItemType = {
  id: number,
  title: string,
  text: string,
}
type SkillsType = Array<SkillItemType>

export const Skills = () => {
  const skills: SkillsType = [
    {id: 1, title: "React", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id: 2, title: "React", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    {id: 3, title: "React", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
  ];

  const skillsList = skills.map(skill => <SkillItem title={skill.title}
                                                    key={skill.id}
                                                    text={skill.text}/>)

  return (
    <section className={style.skillsContainer}>
      <h2>My skills</h2>
      <div className={style.skillsWrapper}>
        <div className={style.skillsList}>
          {skillsList}
        </div>
      </div>
    </section>
  )
}
