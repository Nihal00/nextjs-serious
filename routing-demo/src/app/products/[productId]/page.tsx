import React from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Details of Product {params.productId}</h1>
    </div>
  );
}

