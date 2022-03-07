import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<DefaultButtonPropsType> = ({...restProps}) => {
  const finalClassName = `${s.default}`

  return (
    <button className={finalClassName} {...restProps}/>
  )
}
