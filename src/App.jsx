import { useEffect, useState } from "react";
import AsideCart from "./components/AsideCart";
import CardsContainer from "./components/CardsContainer";
import OrderModal from "./components/OrderModal";

const App = () => {
  const [showOrderModal, setShowHorderModal] = useState(false);

  const handleShow = () => setShowHorderModal(!showOrderModal);

  useEffect(() => {
    if (showOrderModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showOrderModal]);

  return (
    <>
      <>
        <div
          className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-black bg-opacity-50 z-[5] ${
            showOrderModal ? "scale-100" : "scale-0"
          }`}
        />
        <OrderModal show={showOrderModal} handleShow={handleShow} />
      </>
      <main className="p-14 grid grid-cols-4 gap-6">
        <section className="col-span-3">
          <span className="block pb-6 text-3xl font-extrabold">Desserts</span>
          <CardsContainer />
        </section>
        <AsideCart onConfirmOrder={handleShow} />
      </main>
    </>
  );
};

export default App;
