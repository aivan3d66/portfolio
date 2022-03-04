import style from "./AboutMe.module.scss";

export const AboutMe = () => {
  return (
    <section className={style.aboutContainer}>
      <div className={style.aboutWrapper}>
        <div className={style.aboutText}>
          <span>Hello!</span>
          <span>My name is Ivan Adamouski</span>
          <span>I am a Front-end developer</span>
        </div>
        <div className={style.aboutImage}>
          *beautiful me*
        </div>
      </div>
    </section>
  )
}
