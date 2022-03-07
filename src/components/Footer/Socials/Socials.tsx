import style from './Socials.module.scss';
import {SiVk} from "react-icons/si";
import {SiGithub} from "react-icons/si";
import {SiLinkedin} from "react-icons/si";
import {SiFacebook} from "react-icons/si";

export const Socials = () => {
  return (
    <ul className={style.socialsList}>
      <li className={style.socialsList__item}>
        <a href="https://vk.com/aivan3d66">
          <SiVk/>
        </a>
      </li>
      <li className={style.socialsList__item}>
        <a href="https://github.com/aivan3d66">
          <SiGithub/>
        </a>
      </li>
      <li className={style.socialsList__item}>
        <a href="https://www.facebook.com/aivan3d66">
          <SiFacebook/>
        </a>
      </li>
      <li className={style.socialsList__item}>
        <a href="https://www.linkedin.com/in/ivan-adamouski-55a421227/">
          <SiLinkedin/>
        </a>
      </li>
    </ul>
  )
}
