import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/icons/logo.png';
import WishListIcon from '@/public/icons/wishlist.svg';
import SearchIcon from '@/public/icons/search.svg';
import UserIcon from '@/public/icons/user.svg';
import BasketIcon from '@/public/icons/basket.svg';

const Header = () => {
    const user = cookies().get('user');

    return (
        <header className='bg-white'>
            <div className='fixed z-10 w-full bg-white py-4'>
                <div className='mx-auto flex w-[95%] flex-row items-center'>
                    <Link href='/'>
                        <Image src={Logo} width={26} height={44} alt='logo' />
                    </Link>
                    <ul className='mx-auto flex flex-row text-sm font-normal uppercase'>
                        <li className='headerMenuItem mx-6'>
                            <Link href='#'>Sale</Link>
                        </li>
                        <li className='headerMenuItem mx-6'>
                            <Link href='#'>Обувь</Link>
                        </li>
                        <li className='headerMenuItem mx-6'>
                            <Link href='#'>Одежда</Link>
                        </li>
                        <li className='headerMenuItem mx-6'>
                            <Link href='#'>Аксессуары</Link>
                        </li>
                        <li className='headerMenuItem mx-6'>
                            <Link href='#'>Коллекции</Link>
                        </li>
                        <li className='headerMenuItem mx-6'>
                            <Link href='#'>Бренды</Link>
                        </li>
                        <li className='headerMenuItem mx-6'>
                            <Link href='#'>Информация</Link>
                        </li>
                    </ul>
                    <ul className='flex flex-row items-center justify-end gap-3'>
                        <li className='cursor-pointer'>
                            <Image src={WishListIcon as string} width={24} height={21} alt='wishlist' />
                        </li>
                        <li className='cursor-pointer'>
                            <Image src={SearchIcon as string} width={24} height={21} alt='search' />
                        </li>
                        <li className='cursor-pointer'>
                            <Link href={`/${user && (!JSON.parse(user.value).error as unknown as string) !== undefined ? 'profile' : 'signin'}`}>
                                <Image src={UserIcon as string} width={24} height={21} alt='user' />
                            </Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Image src={BasketIcon as string} width={24} height={21} alt='basket' />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
