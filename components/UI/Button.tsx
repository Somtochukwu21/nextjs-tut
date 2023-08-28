import Link from "next/link";
import { ReactNode } from "react";

interface ExpectedProps {
	children: ReactNode;
	link: string;
}

export default function Button({ children, link }: ExpectedProps) {
	return (
		<Link
			href={link}
			className="bg-teal-500 border border-teal-500 rounded px-6 py-2 text-teal-100 cursor-pointer hover:bg-teal-600 shadow-md bg-teal-500 border border-teal-500 rounded px-6 py-2 text-teal-100 cursor-pointer hover:bg-teal-600 hover:border-teal-600 active:bg-teal-700 active:border-teal-700 shadow-md">
			{children}
		</Link>
	);
}
