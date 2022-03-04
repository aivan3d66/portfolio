import {Navigation} from "./Navigation/Navigation";
import style from './Header.module.scss';

export const Header = () => {
  return (
    <section className={style.headerContainer}>
      <div className={style.headerWrapper}>
        <Navigation/>
      </div>
    </section>
  )
}
