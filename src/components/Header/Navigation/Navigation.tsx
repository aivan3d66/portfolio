import style from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <ul className={style.navList}>
      <li className={style.navList__item}>Main</li>
      <li className={style.navList__item}>Skills</li>
      <li className={style.navList__item}>Works</li>
      <li className={style.navList__item}>Contacts</li>
    </ul>
  )
}
