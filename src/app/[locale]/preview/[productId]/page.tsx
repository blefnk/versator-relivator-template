import { redirect } from "next/navigation";

type ProductPreviewPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductPreviewPage({
  params,
}: ProductPreviewPageProps) {
  const productId = Number((await params).productId);

  redirect(`/product/${productId}`);
}
