import React, { useState } from "react";
import  BarChartComponent from "./BarChartComponent"
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplication: data } = useAppContext();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area chart" : "Bar chart"}
      </button>
      {barChart ? <BarChartComponent data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
