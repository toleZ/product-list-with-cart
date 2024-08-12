import { useDispatch } from "react-redux";
import orderConfirmedIconURL from "../assets/images/icon-order-confirmed.svg";
import OrderProductContainer from "./OrderProductContainer";
import { emptyCart } from "../redux/feactures/cartSlice";

const OrderModal = ({ show, handleShow }) => {
  const dispatch = useDispatch();

  const handleContinue = () => {
    handleShow();
    dispatch(emptyCart());
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 max-h-[75vh] w-[40%] overflow-auto p-6 bg-white rounded-xl shadow-md ${
        show ? "scale-100" : "scale-0"
      } transition-all duration-300 delay-200`}
    >
      <img src={orderConfirmedIconURL} alt="Order Confirmed" />

      <div className="my-3">
        <p className="text-3xl text-brand-rose-900 font-bold">
          Order Confirmed
        </p>
        <p className="text-brand-rose-300">We hope you enjoy your food!</p>
      </div>

      <OrderProductContainer />

      <button
        onClick={handleContinue}
        className="p-3 w-full text-brand-rose-50 font-semibold bg-brand-red rounded-full"
      >
        Start New Order
      </button>
    </div>
  );
};

export default OrderModal;
