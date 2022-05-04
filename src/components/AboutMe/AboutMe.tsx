import React, {useState, useEffect, useRef} from 'react';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import style from "./AboutMe.module.scss";
import photo1 from "./../../assets/images/photo1.jpg";
import {motion} from 'framer-motion';

const list = {
  hidden: {
    opacity: 1,
    transition: {when: "afterChildren"}
  }
}

const item = {
  hidden: {
    opacity: 1,
    transition: {duration: 2}
  }
}
const container = {
  hidden: { opacity: 0, x: -1000},
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1,
      delay: 2
    }
  }
}
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
    <motion.section
      animate="hidden"
      variants={list}
      id="my-background"
      className={style.aboutContainer}
      ref={myRef}
    >
      <div className={style.aboutWrapper}>
        <motion.div
          variants={item}
          animate="hidden"
          className={style.aboutText}
        >
          <span className={style.aboutText__greeting}>Hello there!</span>
          <span className={style.aboutText__name}>My name is<br/>
            <b>Ivan Adamouski</b>
          </span>
          <span className={style.aboutText__profession}>And I am a Front-end Developer</span>
        </motion.div>
        <motion.div
          className={style.aboutImage}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src={photo1}
            alt="avatar"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}

          />
        </motion.div>
      </div>
    </motion.section>
  )
}
