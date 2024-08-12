import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import emptyCartURL from "../assets/images/illustration-empty-cart.svg";

const AsideCart = ({ onConfirmOrder }) => {
  const cart = useSelector(({ cart }) => cart);
  const cartItems = cart.products;

  return (
    <aside className="w-full mobile:w-auto h-fit p-8 bg-white rounded-xl text-sm">
      <header>
        <p className="mb-4 text-2xl text-brand-red font-bold">
          Your cart ({cart.totalQuantity})
        </p>
      </header>

      {cartItems.length ? (
        <>
          <main>
            <ul className="max-h-[50vh] overflow-y-auto">
              {cartItems?.map((item) => (
                <CartProduct ProductData={item} key={item.id} />
              ))}
            </ul>
          </main>

          <footer>
            <div className="my-6 flex justify-between">
              <span>Order Total</span>
              <span className="text-lg text-brand-rose-900 font-bold">
                ${cart.totalAmount}
              </span>
            </div>
            <div className="p-3 flex items-center gap-2 rounded-2xl bg-brand-rose-100">
              <img
                src="./src/assets/images/icon-carbon-neutral.svg"
                alt="Carbon Neutral"
              />
              <p>
                This a <b>carbon-neutral</b> delivery
              </p>
            </div>

            <button
              className="w-full mt-6 p-3 text-center bg-brand-red hover:bg-[#952C0C] rounded-full text-brand-rose-50 font-semibold transition-all duration-300"
              onClick={onConfirmOrder}
            >
              Confirm Order
            </button>
          </footer>
        </>
      ) : (
        <div className="mt-8 flex flex-col items-center">
          <img src={emptyCartURL} alt="Empty Cart Illustration" />
          <span className="mt-2 font-semibold text-brand-rose-500">
            Your added items will appear here
          </span>
        </div>
      )}
    </aside>
  );
};

export default AsideCart;
