/** @type {import('mock-config-server').MockServerConfig} */

import { IProducts } from './app/_src/models/IProducts';
import { IUser } from './app/_src/models/IUser';

const mockServerConfig = {
    rest: {
        baseUrl: '/api',
        configs: [
            {
                path: '/banners',
                method: 'get',
                routes: [
                    {
                        data: [
                            { id: 1, image: 'https://i.ibb.co/K0qSdKS/slide1.jpg' },
                            { id: 2, image: 'https://i.ibb.co/VWGF0jt/slide2.jpg' },
                            { id: 3, image: 'https://i.ibb.co/F7XVtj6/slide3.jpg' },
                            { id: 4, image: 'https://i.ibb.co/dMRNBt0/slide4.jpg' }
                        ]
                    }
                ]
            },
            {
                path: '/signin',
                method: 'post',
                routes: [
                    {
                        data: { id: 1, firstName: 'Test', lastName: 'user' }
                    }
                ],
                interceptors: {
                    response: (data: IUser, { request }: any) => {
                        if (request.body.email === 'test00@test.com' && request.body.password === 'test00') {
                            return data;
                        } else {
                            return { error: 'Unauthorized' };
                        }
                    }
                }
            },
            {
                path: '/products',
                method: 'get',
                routes: [
                    {
                        data: [
                            {
                                id: 1,
                                categoryId: 1,
                                name: 'Nike Air Force 1 Low SP Tiffany And Co.',
                                price: 172900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/4f9/t4py0s3pwyzwerv8uvfz24uo9kpc2jad/1000_525_1/08d4a18b-b1e6-11ed-b2cd-f02f74dffd40_0a435ac9-e41d-11ed-b2d9-f02f74dffd40.png'
                                    },
                                    {
                                        id: 2,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/4f9/t4py0s3pwyzwerv8uvfz24uo9kpc2jad/1000_525_1/08d4a18b-b1e6-11ed-b2cd-f02f74dffd40_0a435ac9-e41d-11ed-b2d9-f02f74dffd40.png'
                                    },
                                    {
                                        id: 3,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/4f9/t4py0s3pwyzwerv8uvfz24uo9kpc2jad/1000_525_1/08d4a18b-b1e6-11ed-b2cd-f02f74dffd40_0a435ac9-e41d-11ed-b2d9-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 36 },
                                    { id: 2, size: 36.5 },
                                    { id: 3, size: 37.5 },
                                    { id: 4, size: 38.5 },
                                    { id: 5, size: 39 },
                                    { id: 6, size: 40 },
                                    { id: 7, size: 40.5 },
                                    { id: 8, size: 41 },
                                    { id: 9, size: 42 },
                                    { id: 10, size: 42.5 },
                                    { id: 11, size: 43 },
                                    { id: 12, size: 44 },
                                    { id: 13, size: 44.5 },
                                    { id: 14, size: 45 },
                                    { id: 15, size: 46 }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 2,
                                categoryId: 1,
                                name: 'Nike Air Jordan 1 Retro High OG Rebellionaire',
                                price: 49900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/7b7/q0hsmunfxi2z1z2pcxekqupni4t128qe/1000_525_1/c2de49bb-d460-11ec-b288-f02f74dffd40_99aab8d8-426d-11ed-b2af-f02f74dffd40.jpg'
                                    },
                                    {
                                        id: 2,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/7b7/q0hsmunfxi2z1z2pcxekqupni4t128qe/1000_525_1/c2de49bb-d460-11ec-b288-f02f74dffd40_99aab8d8-426d-11ed-b2af-f02f74dffd40.jpg'
                                    },
                                    {
                                        id: 3,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/7b7/q0hsmunfxi2z1z2pcxekqupni4t128qe/1000_525_1/c2de49bb-d460-11ec-b288-f02f74dffd40_99aab8d8-426d-11ed-b2af-f02f74dffd40.jpg'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 36 },
                                    { id: 2, size: 36.5 },
                                    { id: 3, size: 37.5 },
                                    { id: 4, size: 38.5 },
                                    { id: 5, size: 39 },
                                    { id: 6, size: 40 },
                                    { id: 7, size: 40.5 },
                                    { id: 8, size: 41 },
                                    { id: 9, size: 42 },
                                    { id: 10, size: 42.5 },
                                    { id: 11, size: 43 },
                                    { id: 12, size: 44 },
                                    { id: 13, size: 44.5 },
                                    { id: 14, size: 45 },
                                    { id: 15, size: 46 }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 3,
                                categoryId: 1,
                                name: 'Nike Air Jordan 1 Retro Low OG SP Travis Scott Olive (W)',
                                price: 139900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/d2a/rss1s5i7d93kiuop6ig25qu88xepxf1f/1000_525_1/19c4fb90-850f-11ed-be74-7486e22ec026_6ce6641d-4c00-11ee-b2e6-f02f74dffd40.png'
                                    },
                                    {
                                        id: 2,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/d2a/rss1s5i7d93kiuop6ig25qu88xepxf1f/1000_525_1/19c4fb90-850f-11ed-be74-7486e22ec026_6ce6641d-4c00-11ee-b2e6-f02f74dffd40.png'
                                    },
                                    {
                                        id: 3,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/d2a/rss1s5i7d93kiuop6ig25qu88xepxf1f/1000_525_1/19c4fb90-850f-11ed-be74-7486e22ec026_6ce6641d-4c00-11ee-b2e6-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 36 },
                                    { id: 2, size: 36.5 },
                                    { id: 3, size: 37.5 },
                                    { id: 4, size: 38.5 },
                                    { id: 5, size: 39 },
                                    { id: 6, size: 40 },
                                    { id: 7, size: 40.5 },
                                    { id: 8, size: 41 },
                                    { id: 9, size: 42 },
                                    { id: 10, size: 42.5 },
                                    { id: 11, size: 43 },
                                    { id: 12, size: 44 },
                                    { id: 13, size: 44.5 },
                                    { id: 14, size: 45 },
                                    { id: 15, size: 46 }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 4,
                                categoryId: 1,
                                name: 'Nike Air Jordan 1 Retro High OG Skyline',
                                price: 43900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/568/1ttx4805xdmi0d7232dtzjhzs81d99ge/1000_525_1/5d290870-c8cd-11ed-b2d0-f02f74dffd40_0ee6c49f-0341-11ee-b2e0-f02f74dffd40.png'
                                    },
                                    {
                                        id: 2,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/568/1ttx4805xdmi0d7232dtzjhzs81d99ge/1000_525_1/5d290870-c8cd-11ed-b2d0-f02f74dffd40_0ee6c49f-0341-11ee-b2e0-f02f74dffd40.png'
                                    },
                                    {
                                        id: 3,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/568/1ttx4805xdmi0d7232dtzjhzs81d99ge/1000_525_1/5d290870-c8cd-11ed-b2d0-f02f74dffd40_0ee6c49f-0341-11ee-b2e0-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 36 },
                                    { id: 2, size: 36.5 },
                                    { id: 3, size: 37.5 },
                                    { id: 4, size: 38.5 },
                                    { id: 5, size: 39 },
                                    { id: 6, size: 40 },
                                    { id: 7, size: 40.5 },
                                    { id: 8, size: 41 },
                                    { id: 9, size: 42 },
                                    { id: 10, size: 42.5 },
                                    { id: 11, size: 43 },
                                    { id: 12, size: 44 },
                                    { id: 13, size: 44.5 },
                                    { id: 14, size: 45 },
                                    { id: 15, size: 46 }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 5,
                                categoryId: 1,
                                name: 'Nike Air Force 1 Low 07 Fresh Photon Dust',
                                price: 19900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/c20/2xiivuf1k5ak2fexqzjpp80irkh00ygz/1000_525_1/7745b207-4e36-11ee-b2e6-f02f74dffd40_d2a6dab9-4e45-11ee-b2e6-f02f74dffd40.png'
                                    },
                                    {
                                        id: 2,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/c20/2xiivuf1k5ak2fexqzjpp80irkh00ygz/1000_525_1/7745b207-4e36-11ee-b2e6-f02f74dffd40_d2a6dab9-4e45-11ee-b2e6-f02f74dffd40.png'
                                    },
                                    {
                                        id: 3,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/c20/2xiivuf1k5ak2fexqzjpp80irkh00ygz/1000_525_1/7745b207-4e36-11ee-b2e6-f02f74dffd40_d2a6dab9-4e45-11ee-b2e6-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 36 },
                                    { id: 2, size: 36.5 },
                                    { id: 3, size: 37.5 },
                                    { id: 4, size: 38.5 },
                                    { id: 5, size: 39 },
                                    { id: 6, size: 40 },
                                    { id: 7, size: 40.5 },
                                    { id: 8, size: 41 },
                                    { id: 9, size: 42 },
                                    { id: 10, size: 42.5 },
                                    { id: 11, size: 43 },
                                    { id: 12, size: 44 },
                                    { id: 13, size: 44.5 },
                                    { id: 14, size: 45 },
                                    { id: 15, size: 46 }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 6,
                                categoryId: 2,
                                name: 'Travis Scott New Sight Zip Up Hoodie Olive (SS22)',
                                price: 46500,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/d6b/tu4gjhfxwcw5e4enattoox31hhhcggsb/1000_525_1/d6666543-3069-11ee-b2e6-f02f74dffd40_c23ec8ff-40ec-11ee-b2e6-f02f74dffd40.png'
                                    },
                                    {
                                        id: 2,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/d6b/tu4gjhfxwcw5e4enattoox31hhhcggsb/1000_525_1/d6666543-3069-11ee-b2e6-f02f74dffd40_c23ec8ff-40ec-11ee-b2e6-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 7,
                                categoryId: 2,
                                name: 'Travis Scott Studded Pullover Hoodie (FW22)',
                                price: 29900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/4d8/8cbgizmq1vj9y8grhp78q516zijl7ujn/1000_525_1/d5d9d6a1-faf3-11ed-b2de-f02f74dffd40_7b21f9c3-1a56-11ee-b2e5-f02f74dffd40.png'
                                    },
                                    {
                                        id: 2,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/4d8/8cbgizmq1vj9y8grhp78q516zijl7ujn/1000_525_1/d5d9d6a1-faf3-11ed-b2de-f02f74dffd40_7b21f9c3-1a56-11ee-b2e5-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 8,
                                categoryId: 2,
                                name: 'Warren Lotas Horsemen Tee',
                                price: 19900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/b81/m01l1xao1v6xgx2e2s8w2vac47roqhk9/560_500_1/2cf9b55d-508c-11ed-b2b7-f02f74dffd40_4739c2bd-9855-11ed-b2c4-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 9,
                                categoryId: 2,
                                name: 'Supreme Bandana Box Logo Hooded Sweatshirt Black',
                                price: 20900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/3de/rcdiw92wtluri4qpii3qs21z4jw0x04k/560_500_1/b43c06ee-4e3c-11ed-b2b7-f02f74dffd40_6febb6d2-8171-11ed-b2c1-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 10,
                                categoryId: 2,
                                name: 'KAWS x Sacai Flock Print Sweatshirt White',
                                price: 31900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/387/tc3vxkt0quswofqqdzry90revq7fzlej/560_500_1/d05a07ea-5f13-11ec-b281-f02f74dffd40_ac18f839-8160-11ed-b2c1-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 11,
                                categoryId: 3,
                                name: 'Chrome Hearts 2021 Deep Glasses Silver',
                                price: 40900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/189/xii8485sqx1ks4ke425xr8pjysc69s2p/1000_525_1/f69cc0a9-2001-11ed-b2a8-f02f74dffd40_610138da-4268-11ed-b2af-f02f74dffd40.jpg'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 12,
                                categoryId: 3,
                                name: 'Supreme Canvas Backpack White',
                                price: 24900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/912/8lhc157tyoov9qi9kj6arfohsas5iab8/1000_525_1/ff95cc26-07de-11eb-af0d-1cbfc06e6bac_b32d96f8-4f55-11ed-b2b7-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 13,
                                categoryId: 3,
                                name: 'Swatch x Omega Bioceramic Moonswatch Mission to Earth',
                                price: 50900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/dd8/gy2jkyufd7tdf7jhq60myfwheqey29hh/1000_525_1/4d578226-e9a0-11ed-be9d-7486e22ec026_9a36da42-1a55-11ee-b2e5-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 14,
                                categoryId: 3,
                                name: 'Ring Devil Fetus',
                                price: 62900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/54d/ub7fb2blg2qgx5vfg9bh1fa5va8hx7sp/1000_525_1/bc95ada0-d448-11ed-be99-7486e22ec026_9d55b482-19c7-11ee-b2e4-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            },
                            {
                                id: 15,
                                categoryId: 3,
                                name: 'Chrome Hearts Silicon Necklace Yellow (FW19)',
                                price: 20900,
                                images: [
                                    {
                                        id: 1,
                                        url: 'https://nikitaefremov.ru/upload/resize_cache/iblock/585/uacvsojj5cvawr0ybg1gppigzl2934wd/1000_525_1/26f71ea6-ae0a-11ed-be8b-7486e22ec026_7ee6de50-fdc5-11ed-b2df-f02f74dffd40.png'
                                    }
                                ],
                                sizes: [
                                    { id: 1, size: 'M' },
                                    { id: 2, size: 'L' },
                                    { id: 3, size: 'XL' },
                                    { id: 4, size: 'S' },
                                    { id: 5, size: 'XXL' }
                                ],
                                description:
                                    'Nike Air Force 1 Low SP "Tiffany And Co." представляют собой эксклюзивную коллаборацию между Nike и ювелирным брендом Tiffany & Co., выпущенную в 2018 году. Эта модель является уникальной и очень ограниченной, поэтому ее оригинальность и редкость еще больше придают ей ценности. Верхняя часть кроссовок выполнена из ярко-голубой коричневатой кожи, выполнена в классическом стиле Air Force 1 Low. Они имеют узнаваемую перфорированную вставку на носке, логотип Nike на язычке и на пятке. Вместо обычного логотипа Swoosh на боковине кроссовок присутствует логотип Tiffany & Co. - известный бирюзовый знак с надписью "Tiffany & Co.". Кроссовки Nike Air Force 1 Low SP "Tiffany And Co." поставлялись в специальной фирменной упаковке Tiffany & Co., что еще больше подчеркивало престижность и эксклюзивность этого релиза. Из-за ограниченного выпуска и уникального дизайна Nike Air Force 1 Low SP "Tiffany And Co." стали очень популярными среди коллекционеров и любителей кроссовок. Это модель, которая выделяется и представляет',
                                number: 'DZ1382-001',
                                brand: 'Nike'
                            }
                        ]
                    }
                ],
                interceptors: {
                    response: (data: IProducts[], { request }: any) => {
                        if (request.query.categoryId) {
                            const filterData = data.filter((item) => Number(request.query.categoryId) === item.categoryId);

                            if (request.query.limit) {
                                return filterData.splice(0, Number(request.query.limit));
                            }

                            return filterData;
                        } else if (request.query.id) {
                            const filterData = data.find((item) => item.id === Number(request.query.id));

                            return Object.assign({}, filterData);
                        }
                    }
                }
            }
        ]
    }
};

export default mockServerConfig;
