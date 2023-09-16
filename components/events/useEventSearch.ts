import { FormEvent, useRef } from "react";

export default function useEventSearch(
	onSearch: (year: string, month: string) => void
) {
	const yearInputRef = useRef();
	const monthInputRef = useRef();

	function submitHandler(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const selectedYear = yearInputRef.current.value as string;
		const selectedmonth = monthInputRef.current.value as string;

		onSearch(selectedYear, selectedmonth);
	}
	return { yearInputRef, monthInputRef, submitHandler };
}
