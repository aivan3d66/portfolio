import style from './Employ.module.scss';
import {BlockTitle} from "../../common/BlockTitle";

export const Employ = () => {
  return (
    <section className={style.employContainer}>
      <BlockTitle title={"Looking for remote work"}/>
      <div className={style.employWrapper}>
        <button>Hire me</button>
      </div>
    </section>
  )
}
