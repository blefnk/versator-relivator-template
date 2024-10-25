import { Separator } from "~/components/ui/separator";

// import Content from "./content.mdx";

export default function Onboarding() {
  return (
    <>
      <Separator className="mb-2" />
      <article
        className={`
          prose dark:prose-invert

          lg:prose-xl

          pb-8
        `}
      >
        {/* <Content /> */}
      </article>
    </>
  );
}
