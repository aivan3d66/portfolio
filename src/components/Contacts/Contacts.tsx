import style from "./Contacts.module.scss";
import {BlockTitle} from "../../common/Title/BlockTitle";
import {Button} from "../../common/Button/Button";
import React, {FormEvent, useRef} from "react";
import emailjs from '@emailjs/browser';
import {init} from '@emailjs/browser';

init("z7UUPdA3csP5V8Jrx");

export const Contacts = () => {
  const form = useRef<any>();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_lr0n7yj', 'template_6mdnqmr', form.current, 'z7UUPdA3csP5V8Jrx')
      .then((result) => {
        alert('Thanks for your message! <3')
      }, (error) => {
        alert('Message send failed:' + error);
      });
    form.current.reset();
  };

  return (
    <section className={style.contactsContainer}>
      <BlockTitle title={"Contact"}/>

      <div className={style.contactsWrapper}>
        <form ref={form} className={style.contactsForm} onSubmit={sendEmail}>
          <div className={style.contactsForm__fields}>
            <input type="text" placeholder={"Name"} name="user_name" required/>
            <input type="email" placeholder={"E-mail"} name="user_email" required/>
            <textarea name="message" required/>
          </div>
          <Button type="submit">Send message</Button>
        </form>
      </div>
    </section>
  )
}

