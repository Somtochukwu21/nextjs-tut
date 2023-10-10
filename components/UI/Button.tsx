import Link from "next/link";
import { ReactNode } from "react";

interface ExpectedProps {
	children: ReactNode;
	link?: string;
	className?: string;
}

export default function Button({ className, children, link }: ExpectedProps) {
	if (link) {
		return (
			<Link href={link} className="btnStyles">
				{children}
			</Link>
		);
	}
	return <button className={`btnStyles ${className}`}>{children}</button>;
}
