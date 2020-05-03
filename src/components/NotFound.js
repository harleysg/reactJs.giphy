import React from "react";

import css from "./NotFound.module.css";

export default function NotFound() {
	return (
		<>
			<main className={css["c-notFound_app"]}>
				<div className={css["c-notFound_page"]}>
					<div className={css["c-notFound_content"]}>
						<h1>404</h1>
						<h2>Page not found</h2>
						<p>I tried to catch some fog, but i mist</p>
						<button onClick={() => window.history.back()}>
							back to home
						</button>
					</div>
					<img
						className={css["c-notFound_img"]}
						src="http://www.supah.it/dribbble/008/008.jpg"
						alt="demo"
					/>
				</div>
			</main>
		</>
	);
}
