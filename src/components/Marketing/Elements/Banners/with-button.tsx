"use client";

import { useState } from "react";

import { X } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Link } from "~/components/ui/link";

type BannerWithButtonProps = {
  linkHref: string;
  tButton: string;
  tDetails: string;
  tDismiss: string;
  tTitle: string;
};

export function BannerWithButton({
  linkHref,
  tButton,
  tDetails,
  tDismiss,
  tTitle,
}: BannerWithButtonProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideButton = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`
        relative isolate flex items-center gap-x-6 overflow-hidden bg-zinc-50
        px-6 py-2.5

        dark:bg-zinc-800

        sm:px-3.5 sm:before:flex-1
      `}
    >
      <BackgroundDecor />
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p
          className={`
            text-sm leading-6 text-zinc-700

            dark:text-zinc-300
          `}
        >
          <strong
            className={`
              font-semibold text-zinc-900

              dark:text-zinc-100
            `}
          >
            {tTitle}
          </strong>
          <Separator />
          {tDetails}
        </p>
        <Link
          className={`
            flex-none rounded-full bg-zinc-900 px-3.5 py-1 text-sm font-semibold
            text-white shadow-sm

            dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300
            dark:focus-visible:outline-zinc-100

            focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-zinc-900

            hover:bg-zinc-700
          `}
          href={linkHref}
        >
          {tButton}{" "}
          <span className="ml-1" aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Button className="-m-3 p-3" type="button" variant="ghost">
          <span className="sr-only">{tDismiss}</span>
          <X
            className={`
              size-5 text-zinc-900

              dark:text-zinc-100
            `}
            aria-hidden="true"
            onClick={handleHideButton}
          />
        </Button>
      </div>
    </div>
  );
}

const BackgroundDecor = () => (
  <>
    <div
      className={`
        absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10
        -translate-y-1/2 transform-gpu blur-2xl
      `}
      aria-hidden="true"
    >
      <div
        className={`
          aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5]
          to-[#9089fc] opacity-30

          dark:opacity-50
        `}
      />
    </div>
    <div
      className={`
        absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2
        transform-gpu blur-2xl
      `}
      aria-hidden="true"
    >
      <div
        className={`
          aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5]
          to-[#9089fc] opacity-30

          dark:opacity-50
        `}
      />
    </div>
  </>
);

const Separator = () => (
  <svg
    className={`
      mx-2 inline-block size-0.5 fill-current text-zinc-700

      dark:text-zinc-300
    `}
    aria-hidden="true"
    viewBox="0 0 2 2"
  >
    <circle cx={1} cy={1} r={1} />
  </svg>
);
