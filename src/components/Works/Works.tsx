import style from "./Works.module.scss";
import {WorkItem} from "./WorkItem/WorkItem";
import {BlockTitle} from "../../common/Title/BlockTitle";
import {WorksData} from "../../data/mock-data";

export const Works = () => {
  return (
    <section className={style.worksContainer}>
      <BlockTitle title={"My works"}/>
      <div className={style.worksWrapper}>
        <div className={style.worksList}>
          {
            WorksData.map((m, i: number) => {
              return (
                <WorkItem
                  key={i}
                  title={m.title}
                  description={m.description}
                  pagesLink={m.pagesLink}
                  githubLink={m.githubLink}
                  style={m.bgImage}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
