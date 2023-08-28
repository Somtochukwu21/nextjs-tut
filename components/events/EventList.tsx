import { Event } from "@/interface";
import EventItem from "./EventItem";

export default function EventList({ events }: any) {
	return (
		<ul className="w-[90%] max-w-[40rem] my-[5rem] mx-auto">
			{events.map((event: any) => (
				<EventItem
					key={event.id}
					date={event.date}
					id={event.id}
					image={event.image}
					title={event.title}
					location={event.location}
				/>
			))}
		</ul>
	);
}
