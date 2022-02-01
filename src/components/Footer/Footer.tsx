import style from './Footer.module.css';
import { Socials } from './Socials/Socials';

export const Footer = () => {
  return (
    <section className={style.footerContainer}>
      <h2>Ivan Adamouski</h2>
      <div className={style.footerWrapper}>
        <Socials/>
        <div className={style.footerInform}>
          2022 All rights reserved
        </div>
      </div>
    </section>
  )
}
