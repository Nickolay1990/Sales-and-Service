import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Container from './components/Container/Container.component';

const manropSans = Manrope({
	variable: '--font-main',
	subsets: ['latin'],
	weight: ['600', '700'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Sale and Service',
	description: 'Sale and Service description',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${manropSans.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<main>
					<Container>{children}</Container>
				</main>
			</body>
		</html>
	);
}
