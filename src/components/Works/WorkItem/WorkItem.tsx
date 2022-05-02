import s from "./WorkItem.module.scss";
import React, {CSSProperties} from "react";

type WorkItemType = {
  title: string,
  description: string,
  pagesLink: string,
  githubLink: string,
  style: CSSProperties | undefined
}

export const WorkItem: React.FC<WorkItemType> = ({title, pagesLink, description, githubLink, style}) => {
  return (
    <div className={s.workItem}>
      <div className={s.workPreview__wrapper}>
        <div className={s.workPreview} style={style} tabIndex={0}>
          <a className={s.workPreview__link} href={pagesLink} tabIndex={0} target="_blank">Demo</a>
          <a className={s.workPreview__link} href={githubLink} tabIndex={0} target="_blank">Code</a>
        </div>
      </div>
      <div className={s.workDescription}>
        <h3 className={s.workItem__title}>{title}</h3>
        <p className={s.workItem__text}>{description}</p>
      </div>
    </div>
  )
}
