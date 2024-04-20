import { redirect } from "next/navigation";

import { defaultLocale } from "~/navigation";

const AuthPage = () => redirect(defaultLocale);

export default AuthPage;
