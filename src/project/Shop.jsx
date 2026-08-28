import { useMemo, useState } from "react";
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 900,
    category: "Electronics",
    description: "Powerful laptop for work and study.",
  },
  {
    id: 2,
    name: "Mouse",
    price: 25,
    category: "Electronics",
    description: "Wireless mouse.",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 60,
    category: "Electronics",
    description: "Mechanical keyboard.",
  },
  {
    id: 4,
    name: "Chair",
    price: 150,
    category: "Furniture",
    description: "Comfortable office chair.",
  },
  {
    id: 5,
    name: "Desk",
    price: 250,
    category: "Furniture",
    description: "Modern study desk.",
  },
  {
    id: 6,
    name: "Headphones",
    price: 80,
    category: "Accessories",
    description: "High quality headphones.",
  },
];
export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);
  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }
      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
    setMessage(`${product.name} added to cart!`);
  }
  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }
  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  function checkout() {
    if (cart.length === 0) {
      setMessage("Your cart is empty!");
      return;
    }
    setMessage("Order completed successfully!");
    setCart([]);
    setShowCart(false);
  }
  return (
    <div>
      <h2>Nofal Store</h2>
      {message && (
        <p className="success">
          {message}
        </p>
      )}
      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="All">All Categories</option>
          <option value="Electronics">
            Electronics
          </option>
          <option value="Furniture">
            Furniture
          </option>
          <option value="Accessories">
            Accessories
          </option>
        </select>
        <button
          onClick={() =>
            setShowCart(!showCart)
          }
        >
          Cart ({totalItems})
        </button>
      </div>
      <hr />
      {showCart && (
        <div className="cart">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  className="card"
                  key={item.id}
                >
                  <h3>{item.name}</h3>
                  <p>
                    Price: ${item.price}
                  </p>
                  <div>
                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>
                    <span>
                      {" "}
                      {item.quantity}{" "}
                    </span>
                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p>
                    Subtotal: $
                    {item.price * item.quantity}
                  </p>
                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
              <h3>
                Total: ${totalPrice}
              </h3>
              <button onClick={checkout}>
                Checkout
              </button>
            </>
          )}
        </div>
      )}
      <h2>Products</h2>
      <div className="products">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              className="card"
              key={product.id}
            >
              <h3>{product.name}</h3>

              <p>
                Category: {product.category}
              </p>

              <p>
                Price: ${product.price}
              </p>

              <button
                onClick={() =>
                  setSelectedProduct(product)
                }
              >
                View Details
              </button>

              <button
                onClick={() =>
                  addToCart(product)
                }
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
      {selectedProduct && (
        <div className="product-details">
          <h2>Product Details</h2>
          <h3>
            {selectedProduct.name}
          </h3>
          <p>
            {selectedProduct.description}
          </p>
          <p>
            Category:{" "}
            {selectedProduct.category}
          </p>
          <p>
            Price: $
            {selectedProduct.price}
          </p>
          <button
            onClick={() =>
              addToCart(selectedProduct)
            }
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              setSelectedProduct(null)
            }
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}