import { FC, PropsWithChildren } from 'react';
import Footer from '@src/components/layout/footer';
import Header from '@src/components/layout/header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
