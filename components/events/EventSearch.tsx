import { FormEvent, useRef } from "react";
import Button from "../UI/Button";
import classes from "./EventSearch.module.css";
import useEventSearch from "./useEventSearch";

export default function EventSearch({
	onSearch,
}: {
	onSearch: (year: string | undefined, month: string | undefined) => void;
}) {
	const { monthInputRef, submitHandler, yearInputRef } =
		useEventSearch(onSearch);
	return (
		<form
			className="my-8 mx-auto shadow-md p-4 bg-white rounded-md w-[90%] max-w-[40rem] flex justify-between flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
			onSubmit={submitHandler}>
			<div className="w-full flex-col flex space-y-4 md:space-x-4 md:space-y-0 md:flex-row md:w-[80%">
				<div className="control">
					<label htmlFor="year">Year</label>
					<select name="year" id="year" ref={yearInputRef}>
						<option value="2021">2021</option>
						<option value="2022">2022</option>
					</select>
				</div>

				<div className="control">
					<label htmlFor="month">Month</label>
					<select name="month" id="month" ref={monthInputRef}>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
				</div>
			</div>
			<Button className="w-full px-1 py-2 md:w-1/5">Find Events</Button>
		</form>
	);
}
