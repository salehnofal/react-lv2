import { useState } from "react";

const products = [
  {
    name: "Laptop",
    price: 900,
  },
  {
    name: "Mouse",
    price: 25,
  },
  {
    name: "Keyboard",
    price: 60,
  },
];

export default function Challenge13() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.name === product.name
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.name === product.name
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
  }

  function changeQuantity(name, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(name) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.name !== name
      )
    );
  }
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );
  return (
    <>
      <h2> Shopping Cart</h2>
      <div className="row">
        {products.map((product) => (
          <button
            key={product.name}
            onClick={() => addToCart(product)}
          >
            Add {product.name}
          </button>
        ))}
      </div>
      {cart.map((item) => (
        <div
          className="card"
          key={item.name}
        >
          <h3>{item.name}</h3>
          <p>
            ${item.price} × {item.quantity}
          </p>
          <button
            onClick={() =>
              changeQuantity(item.name, -1)
            }
          >
            -
          </button>
          <span> {item.quantity} </span>
          <button
            onClick={() =>
              changeQuantity(item.name, 1)
            }
          >
            +
          </button>
          <button
            onClick={() =>
              removeItem(item.name)
            }
          >
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </>
  );
}