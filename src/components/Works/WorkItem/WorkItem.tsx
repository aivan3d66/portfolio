import s from "./WorkItem.module.scss";
import React, {CSSProperties} from "react";

type WorkItemType = {
  title: string,
  description: string,
  pagesLink: string
  style: CSSProperties | undefined
}

export const WorkItem: React.FC<WorkItemType> = ({title, pagesLink, description, style}) => {
  return (
    <div className={s.workItem}>
      <div className={s.workPreview} style={style}>
        <a className={s.workPreview__link} href={pagesLink}>Open</a>
      </div>
      <div className={s.workDescription}>
        <h3 className={s.workItem__title}>{title}</h3>
        <p className={s.workItem__text}>{description}</p>
      </div>
    </div>
  )
}
