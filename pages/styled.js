import dynamic from "next/dynamic";
import { useEffect } from "react";
import {
  getOrdersFromApi,
  getMonthlyValues,
  organizeByYear,
} from "./api/orders";

const CustomChart = dynamic(import("../components/customChart"), {
  ssr: false,
});

const styled = () => {
  const getOrders = async () => {
    const res = await fetch("http://localhost:3000/api/orders");
    const data = await res.json();
    console.log(data);
    const organized = await organizeByYear(data);
    console.log(organized);
    const valuesPerMonth = await getMonthlyValues(organized);
    console.log(valuesPerMonth);
  };

  const getAPIorders = () => {
    getOrdersFromApi();
  };

  return (
    <div>
      <button onClick={getOrders}>Get orders</button>
      <button onClick={getAPIorders}>Get orders From API</button>
      <CustomChart />
    </div>
  );
};

export default styled;
