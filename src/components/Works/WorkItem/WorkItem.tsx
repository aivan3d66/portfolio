import style from "./WorkItem.module.css";
import React from "react";

type WorkItemType = {
  title: string,
  text: string
}

export const WorkItem: React.FC<WorkItemType> = ({title, text}) => {
  return (
    <div className={style.workItem}>
      <div className={style.workPreview}>
        <a className={style.workPreview__link} href={'#'}>Look</a>
      </div>
      <div className={style.workDescription}>
        <div className={style.workItem__title}>{title}</div>
        <div className={style.workItem__text}>{text}</div>
      </div>
    </div>
  )
}
