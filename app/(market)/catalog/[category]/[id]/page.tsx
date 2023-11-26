import axios from 'axios';
import Breadcrumps from '@/app/_src/components/breadcrumps';
import { IProducts } from '@/app/_src/models/IProducts';
import ProductSlider from '@/app/_src/components/productSlider';
import Sizes from '@/app/_src/components/sizes';
import InfoSlider from '@/app/_src/components/infoSlider';

const getProduct = async (id: number) => {
    const product: IProducts = await axios.get(`${process.env.URL}/products`, { params: { id: id } });

    return product.data;
};

const Product = async ({ params }: { params: { category: string; id: number } }) => {
    const product = (await getProduct(params.id)) as IProducts;

    return (
        <section className='mx-auto w-[95%] pt-24'>
            <Breadcrumps categoryId={product.categoryId} name={product.name} />
            <div className='flex w-full gap-[40px] text-xl'>
                <ProductSlider images={product.images} />
                <div className='mt-[50px] w-full'>
                    <h1>{product.name}</h1>
                    <p className='mt-[20px] text-xl font-light text-gray-500'>{product.price} ₽</p>
                    <p className='mt-[50px] text-sm uppercase'>Размеры</p>
                    <Sizes sizes={product.sizes} price={product.price} category={product.categoryId} />
                </div>
            </div>
            <InfoSlider product={product} />
        </section>
    );
};

export default Product;
