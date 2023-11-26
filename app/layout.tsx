'use client';

import { FC, PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import StoreProvider from '@src/store/provider';
import './globals.css';

const helvetica = localFont({
    src: [
        {
            path: './_src/fonts/HelveticaNeueCyr-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: './_src/fonts/HelveticaNeueBlackCondensed.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './_src/fonts/HelveticaNeueCyr-Black.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './_src/fonts/HelveticaNeueCyr-Bold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: './_src/fonts/HelveticaNeueCyr-Heavy.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-helvetica'
});

const normalidad = localFont({
    src: [
        {
            path: './_src/fonts/NormalidadCompact-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: './_src/fonts/NormalidadCompact-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './_src/fonts/NormalidadCompact-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './_src/fonts/NormalidadCompact-Bold.woff2',
            weight: '600',
            style: 'normal'
        },
        {
            path: './_src/fonts/NormalidadCompact-Black.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-normalidad'
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='ru'>
            <body className={`${helvetica.variable} ${normalidad.variable} flex min-h-screen flex-col justify-start`}>
                <StoreProvider>
                    <main>{children}</main>
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
