import { Fragment, ReactNode } from "react";
import MainHeader from "./MainHeader";

export default function Layout(props: { children: ReactNode }) {
	return (
		<Fragment>
			<MainHeader />
			<main>{props.children}</main>
		</Fragment>
	);
}
