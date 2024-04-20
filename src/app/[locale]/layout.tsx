import "~/core/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/core/utils/trpc/react";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "Create Reliverse App with Internalization",
	description: "Generated by Reliverse CLI",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	);
}
