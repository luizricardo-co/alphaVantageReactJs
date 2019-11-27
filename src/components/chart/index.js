import React from "react";
import { Chart } from "react-google-charts";
import { ChartContent } from "./styled";

function ChartData(data) {
  return (
    <ChartContent>
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="AreaChart"
        className="App-chart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Period", "High", "Low", "Transitons per"],
          ["2013", 1000, 400, 121],
          ["2014", 1170, 460, 102],
          ["2015", 660, 1120, 126],
          ["2016", 1030, 540, 12]
        ]}
        options={{
          title: "Company Performance",
          hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: "50%", height: "70%" }
          // lineWidth: 25
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </ChartContent>
  );
}

export default ChartData;
