import style from './Employ.module.scss';
import {BlockTitle} from "../../common/Title/BlockTitle";
import {Button} from "../../common/Button/Button";

export const Employ = () => {
  return (
    <section className={style.employContainer}>
      <BlockTitle title={"Looking for remote work"}/>
      <div className={style.employWrapper}>
        <Button>Hire me</Button>
      </div>
    </section>
  )
}
