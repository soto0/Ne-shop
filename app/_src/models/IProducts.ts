import { IImages } from './IImages';
import { ISizes } from './ISizes';

export interface IProducts {
    data: IProducts | IProducts[];
    id: number;
    categoryId: number;
    name: string;
    price: number;
    images: IImages[];
    sizes: ISizes[];
    description: string;
    number: string;
    brand: string;
}
