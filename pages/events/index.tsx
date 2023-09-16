import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function AllEventsPage() {
	const AllEvents = getAllEvents();
	const router = useRouter();

	function findEventsHandler(year: string, month: string) {
		const fullpath = `/events/${year}/${month}`;
		router.push(fullpath);
	}
	return (
		<Fragment>
			<EventSearch onSearch={findEventsHandler} />
			<EventList events={AllEvents} />
		</Fragment>
	);
}
