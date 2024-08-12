import { useSelector } from "react-redux";
import OrderProduct from "./OrderProduct";

const OrderProductContainer = () => {
  const { products, totalAmount } = useSelector(({ cart }) => cart);

  return (
    <div className="py-2 px-6 my-6 rounded-lg bg-brand-rose-100">
      <ul className="grid gap-6">
        {products?.map((item) => (
          <OrderProduct product={item} key={item.id} />
        ))}
      </ul>
      <div className="py-6 flex justify-between">
        <span className="text-brand-rose-900 text-sm">Order Total</span>
        <span className="text-brand-rose-900 text-xl font-bold">
          ${totalAmount}
        </span>
      </div>
    </div>
  );
};

export default OrderProductContainer;
