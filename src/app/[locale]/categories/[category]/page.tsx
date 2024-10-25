// src\app\[locale]\categories\[category]\page.tsx
import type { Product } from "~/db/schema";

import type { Metadata } from "next";

import { titleCase } from "string-ts";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "~/components/Navigation/PageNavMenu";
import { Shell } from "~/components/Wrappers/ShellVariants";

type CategoryPageProps = {
  params: Promise<{
    category: Product["categoryId"];
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  return {
    description: `Buy products from the ${(await params).category} category`,
    title: titleCase((await params).category || ""),
  };
}

export default async function CategoryPage({}: CategoryPageProps) {
  return (
    <Shell>
      <PageHeader
        id="category-page-header"
        aria-labelledby="category-page-header-heading"
      >
        <PageHeaderHeading size="sm">
          Oops... Category page is temporarily disabled...
        </PageHeaderHeading>
        <PageHeaderDescription size="sm">
          We are working on this page. It will be live again soon. Stay tuned
          for updates.
        </PageHeaderDescription>
      </PageHeader>
    </Shell>
  );
}
