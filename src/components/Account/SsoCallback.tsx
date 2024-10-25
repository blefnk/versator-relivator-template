"use client";

import type { SSOCallbackPageProps } from "~/types/auth";

import { useEffect } from "react";

import { useClerk } from "@clerk/nextjs";

import { SpinnerSVG } from "~/components/Common/Icons/SVG";
import type { HandleOAuthCallbackParams } from "@clerk/types";

export default function SSOCallback({ searchParams }: SSOCallbackPageProps) {
  const { handleRedirectCallback } = useClerk();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        await handleRedirectCallback(searchParams as HandleOAuthCallbackParams);
      } catch (error) {
        console.error("Error handling redirect callback:", error);
      }
    };

    handleCallback();
  }, [searchParams, handleRedirectCallback]);

  return (
    <div
      className="flex items-center justify-center"
      aria-describedby="loading-description"
      aria-label="Loading"
      role="status"
    >
      <SpinnerSVG className="size-16 animate-spin" aria-hidden="true" />
      {/* import { FakeLoadingVariantOne } from "~/components/FakeLoading"; */}
      {/* <FakeLoadingVariantOne /> */}
    </div>
  );
}
