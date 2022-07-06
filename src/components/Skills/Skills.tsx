import React from 'react'
import style from './Skills.module.scss'
import { SkillItem } from './SkillItem/SkillItem'
import { BlockTitle } from '../../common/Title/BlockTitle'
import { SkillIcon } from './SkillIcon/SkillIcon'
import { skillsData } from '../../data/mock-data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

export const Skills = () => {
    return (
        <section className={style.skillsContainer}>
            <BlockTitle title={'My skills'} />
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
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        grabCursor={true}
                    >
                        {
                            skillsData.map((item, index: number) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <li>
                                            <SkillIcon icon={item.icon} />
                                            <SkillItem
                                                title={item.title}
                                                text={item.text}
                                            />
                                        </li>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </ul>
            </div>
        </section>
    )
}
