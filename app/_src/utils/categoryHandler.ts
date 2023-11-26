export const categoryHandler = (categoryId: number) => {
    switch (categoryId) {
        case 1:
            return { path: `/shoes/${categoryId}`, name: 'Обувь' };
        case 2:
            return { path: `/clothes/${categoryId}`, name: 'Одежда' };
        case 3:
            return { path: `/accessories/${categoryId}`, name: 'Акссесуары' };
        default:
            return '';
    }
};
