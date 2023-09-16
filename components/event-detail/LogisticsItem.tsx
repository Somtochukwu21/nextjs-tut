import { ReactNode } from "react";
// import classes from "./logistics-item.module.css";

type PropType = {
	icon: () => JSX.Element;
	children: ReactNode;
};

function LogisticsItem(props: PropType) {
	const { icon: Icon } = props;

	return (
		<li className="md:items-start	md:text-left flex text-2xl items-center flex-col text-center text-[#aefff8]">
			<span
				className="block [&>*]:h-8 [&>*]:w-8 mr-4 text-[#18e0d0]">
				<Icon />
			</span>
			<span className="block">{props.children}</span>
		</li>
	);
}

export default LogisticsItem;
