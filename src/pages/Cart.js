import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../Components";

export const Cart = () => {
  useTitle(`Cart`);

  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="flex items-center justify-center font-bold my-8 p-2 text-2xl ">
          Cart Itesms: {products.length}
        </h1>
        {products.map((product) => (
          <CartCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
