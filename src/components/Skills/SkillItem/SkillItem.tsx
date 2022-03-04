import style from "./SkillItem.module.scss";
import React from "react";

type SkillItemType = {
  title: string,
  text: string
}

export const SkillItem: React.FC<SkillItemType> = ({title, text}) => {
  return (
    <div className={style.skillItem}>
      <div className={style.skillItem__img}/>
      <div className={style.skillItem__title}>{title}</div>
      <div className={style.skillItem__text}>{text}</div>
    </div>
  )
}
