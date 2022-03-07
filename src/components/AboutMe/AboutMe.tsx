import style from "./AboutMe.module.scss";
import photo1 from "./../../assets/images/photo1.jpg";

export const AboutMe = () => {
  return (
    <section className={style.aboutContainer}>
      <div className={style.aboutWrapper}>
        <div className={style.aboutText}>
          <span className={style.aboutText__greeting}>Hello there!</span>
          <span className={style.aboutText__name}>My name <br/>
            <b>is Ivan Adamouski</b>
          </span>
          <span className={style.aboutText__profession}>And I am a Front-end Developer</span>
        </div>
        <div className={style.aboutImage}>
          <img src={photo1} alt="avatar"/>
        </div>
      </div>
    </section>
  )
}
