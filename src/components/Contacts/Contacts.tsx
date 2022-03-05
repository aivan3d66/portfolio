import style from "./Contacts.module.scss";
import {BlockTitle} from "../../common/BlockTitle";

export const Contacts = () => {
  return (
    <section className={style.contactsContainer}>
      <BlockTitle title={"Contacts"}/>

      <div className={style.contactsWrapper}>
        <form className={style.contactsForm} action="#">
          <div className={style.contactsForm__fields}>
            <input type="text"/>
            <input type="text"/>
            <textarea/>
          </div>
          <button className={style.contactsForm__btn}>Send</button>
        </form>
      </div>
    </section>
  )
}
