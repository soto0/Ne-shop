import { Metadata } from 'next';
import axios from 'axios';
import BannerSlider from '@src/components/bannerSlider';
import ProductsSection from '@src/components/productsSection';
import { IBanner } from '../_src/models/IBanner';
import { IProducts } from '../_src/models/IProducts';

export const metadata: Metadata = {
    description: 'Лимитированные кроссовки и одежда',
    title: 'NIKITA EFREMOV: магазин лимитированных кроссовок и одежды'
};

const getBanner = async () => {
    const banners: IBanner = await axios.get(`${process.env.URL}/banners`);

    return banners.data;
};

const getProducts = async () => {
    const shoes: { data: IProducts[] } = await axios.get(`${process.env.URL}/products`, { params: { categoryId: 1, limit: 4 } });
    const clothes: { data: IProducts[] } = await axios.get(`${process.env.URL}/products`, { params: { categoryId: 2, limit: 4 } });
    const accessories: { data: IProducts[] } = await axios.get(`${process.env.URL}/products`, { params: { categoryId: 3, limit: 4 } });

    return { accessories: accessories.data, clothes: clothes.data, shoes: shoes.data };
};

const Home = async () => {
    const banner = await getBanner();
    const products = await getProducts();

    return (
        <div className='pb-[100px]'>
            <BannerSlider banner={banner} />
            <ProductsSection products={products.shoes} title='Обувь' />
            <ProductsSection products={products.clothes} title='Одежда' />
            <ProductsSection products={products.accessories} title='Акссесуары' />
        </div>
    );
};

export default Home;
