import Link from 'next/link';
import { categoryHandler } from '../utils/categoryHandler';

interface BreadcrumpsProps {
    categoryId: number;
    name: string;
}

const Breadcrumps = ({ categoryId, name }: BreadcrumpsProps) => {
    const category = { ...categoryHandler(categoryId) };

    return (
        <div className='flex gap-[10px] text-gray-500'>
            <Link href='/catalog'>Каталог</Link> / <Link href={`${category.path}`}>{category.name}</Link> / {name}
        </div>
    );
};

export default Breadcrumps;
