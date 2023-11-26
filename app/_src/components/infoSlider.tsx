'use client';

import React from 'react';
import { IProducts } from '../models/IProducts';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

interface InfoSliderProps {
    product: IProducts;
}

const InfoSlider = ({ product }: InfoSliderProps) => {
    const mainRef = React.createRef<{ go: (id: number) => void }>();
    const thumbsRef = React.createRef();

    const handleThumbs = (id: number) => {
        if (mainRef.current) {
            mainRef.current.go(id);
        }
    };

    return (
        <div className='pt-[80px]'>
            <Splide
                className='splide w-full w-max'
                ref={thumbsRef}
                options={{
                    type: 'slide',
                    rewind: true,
                    pagination: false,
                    arrows: false,
                    focus: 'center',
                    isNavigation: true,
                    keyboard: 'focused'
                }}
            >
                <SplideSlide
                    onClick={() => handleThumbs(0)}
                    className='!w-max !rounded-none  !border-x-0 !border-b-[0.5px] !border-t-0 !border-gray-200 p-[10px] hover:!border-gray-800'
                >
                    <span className='text-xl uppercase'>Детали</span>
                </SplideSlide>
                <SplideSlide
                    onClick={() => handleThumbs(1)}
                    className='!w-max !rounded-none  !border-x-0 !border-b-[0.5px] !border-t-0 !border-gray-200 p-[10px] hover:!border-gray-800'
                >
                    <span className='text-xl uppercase'>Способы доставки</span>
                </SplideSlide>
                <SplideSlide
                    onClick={() => handleThumbs(2)}
                    className='!w-max !rounded-none  !border-x-0 !border-b-[0.5px] !border-t-0 !border-gray-200 p-[10px] hover:!border-gray-800'
                >
                    <span className='text-xl uppercase'>Правила возврата</span>
                </SplideSlide>
                <SplideSlide
                    onClick={() => handleThumbs(3)}
                    className='!w-max !rounded-none  !border-x-0 !border-b-[0.5px] !border-t-0 !border-gray-200 p-[10px] hover:!border-gray-800'
                >
                    <span className='text-xl uppercase'>FAQ</span>
                </SplideSlide>
            </Splide>
            <Splide
                hasTrack={false}
                ref={mainRef}
                className='splide w-full'
                options={{
                    type: 'fade',
                    rewind: false,
                    gap: '1rem',
                    arrows: false,
                    pagination: false,
                    keyboard: 'focused'
                }}
            >
                <SplideTrack>
                    <SplideSlide className='flex gap-[20px]'>
                        <span className='font-base w-[174.9%] font-light'>{product.description}</span>
                        <div className='w-full'>
                            <div className='flex w-full justify-between border-b-[0.5px] border-gray-300 p-[10px]'>
                                <span className='text-base font-light text-gray-500'>Артикул</span>
                                <span>{product.number}</span>
                            </div>
                            <div className='flex w-full justify-between border-b-[0.5px] border-gray-300 p-[10px]'>
                                <span className='text-base font-light text-gray-500'>Бренд</span>
                                <span>{product.brand}</span>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='flex flex-col gap-[10px]'>
                            <h3 className='font-semibold'>
                                Мы работаем над тем, чтобы наши клиенты были самыми счастливыми, поэтому стараемся доставлять заказы максимально
                                быстро и комфортно для Вас.
                            </h3>
                            <h3 className='font-semibold'>Сейчас доступны следующие варианты доставки:</h3>
                            <span className='font-base'>- доставка в любой магазин NIKITA EFREMOV. </span>
                            <span className='font-base'>- доставка домой или в офис курьерской службой. </span>
                            <h3 className='font-semibold'>Доставка осуществляется для заказов, включающих не более 5-ти позиций.</h3>
                            <span className='font-base'>
                                - Доставка курьерской службой производится в рамках сроков обозначенных после оформления заказа. Доставка
                                осуществляется по России и СНГ
                            </span>
                            <span className='font-base'>
                                - Доставка в любой регион России и стран СНГ осуществляется курьерской службой. Срок доставки: от 3х рабочих дней.
                            </span>
                            <h3 className='font-semibold'>
                                Также Вы можете оформить индивидуальный заказ понравившегося Вам товара по 100% предоплате.
                            </h3>
                            <span className='font-base'>- Срок доставки: 7-14 рабочих дней.</span>
                            <span className='font-base'>
                                - После оформления заявки на индивидуальный заказ, персональный менеджер свяжется с Вами и подберет для Вас подходящий
                                размер.
                            </span>
                            <span className='font-base'>- Курьер уведомляет получателя о доставке за 30 минут до своего приезда.</span>
                            <span className='font-base'>
                                - Электронный чек, подтверждающий покупку, Вы получите по электронной почте, указанной при оформлении заказа.
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='flex flex-col gap-[10px]'>
                            <span className='font-base'>
                                Для возврата/обмена Товара Покупатель обязан отправить возвращаемый/обмениваемый Товар по адресу:
                            </span>
                            <h3 className='font-semibold'>Невский проспект, 150. Смольнинское, Центральный район, Санкт-Петербург 191024</h3>
                            <h3 className='font-semibold'>
                                Перед отправкой обмена/возврата Покупатель обязан уведомить Продавца, написав письмо на support@nikitaefremov.com
                            </h3>
                            <span className='font-base'>- К заказу на возврат/обмен должны быть приложен чек и товарная накладная.</span>
                            <span className='font-base'>
                                - При отправке почтовым отправлением либо курьерской службой возврат/обмен оформляется в виде посылки с описью
                                вложения с отметкой «Возврат товара»/ «Обмен товара».
                            </span>
                            <span className='font-base'>
                                - Отправка посылки с возвращаемым/обмениваемым товаром осуществляется за счет Покупателя.
                            </span>
                            <span className='font-base'>
                                - Продавец вправе в течение 10 рабочих дней с момента возврата товара ненадлежащего качества провести проверку его
                                качества.
                            </span>
                            <span className='font-base'>
                                - В случае, если Покупатель отказывается от товара надлежащего качества, Продавец возвращает денежные средства в
                                течение 10 дней с момента получения возвращаемого Товара.
                            </span>
                            <span className='font-base'>
                                - Покупатель не вправе отказаться от Товара надлежащего качества, имеющего индивидуально-определенные свойства, если
                                указанный Товар может быть использован исключительно приобретающим его потребителем.
                            </span>
                            <h3 className='font-semibold'>Возврат денежных средств может быть осуществлен одним из следующих способов:</h3>
                            <span className='font-base'>- Перечисление на расчетный счет, указанный Покупателем в Заявлении на возврат;</span>
                            <span className='font-base'>
                                - Путем перечисления на расчетный счет Покупателя, с которого производилась оплата (в случае оплаты банковской картой
                                на Сайте);
                            </span>
                            <span className='font-base'>- Наличными средствами, если оплата была осуществлена наличными средствами.</span>
                            <h3 className='font-semibold'>
                                Для возврата денежных средств на банковскую карту Покупателю необходимо заполнить «Заявление о возврате денежных
                                средств», которое высылается по требованию Продавца на электронный адрес Покупателя, и оправить его вместе с
                                приложением копии паспорта по адресу support@nikitaefremov.com. Возврат денежных средств будет осуществлен на
                                банковский счет Покупателя, указанный в заявлении, в течение 10 (Десяти) рабочих дней со дня получения «Заявление о
                                возврате денежных средств» Продавцом.
                            </h3>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className='flex flex-col gap-[10px]'>
                            <h3 className='font-semibold'>-Вы реализуете оригинальные товары?</h3>
                            <span className='font-base'>
                                Мы продаем только новые и 100% оригинальные товары. Мы не принимаем и не работаем с подделками, товарами с «серого
                                рынка» или заводскими вариантами. Мы гарантируем подлинность каждого проданного товара. Каждый из товаров,
                                представленных в NE, проходит тщательную проверку подлинности нашими экспертами.
                            </span>
                            <h3 className='font-semibold'>-Почему цена зависит от размера?</h3>
                            <span className='font-base'>
                                Все модели и размеры выпускаются в ограниченном количестве, стоимость каждого размера зависит от спроса на него на
                                рынке.
                            </span>
                            <h3 className='font-semibold'>-Какие размеры указаны на сайте?</h3>
                            <span className='font-base'>
                                Вы можете самостоятельно определить свой размер, воспользовавшись таблицей размеров на странице товара. Вся обувь на
                                сайте представлена в US размерах. Для удобства в таблице размеров показано соответствие US размеров с UK, EUR, RU
                                размерами и длиной стопы.
                            </span>
                            <h3 className='font-semibold'>-Чем занимается Ваш интернет-магазин?</h3>
                            <span className='font-base'>
                                Мы первые в России, кто начал заниматься поиском и продажей лимитированных кроссовок и вещей для широкой аудитории. Мы
                                стремимся сделать кроссовки более доступными для всех потребителей, и верим,что для каждого найдется пара, независимо
                                от бренда, стиля, размера и функции.
                            </span>
                            <h3 className='font-semibold'>-Гарантирована ли безопасность моих данных?</h3>
                            <span className='font-base'>
                                Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста, ознакомьтесь с
                                нашей Политикой конфиденциальности.
                            </span>
                        </div>
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    );
};

export default InfoSlider;
