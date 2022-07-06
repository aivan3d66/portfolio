import React from 'react'
import style from '../Skills.module.scss'

export const SkillIcon: React.FC<any> = ({ icon }) => {
    const Icon = icon
    return <Icon className={style.skillItem__img} />
}
