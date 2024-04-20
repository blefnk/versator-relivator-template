import React from "react";

import { Button } from "~/components/primitives/button";

export function WithLeftAlignedNav() {
	return (
		<>
			<header>
				<h2>Elements - Headers - With left aligned nav</h2>
				<p>WithLeftAlignedNav</p>
				<Button type="button" variant="primary">
					Sign up | Log in
				</Button>
			</header>
		</>
	);
}
