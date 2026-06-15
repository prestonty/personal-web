import './globals.css';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-work-sans',
});

export const metadata = {
    title: 'Preston Tom-Ying',
    description: 'Personal website of Preston Tom-Ying — Software Developer, Designer, Martial Artist',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={workSans.variable}>
            <body>{children}</body>
        </html>
    );
}
