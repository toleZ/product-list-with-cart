import { useDispatch } from "react-redux";
import removeIconURL from "../assets/images/icon-remove-item.svg";
import { removeProduct } from "../redux/feactures/cartSlice";

const CartProduct = ({ ProductData: { id, name, price, quantity } }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProduct({ id, quantity }));
  };

  return (
    <li className="p-2 pb-4 mb-4 flex justify-between items-center border-b-[2px] border-brand-rose-100">
      <div>
        <p className="text-brand-rose-900 font-semibold">{name}</p>
        <div className="flex gap-6">
          <span className="text-brand-red font-semibold">{quantity}x</span>
          <span className="text-brand-rose-200">@ ${price}</span>
          <span className="text-brand-rose-200 font-semibold">
            ${quantity * price}
          </span>
        </div>
      </div>
      <button
        className="p-1 border-[1px] border-brand-rose-500 hover:border-brand-rose-900 rounded-full text-xl transition-all duration-300"
        onClick={handleRemove}
      >
        <img
          src={removeIconURL}
          alt="Remove"
          className="fill-brand-rose-500 hover:fill-brand-rose-900 transition-all duration-300"
        />
      </button>
    </li>
  );
};

export default CartProduct;
