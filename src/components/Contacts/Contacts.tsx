import style from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <section className={style.contactsContainer}>
      <h2>Contacts</h2>
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
