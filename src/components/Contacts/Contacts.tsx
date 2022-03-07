import style from "./Contacts.module.scss";
import {BlockTitle} from "../../common/Title/BlockTitle";
import {Button} from "../../common/Button/Button";

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
          <Button type="submit">Send message</Button>
        </form>
      </div>
    </section>
  )
}
