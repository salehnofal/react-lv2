import { useState } from "react";

const products = [
  ["Laptop", "Tech"],
  ["Mouse", "Tech"],
  ["Chair", "Home"],
  ["Desk", "Home"],
  ["Book", "Other"],
];

export default function Challenge12() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    return (
      product[0].toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product[1] === category)
    );
  });
  return (
    <>
      <h2> Product Search & Filters</h2>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Tech</option>
        <option>Home</option>
        <option>Other</option>
      </select>
      <p>Matches: {filteredProducts.length}</p>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="card" key={product[0]}>
            {product[0]} - {product[1]}
          </div>
        ))
      ) : (
        <p>No matching products.</p>
      )}
    </>
  );
}