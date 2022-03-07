import style from "./SkillItem.module.scss";
import React from "react";

type SkillItemType = {
  title: string,
  text: string,
}

export const SkillItem: React.FC<SkillItemType> = ({title, text}) => {
  return (
    <div className={style.skillItem}>
      <h3 className={style.skillItem__title}>{title}</h3>
      <p className={style.skillItem__text}>{text}</p>
    </div>
  )
}
