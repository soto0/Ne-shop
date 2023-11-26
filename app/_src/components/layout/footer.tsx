import Link from 'next/link';
import Image from 'next/image';
import VkIcon from '@/public/icons/vk.svg';
import TelegramIcon from '@/public/icons/telegram.svg';

const Footer = () => {
    return (
        <footer className='mt-auto bg-black py-10'>
            <div className='footer mx-auto grid w-[95%] gap-4'>
                <div>
                    <h4 className='mb-6 text-base font-bold uppercase text-white'>Разделы</h4>
                    <ul className='text-sm font-light uppercase text-white'>
                        <li className='mb-1'>
                            <Link href='#'>Sale</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>Обувь</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>Одежда</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>Акссесуары</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>Коллекции</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='mb-6 text-base font-bold uppercase text-white'>Информация</h4>
                    <ul className='text-sm font-light uppercase text-white'>
                        <li className='mb-1'>
                            <Link href='#'>Контакты</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>Доставка</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>Оплата</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>Возврат</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className='mb-6 text-base font-bold uppercase text-white'>Контакты</h4>
                    <ul className='text-sm font-light uppercase text-white'>
                        <li className='mb-1'>
                            <Link href='tel:84955681212'>8 (495) 568-12-12</Link>
                        </li>
                        <li className='mb-1'>ЧАСЫ РАБОТЫ (С 11:00 ДО 22:00)</li>
                        <li className='mb-1'>
                            <Link href='mailto:SUPPORT@NIKITAEFREMOV.COM'>SUPPORT@NIKITAEFREMOV.COM</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='mr-5'>
                            <Image src={VkIcon as string} width={36} height={36} alt='vk' />
                        </li>
                        <li className='mr-5'>
                            <Image src={TelegramIcon as string} width={36} height={36} alt='telegram' />
                        </li>
                    </ul>
                </div>
                <div className='flex items-end'>
                    <p className='text-sm font-light text-white'>2018-2023 Ⓒ NIKITA EFREMOV</p>
                </div>
                <div className='flex items-end'>
                    <p className='text-sm font-light text-white'>ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
                </div>
                <div>
                    <ul className='text-sm font-light uppercase text-white'>
                        <li className='mb-1'>МОСКВА, ПЕТРОВКА 15/1</li>
                        <li className='mb-1'>МОСКВА, ЦВЕТНОЙ БУЛЬВАР, 15, УНИВЕРМАГ &quot;ЦВЕТНОЙ&quot;, 2 ЭТАЖ</li>
                        <li className='mb-1'>САНКТ-ПЕТЕРБУРГ, НЕВСКИЙ ПРОСПЕКТ, 150</li>
                    </ul>
                    <ul className='text-sm font-light uppercase text-white underline'>
                        <li className='mb-1'>
                            <Link href='#'>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ В МАГАЗИНЕ NIKITA EFREMOV</Link>
                        </li>
                        <li className='mb-1'>
                            <Link href='#'>ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ ДОГОВОР ОФЕРТЫ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
