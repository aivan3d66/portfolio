import React, {useState, useEffect, useRef} from 'react';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import style from "./AboutMe.module.scss";
import photo1 from "./../../assets/images/photo1.jpg";

export const AboutMe = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        color: 0x343a40,
        backgroundColor: 0x1f1f20,
        maxDistance: 27.00,
        spacing: 19.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section id="my-background" className={style.aboutContainer} ref={myRef}>
      <div className={style.aboutWrapper}>
        <div className={style.aboutText}>
          <span className={style.aboutText__greeting}>Hello there!</span>
          <span className={style.aboutText__name}>My name is<br/>
            <b>Ivan Adamouski</b>
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
