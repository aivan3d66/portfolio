import style from "./Works.module.scss";
import {WorkItem} from "./WorkItem/WorkItem";
import {BlockTitle} from "../../common/BlockTitle";

type WorkItemType = {
  id: number,
  title: string,
  text: string,
}
type WorksType = Array<WorkItemType>

export const Works = () => {
  const works: WorksType = [
    {id: 1, title: "Name of project", text: "project description"},
    {id: 2, title: "Name of project", text: "project description"},
    {id: 3, title: "Name of project", text: "project description"},
  ];

  const worksList = works.map(w => <WorkItem title={w.title}
                                             key={w.id}
                                             text={w.text}/>)

  return (
    <section className={style.worksContainer}>
      <BlockTitle title={"My works"}/>
      <div className={style.worksWrapper}>
        <div className={style.worksList}>
          {worksList}
        </div>
      </div>
    </section>
  )
}
