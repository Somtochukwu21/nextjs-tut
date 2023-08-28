import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<main>
			<EventList events={featuredEvents} />
		</main>
	);
}
