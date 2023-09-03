import Link from "next/link";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">NextEvent</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li>
						<Link href="/events">Browse All events</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
