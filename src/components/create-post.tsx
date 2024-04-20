"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import { Button } from "~/components/primitives/button";
import { api } from "~/core/utils/trpc/react";

import styles from "./index.module.css";

export function CreatePost() {
	const router = useRouter();
	const [name, setName] = useState("");

	const createPost = api.post.create.useMutation({
		onSuccess: () => {
			router.refresh();
			setName("");
		},
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				createPost.mutate({ name });
			}}
			className={styles.form}
		>
			<input
				type="text"
				placeholder="Title"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className={styles.input}
			/>
			<Button type="submit" variant="secondary" disabled={createPost.isPending}>
				{createPost.isPending ? "Submitting..." : "Submit"}
			</Button>
		</form>
	);
}
