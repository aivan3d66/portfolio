import style from './Socials.module.scss';

export const Socials = () => {
  return (
    <ul className={style.socialsList}>
      <li className={style.socialsList__item}>vk</li>
      <li className={style.socialsList__item}>git</li>
      <li className={style.socialsList__item}>inst</li>
      <li className={style.socialsList__item}>fb</li>
    </ul>
  )
}
