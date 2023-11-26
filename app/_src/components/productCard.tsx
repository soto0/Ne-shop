import Link from 'next/link';
import Image from 'next/image';
import { IProducts } from '../models/IProducts';
import { categoryHandler } from '../utils/categoryHandler';

interface ProductCardProps {
    item: IProducts;
}

const ProductCard = ({ item }: ProductCardProps) => {
    const category = { ...categoryHandler(item.categoryId) };
    return (
        <Link href={`catalog${category.path}`}>
            <Image src={item.images[0].url} width={315} height={157} alt={`slide-${item.images[0].id}`} className='mb-[20px] w-full' />
            <h4 className='mb-[8px] text-xl uppercase'>{item.name}</h4>
            <span className='text-base'>от {item.price} ₽</span>
        </Link>
    );
};

export default ProductCard;
