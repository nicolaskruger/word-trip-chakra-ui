import { FC } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Slide } from "./Slide";

type SlideType = {
    src: string,
    title: string,
    subTitle: string,
    href: string,
}

const slidList: SlideType[] = [
    {
        src: "/slide/europe.jpg",
        title: "Europa",
        subTitle: "O continente mais antigo",
        href: "/continent/europe"
    },
    {
        src: "/slide/north-america.jpg",
        title: "America do Norte",
        subTitle: "O continente mais rico",
        href: "/continent/north-america"
    },
    {
        src: "/slide/south-america.jpg",
        title: "America do sul",
        subTitle: "O continente mais festeiro",
        href: "/continent/south-america",
    },
    {
        src: "/slide/asia.jpg",
        title: "Asia",
        subTitle: "O continente mais tecnologico",
        href: "/continent/asia"
    },
    {
        src: "/slide/africa.jpg",
        title: "Africa",
        subTitle: "O continente mais bonito",
        href: "/continent/africa"
    },
    {
        src: "/slide/australia.jpg",
        title: "Australia",
        subTitle: "O continente mais canguru",
        href: "/continent/australia"
    },
]

export const SectionBottom: FC = () => {
    return (
        <Swiper
            // install Swiper modules

            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {slidList.map((slide, index) => (
                <SwiperSlide key={`slide-${index}`} >
                    <Slide slide={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}  