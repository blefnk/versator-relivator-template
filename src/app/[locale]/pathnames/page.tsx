import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import PageLayout from "~/components/Common/PageLayout";

export type PageProps = {
  params?: Promise<{ locale: string }>;
};

export default async function PathnamesPage({ params }: PageProps) {
  const locale = (await params)?.locale;

  // TODO: Reliverse CLI: Enable static rendering when
  // TODO: choosing static export in the next.config.js
  setRequestLocale(locale);

  const t = useTranslations("PathnamesPage");

  return (
    <PageLayout title={t("title")}>
      <div className="max-w-[490px]">
        {t.rich("description", {
          code: (chunks) => <code className="font-mono">{chunks}</code>,
          p: (chunks) => <p className="mt-4">{chunks}</p>,
        })}
      </div>
    </PageLayout>
  );
}
