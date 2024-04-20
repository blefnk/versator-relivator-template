import type { Config } from "drizzle-kit";

import { env } from "./src/env";

export default {
	schema: "./src/core/server/db/schema.ts",
	driver: "pg",
	dbCredentials: {
		connectionString: env.DATABASE_URL,
	},
	tablesFilter: ["versator_*"],
} satisfies Config;
