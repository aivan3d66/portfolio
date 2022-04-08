import style from './Employ.module.scss';
import {BlockTitle} from "../../common/Title/BlockTitle";

export const Employ = () => {
    return (
        <section className={style.employContainer}>
            <BlockTitle title={"A little bit about me"}/>
            <div className={style.employWrapper}>
                <p>
                    Hello there! I'm Front-end developer with strong experience in creating professional Web-interfaces,
                    Landing pages and SPA. After working as a freelancer, I would like to join some ambitious team
                    to expand my professional skills. My free time is dedicated to solving katas on Codewars,
                    improvement my technical skills and boosting my English. I plan to learn powerful framework in the
                    near future,
                    Angular or Vue.js I haven 't decided yet. I am always happy to learn something new
                    (especially, if it is still in front-end branch) :)
                </p>
                <p>
                    P.S. If you read this text, may the IT-Force be with you! ^_^
                </p>
            </div>
        </section>
    )
}
