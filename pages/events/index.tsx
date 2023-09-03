import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/dummy-data";

export default function AllEventsPage() {
	const AllEvents = getAllEvents();
	return (
		<div>
			<EventList events={AllEvents} />
		</div>
	);
}
