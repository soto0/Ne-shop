'use client';

import { useState } from 'react';
import { ISizes } from '../models/ISizes';

interface SizesProps {
    sizes: ISizes[];
    price: number;
    category: number;
}

const Sizes = ({ sizes, price, category }: SizesProps) => {
    const [size, setSize] = useState<number | string>(category === 1 ? 36 : 'M');

    const addProduct = () => {
        console.log('add product');
    };

    return (
        <div>
            <div className='mt-[30px] grid grid-cols-4 gap-[4px]'>
                {sizes.map((item) => {
                    return (
                        <button
                            onClick={() => {
                                setSize(item.size);
                            }}
                            className={`flex h-[52px] cursor-pointer flex-col items-center justify-center rounded  transition-all  ${
                                size === item.size ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        >
                            <p className='text-base font-light'>{item.size}</p>
                            <p className={`text-sm font-light ${size === item.size ? 'text-white' : 'text-gray-500'}`}>{price} ₽</p>
                        </button>
                    );
                })}
            </div>
            <button
                className='mt-[270px] flex w-full gap-[10px] rounded bg-black p-[10px] text-base uppercase text-white'
                onClick={() => addProduct()}
            >
                <span className='mt-[1px]'>{size}</span> <span className='text-gray-500'>|</span> <span className='mx-auto'>добавить в корзину</span>
            </button>
        </div>
    );
};

export default Sizes;
