import { useDispatch, useSelector } from "react-redux";
import addIconURL from "../assets/images/icon-add-to-cart.svg";
import { addProduct, removeProduct } from "../redux/feactures/cartSlice";

const ProductCard = ({ cardData }) => {
  const { id, name, category, price, image } = cardData;

  const { products } = useSelector(({ cart }) => cart);
  const product = products.find((prod) => prod.id === id);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct({ id }));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <article>
      <div>
        <header className="relative mb-8">
          <img
            src={image.desktop}
            alt={name}
            className={`rounded-xl ${product && "border-4 border-brand-red"}`}
          />
          {!product ? (
            <button
              className="absolute -bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center gap-2 w-3/4 p-3 bg-white border-2 border-brand-rose-300 hover:border-brand-red rounded-full font-semibold hover:text-brand-red transition-all duration-300"
              onClick={handleAddProduct}
            >
              <img src={addIconURL} alt="Add to cart" />
              <p>Add to cart</p>
            </button>
          ) : (
            <div className="absolute -bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-around gap-8 w-3/4 p-3 bg-brand-red rounded-full font-semibold text-brand-rose-50">
              <button
                className="text-brand-rose-50 hover:text-brand-red hover:bg-brand-rose-50 p-1 border-[1px] border-brand-rose-50 rounded-full transition-all duration-300"
                onClick={handleRemoveProduct}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path d="M0 .375h10v1.25H0V.375Z" fill="currentColor" />
                </svg>
              </button>
              <span>{product.quantity}</span>
              <button
                className="text-brand-rose-50 hover:text-brand-red hover:bg-brand-rose-50 p-1 border-[1px] border-brand-rose-50 rounded-full transition-all duration-300"
                onClick={handleAddProduct}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                >
                  <path
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          )}
        </header>
        <section className="flex flex-col">
          <span className="text-brand-rose-400">{category}</span>
          <span className="text-brand-rose-900 font-semibold">{name}</span>
          <span className="text-brand-red font-bold">${price}</span>
        </section>
      </div>
    </article>
  );
};

export default ProductCard;
