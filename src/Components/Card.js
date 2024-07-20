import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export const Card = ({ product }) => {
  const { name, price, image } = product;
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="/">
        <img className="p-3 " src={image} alt="headphone" />
      </Link>
      <div className="px-3 pb-5">
        <Link href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5"></div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          {isInCart ? (
            <button
              onClick={() => removeFromCart(product)}
              className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
