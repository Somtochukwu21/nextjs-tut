import { FormEvent, useRef } from "react";

export default function useEventSearch(
	onSearch: (year: string | undefined, month: string | undefined) => void
) {
	const yearInputRef = useRef<HTMLSelectElement | null>(null);

	const monthInputRef = useRef<HTMLSelectElement | null>(null);

	function submitHandler(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const selectedYear = yearInputRef.current?.value;
		const selectedmonth = monthInputRef.current?.value;

		onSearch(selectedYear, selectedmonth);
	}
	return { yearInputRef, monthInputRef, submitHandler };
}
