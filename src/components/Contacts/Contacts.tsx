import style from "./Contacts.module.scss";
import {BlockTitle} from "../../common/Title/BlockTitle";

export const Contacts = () => {
  return (
    <section className={style.contactsContainer}>
      <BlockTitle title={"Contacts"}/>

      <div className={style.contactsWrapper}>
        <form className={style.contactsForm} action="#">
          <div className={style.contactsForm__fields}>
            <input type="text" placeholder={"Name"}/>
            <input type="text" placeholder={"E-mail"}/>
            <textarea placeholder={"Your message"}/>
          </div>
          <button type="submit" className={style.contactsForm__btn}>Send</button>
        </form>
      </div>
    </section>
  )
}
