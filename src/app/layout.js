import './globals.css';

export const metadata = {
    title: 'Preston Tom-Ying',
    description: 'Personal website of Preston Tom-Ying — Software Developer, Designer, Martial Artist',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
