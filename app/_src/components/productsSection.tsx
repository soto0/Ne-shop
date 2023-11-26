import Link from 'next/link';
import { IProducts } from '../models/IProducts';
import ProductCard from './productCard';

interface ProductsSectionProps {
    products: IProducts[];
    title: string;
}

const ProductsSection = ({ products, title }: ProductsSectionProps) => {
    return (
        <section className='mx-auto w-[95%]'>
            <div>
                <div className='mb-[50px] flex flex-row items-center justify-between'>
                    <h2 className='text-[44px] font-bold uppercase'>{title}</h2>
                    <Link href={`category/${products[0]?.categoryId}`} className='text-[22px] uppercase'>
                        Все модели
                    </Link>
                </div>
                <div className='mx-auto grid w-[93%] grid-cols-4 gap-[40px]'>
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
