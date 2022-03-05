import style from "./WorkItem.module.scss";
import React from "react";

type WorkItemType = {
  title: string,
  description: string
}

export const WorkItem: React.FC<WorkItemType> = ({title, description}) => {
  return (
    <div className={style.workItem}>
      <div className={style.workPreview}>
        <a className={style.workPreview__link} href={'#'}>Look</a>
      </div>
      <div className={style.workDescription}>
        <h3 className={style.workItem__title}>{title}</h3>
        <p className={style.workItem__text}>{description}</p>
      </div>
    </div>
  )
}
