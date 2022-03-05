import style from "./AboutMe.module.scss";

export const AboutMe = () => {
  return (
    <section className={style.aboutContainer}>
      <div className={style.aboutWrapper}>
        <div className={style.aboutText}>
          <span className={style.aboutText__greeting}>Hello there!</span>
          <span className={style.aboutText__name}>My name is Ivan Adamouski</span>
          <span className={style.aboutText__profession}>And I am a Front-end Developer</span>
        </div>
        <div className={style.aboutImage}>
          *beautiful me*
        </div>
      </div>
    </section>
  )
}
