import React from "react";
import s from "./BlockTitle.module.scss";

type BlockTitleType = {
  title: string
}

export const BlockTitle: React.FC<BlockTitleType> = ({title}) => {
  return (
    <div className={s.titleWrapper}>
      <h2 className={s.titleText}>{title}</h2>
    </div>
  )
}