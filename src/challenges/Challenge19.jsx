import { useState } from "react";
const products = Array.from(
  { length: 50 },
  (_, index) =>
    `Product ${index + 1}`
);
export default function Challenge19() {
  const [page, setPage] =
    useState(1);
  const itemsPerPage = 10;
  const start =
    (page - 1) * itemsPerPage;
  const currentProducts =
    products.slice(
      start,
      start + itemsPerPage
    );
  const totalPages =
    Math.ceil(
      products.length /
        itemsPerPage
    );
  return (
    <>
      <h2>
       Pagination
      </h2>
      <p>
        Page {page} of {totalPages}
      </p>
      {currentProducts.map(
        (product) => (
          <div
            className="card"
            key={product}
          >
            {product}
          </div>
        )
      )}
      <button
        disabled={page === 1}
        onClick={() =>
          setPage(page - 1)
        }
      >
        Previous
      </button>
      <button
        disabled={
          page === totalPages
        }
        onClick={() =>
          setPage(page + 1)
        }
      >
        Next
      </button>
    </>
  );
}