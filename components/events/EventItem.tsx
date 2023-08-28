import { ExpectedProps } from "@/interface";
import Button from "../UI/Button";
import DateIcon from "../Icons/DateIcon";
import AddressIcon from "../Icons/AddressIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";

export default function EventItem(props: ExpectedProps) {
	const { date, image, title, id, location } = props;

	const humanReadAbleDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(", ", "\n");
	const exploreLink = `events/${id}`;
	return (
		<li className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white m-4 flex flex-col space-x-4  md:flex-row">
			<img
				src={"/" + image}
				alt={title}
				className="w-full object-cover h-40 md:w-[40%] md:h-[14rem]"
			/>

			<div className="w-full py-0 px-4 text-center md:w-[60%] md:p-0 md:text-left">
				<div>
					<h2 className="my-[0.5rem] mx-0 md:my-4 md:mx-0">{title}</h2>
					<div className="date">
						<DateIcon />
						<time className="text-[#666666] font-bold">
							{humanReadAbleDate}
						</time>
					</div>
					<div className="address">
						<AddressIcon />
						<address className="my-2 mx-0 text-[#666666] whitespace-pre">
							{formattedAddress}
						</address>
					</div>
				</div>
				<div className="flex flex-col p-4 md:flex-row md:justify-end [&>*]:bg-black [&>*]:block ">
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className="ml-[0.5rem] inline-flex justify-center items-center [&>*]:w-[1.25rem] [&>*]:h-[1.25rem]">
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}
