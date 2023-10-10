import Button from "@/components/UI/Button";
import ErrorAlert from "@/components/UI/ErrorAlert";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/ResultsTitle";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function FilteredEventsPage() {
	const router = useRouter();
	const filteredData = router.query.slug;
	if (!filteredData) {
		return (
			<p className="uppercase text-3xl font-bold mt-6 text-center m-auto">
				Loading...
			</p>
		);
	}
	const filteredYear = filteredData[0];
	const filteredMonth = filteredData[1];
	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12 ||
		filteredData.length > 2
	) {
		return (
			<ErrorAlert>
				<p>Invalid filter, please adjust your values.</p>
				<div className="flex justify-center items-center mt-2 text-xl capitalize">
					<Button link="/events">Show all events</Button>
				</div>
			</ErrorAlert>
		);
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<ErrorAlert>
				<p className=" uppercase text-3xl font-bold mt-6 text-center m-auto">
					No Events Found for the chosen filter!
				</p>
				<div className="flex justify-center items-center mt-2 text-xl capitalize">
					<Button link="/events">Show all events</Button>
				</div>
			</ErrorAlert>
		);
	}

	const date = new Date(numYear, numMonth - 1);
	return (
		<Fragment>
			<ResultsTitle date={date} />
			<EventList events={filteredEvents} />
		</Fragment>
	);
}
