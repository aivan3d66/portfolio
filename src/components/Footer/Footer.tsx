import style from './Footer.module.css';

export const Footer = () => {
  return (
    <section className={style.headerContainer}>
      <div className={style.headerWrapper}>
        <Navigation/>
      </div>
    </section>
  )
}
