import '@/styles/globals.scss'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { TheHeader } from '@/components/TheHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'devOsa ➡️ TesTask for ABZ.Agancy',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TheHeader />
				<main>
					{children}
				</main>
				<TheHeader />
			</body>
		</html>
	)
}
