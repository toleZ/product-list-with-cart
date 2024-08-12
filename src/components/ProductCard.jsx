import { useDispatch, useSelector } from "react-redux";
import addIconURL from "../assets/images/icon-add-to-cart.svg";
import decrementIconURL from "../assets/images/icon-decrement-quantity.svg";
import incrementIconURL from "../assets/images/icon-increment-quantity.svg";
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
              className="absolute -bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-2 py-2 px-6 bg-white border-2 border-brand-rose-300 hover:border-brand-red rounded-full font-semibold hover:text-brand-red transition-all duration-300"
              onClick={handleAddProduct}
            >
              <img src={addIconURL} alt="Add to cart" />
              <p>Add to cart</p>
            </button>
          ) : (
            <div className="absolute -bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-around gap-8 py-2 px-6 bg-brand-red rounded-full font-semibold text-brand-rose-50">
              <button
                className="fill-brand-rose-50 hover:fill-brand-red transition-all duration-300"
                onClick={handleRemoveProduct}
              >
                <img src={decrementIconURL} alt="decrement" />
              </button>
              <span>{product.quantity}</span>
              <button
                className="fill-brand-rose-50 hover:fill-brand-red transition-all duration-300"
                onClick={handleAddProduct}
              >
                <img src={incrementIconURL} alt="increment" />
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
