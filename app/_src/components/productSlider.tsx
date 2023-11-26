'use client';

import React from 'react';
import Image from 'next/image';
import { IImages } from '../models/IImages';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

interface ProductSliderProps {
    images: IImages[];
}

const ProductSlider = ({ images }: ProductSliderProps) => {
    const mainRef = React.createRef<{ go: (id: number) => void }>();
    const thumbsRef = React.createRef();

    const handleThumbs = (id: number) => {
        if (mainRef.current) {
            mainRef.current.go(id);
        }
    };

    return (
        <div className='w-[174.9%] pt-[55px]'>
            <Splide
                hasTrack={false}
                ref={mainRef}
                className='splide mx-auto w-full'
                options={{
                    type: 'fade',
                    rewind: false,
                    gap: '1rem',
                    arrows: false,
                    pagination: false,
                    keyboard: 'global'
                }}
            >
                <SplideTrack>
                    {images.map((item) => {
                        return (
                            <SplideSlide key={item.id} className='cursor-pointer'>
                                <Image src={item.url} width={1824} height={600} alt={`slide-${item.id}`} />
                            </SplideSlide>
                        );
                    })}
                </SplideTrack>
            </Splide>
            <Splide
                className='splide w-full w-max'
                ref={thumbsRef}
                options={{
                    type: 'slide',
                    rewind: true,
                    pagination: false,
                    arrows: false,
                    fixedWidth: 70,
                    fixedHeight: 70,
                    focus: 'center',
                    isNavigation: true,
                    keyboard: 'global'
                }}
            >
                {images.map((item, index) => {
                    return (
                        <SplideSlide
                            key={item.id}
                            className='cursor-pointer !rounded-none !border-x-0 !border-b-[0.5px] !border-t-0 !border-gray-200 hover:!border-gray-800 active:!border-gray-800'
                        >
                            <Image
                                src={item.url}
                                width={1824}
                                height={600}
                                alt={`slide-${item.id}`}
                                onClick={() => {
                                    handleThumbs(index);
                                }}
                            />
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
};

export default ProductSlider;
