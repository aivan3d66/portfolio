import style from "./Skills.module.scss";
import {SkillItem} from "./SkillItem/SkillItem";
import {BlockTitle} from "../../common/Title/BlockTitle";
import {DiReact} from "react-icons/di";
import {DiJavascript1} from "react-icons/di";
import {SiTypescript} from "react-icons/si";
import {SiRedux} from "react-icons/si";
import {SiJest} from "react-icons/si";
import {SiStorybook} from "react-icons/si";
import {SiGithub} from "react-icons/si";
import {SiSass} from "react-icons/si";
import {SiTailwindcss} from "react-icons/si";
import {SiMobx} from "react-icons/si";
import {SiGraphql} from "react-icons/si";
import {SiNodedotjs} from "react-icons/si";
import {SiCypress} from "react-icons/si";
import {SiStyledcomponents} from "react-icons/si";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, A11y} from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const Skills = () => {
    return (
        <section className={style.skillsContainer}>
            <BlockTitle title={"My skills"}/>
            <div className={style.skillsWrapper}>
                <ul className={style.skillsList}>
                    <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={0}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1120: {
                                slidesPerView: 3,
                            },
                            1230: {
                                slidesPerView: 4,
                            },

                        }}
                        centeredSlidesBounds={true}
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        grabCursor={true}
                    >
                        <SwiperSlide>
                            <li>
                                <DiJavascript1 className={style.skillItem__img}/>
                                <SkillItem
                                    title={"JavaScript"}
                                    text={"The love and pain of millions of programmers around the world"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiTypescript className={style.skillItem__img}/>
                                <SkillItem
                                    title={"TypeScript"}
                                    text={"This thing helps to love JavaScript"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <DiReact className={style.skillItem__img}/>
                                <SkillItem
                                    title={"React"}
                                    text={"Library? Software framework? We can argue on this subject for a very long time, and it doesn 't make any sense"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiRedux className={style.skillItem__img}/>
                                <SkillItem
                                    title={"Redux"}
                                    text={"A powerful library of state management for the proper construction of an application architecture"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiMobx className={style.skillItem__img}/>
                                <SkillItem
                                    title={"MobX"}
                                    text={"Anything that can be derived from the application state, should be. Automatically."}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiGraphql className={style.skillItem__img}/>
                                <SkillItem
                                    title={"GraphQL"}
                                    text={"Faster and powerful React APP without GrapQL? No thanks"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiNodedotjs className={style.skillItem__img}/>
                                <SkillItem
                                    title={"Node.js"}
                                    text={"If you need simple Back-end, just leave it to this guy"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiCypress className={style.skillItem__img}/>
                                <SkillItem
                                    title={"Application testing"}
                                    text={"In my projects I use 'End to end' (Cypress <3), snapshot (Jest) and unit tests"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiStorybook className={style.skillItem__img}/>
                                <SkillItem
                                    title={"Storybook"}
                                    text={"It streamlines UI development, testing, and documentation"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiGithub className={style.skillItem__img}/>
                                <SkillItem
                                    title={"GIT"}
                                    text={"Where the world builds software"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiSass className={style.skillItem__img}/>
                                <SkillItem
                                    title={"SASS"}
                                    text={"Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiTailwindcss className={style.skillItem__img}/>
                                <SkillItem
                                    title={"Tailwind CSS"}
                                    text={"I feel like an idiot for not using this amazing thing until now"}
                                />
                            </li>
                        </SwiperSlide>
                        <SwiperSlide>
                            <li>
                                <SiStyledcomponents className={style.skillItem__img}/>
                                <SkillItem
                                    title={"Styled components"}
                                    text={"Everything can be better than vanilla CSS. Styled components better than everything :)"}
                                />
                            </li>
                        </SwiperSlide>
                    </Swiper>
                </ul>
            </div>
        </section>
    )
}
