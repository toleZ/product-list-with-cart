import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const CardsContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "./src/db/data.json";
        const res = await axios.get(URL);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-3 gap-6">
      {data?.map((cardData) => (
        <ProductCard key={uuidv4()} cardData={cardData} />
      ))}
    </section>
  );
};

export default CardsContainer;
