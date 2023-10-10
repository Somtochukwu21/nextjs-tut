import EventSummary from "@/components/event-detail/EventSummary";
import EventContent from "@/components/event-detail/EventContent";
import EventLogistics from "@/components/event-detail/EventLogistics";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ErrorAlert from "@/components/UI/ErrorAlert";

function EventDetailPage() {
	const router = useRouter();
	const eventId: string = String(router.query.eventId);
	const detailedEvent = getEventById(eventId);

	if (!detailedEvent) {
		return (
			<ErrorAlert>
				<p>NO EVENT FOUND</p>
			</ErrorAlert>
		);
	}
	return (
		<Fragment>
			<EventSummary title={detailedEvent.title} />
			<EventLogistics
				address={detailedEvent.location}
				date={detailedEvent.date}
				image={detailedEvent.image}
				imageAlt={detailedEvent.title}
			/>
			<EventContent>
				<p>{detailedEvent.description}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;
