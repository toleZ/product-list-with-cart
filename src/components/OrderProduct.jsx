const OrderProduct = ({
  product: {
    name,
    quantity,
    price,
    image: { thumbnail },
  },
}) => {
  return (
    <li className="pb-4 flex items-center justify-between border-b-[1px] border-brand-rose-300">
      <div className="flex items-center">
        <img src={thumbnail} alt={name} className="rounded-xl w-[75px] mr-3" />
        <div className="flex flex-col gap-3">
          <p className="whitespace-nowrap text-brand-rose-900 font-semibold">
            {name}
          </p>
          <div className="flex gap-3">
            <span className="text-sm text-brand-red font-semibold">
              {quantity}x
            </span>
            <span className="text-sm text-brand-rose-300">@ ${price}</span>
          </div>
        </div>
      </div>
      <div>${price * quantity}</div>
    </li>
  );
};

export default OrderProduct;
