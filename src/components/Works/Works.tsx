import style from "./Works.module.css";
import {WorkItem} from "./WorkItem/WorkItem";

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
    {id: 2, title: "Name of project", text: "project description"},
  ];

  const worksList = works.map(w => <WorkItem title={w.title}
                                             key={w.id}
                                             text={w.text}/>)

  return (
    <section className={style.worksContainer}>
      <h2>My works</h2>
      <div className={style.worksWrapper}>
        <div className={style.worksList}>
          {worksList}
        </div>
      </div>
    </section>
  )
}
