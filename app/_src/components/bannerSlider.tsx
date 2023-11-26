'use client';

import Link from 'next/link';
import Image from 'next/image';
import { IBanner } from '../models/IBanner';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';

interface BannerSliderProps {
    banner: IBanner[];
}

const BannerSlider = ({ banner }: BannerSliderProps) => {
    return (
        <section className='mx-auto w-[95%] pt-24'>
            <Splide
                className='splide mx-auto w-[87%]'
                options={{
                    type: 'loop',
                    arrows: false,
                    gap: '300px',
                    drag: true,
                    autoplay: true,
                    speed: 1000,
                    interval: 5000,
                    keyboard: 'global'
                }}
            >
                {banner.map((item) => {
                    return (
                        <SplideSlide key={item.id}>
                            <Link href={`category/${item.id}`}>
                                <Image src={item.image} width={1824} height={600} alt={`slide-${item.id}`} />
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </section>
    );
};

export default BannerSlider;
