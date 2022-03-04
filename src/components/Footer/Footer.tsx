import style from './Footer.module.scss';
import {Socials} from './Socials/Socials';

export const Footer = () => {
  return (
    <section className={style.footerContainer}>
      <div className={style.footerWrapper}>
        <h2>Ivan Adamouski</h2>
        <Socials/>
        <div className={style.footerInform}>
          2022 All rights reserved
        </div>
      </div>
    </section>
  )
}
