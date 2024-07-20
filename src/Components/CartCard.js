import { useCart } from "../context/CartContext";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  const { removeFromCart } = useCart();

  return (
    <section className="py-2">
      <div className="flex items-center  justify-between border rounded border-slate-200 p-2">
        <div className="max-w-40">
          <img src={image} alt="headphont" />
        </div>
        <span className="w-80 mr-2"> {name} </span>
        <span className="w-24">$ {price} </span>
        <button
          onClick={() => removeFromCart(product)}
          type="button"
          className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2"
        >
          Remove
        </button>
      </div>
    </section>
  );
};
