import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
	const router = useRouter();
	const filteredData = router.query.slug;
	if (!filteredData) {
		return (
			<p className=" uppercase text-3xl font-bold mt-6 text-center m-auto">
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
			<p className=" uppercase text-3xl font-bold mt-6 text-center m-auto">
				Invalid filter, please adjust your values.
			</p>
		);
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<p className=" uppercase text-3xl font-bold mt-6 text-center m-auto">
				No Events Found
			</p>
		);
	}
	return (
		<div>
			<EventList events={filteredEvents} />
		</div>
	);
}
