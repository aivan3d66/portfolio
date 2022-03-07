import style from "./SkillItem.module.scss";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';

type SkillItemType = {
  title: string,
  text: string
}

export const SkillItem: React.FC<SkillItemType> = ({title, text}) => {
  return (
    <div className={style.skillItem}>
      <FontAwesomeIcon icon={faReact} className={style.skillItem__img}/>
      <h3 className={style.skillItem__title}>{title}</h3>
      <p className={style.skillItem__text}>{text}</p>
    </div>
  )
}
