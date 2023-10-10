import Button from "../UI/Button";

function ResultsTitle({ date }: { date: Date }) {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	return (
		<section className=" mx-auto my-4 p-2 w-11/12 max-w-2xl text-center ">
			<h1 className="mb-2">Events in {humanReadableDate}</h1>
			<Button link="/events">Show all events</Button>
		</section>
	);
}

export default ResultsTitle;
