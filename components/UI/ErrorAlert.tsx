import { ReactNode } from "react";

function ErrorAlert({ children }: { children: ReactNode }) {
	return (
		<div
			className="my-4 mx-auto py-4 px-8 w-[90%] max-w-[40rem] bg-[#d5bdfc] text-[#38028d] font-bold uppercase text-3xl text-center rounded-md">
			{children}
		</div>
	);
}

export default ErrorAlert;
