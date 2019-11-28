import React from "react";
import { Chart } from "react-google-charts";
import { ChartContent } from "./styled";
import PropTypes from "prop-types";

const subtitle = ["Period", "High"];

function ChartData({ indexes }) {
  if (!indexes["Time Series (5min)"]) {
    alert(
      `Houve um problema na pesquisa.\nPor favor tente novamente!\n${indexes.Note}`
    );

    return <div />;
  }

  const chartData = [];
  chartData.push(subtitle);
  const keys = Object.keys(indexes["Time Series (5min)"]);

  for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    const vwlu = [
      new Date(element),
      Number(indexes["Time Series (5min)"][element]["2. high"])
    ];
    chartData.push(vwlu);
  }

  return (
    <ChartContent>
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: "Company Performance",
          hAxis: { title: "Year", titleTextStyle: { color: "#000" } },
          vAxis: { minValue: 0 },
          chartArea: { width: "60%", height: "70%" },
          lineWidth: 2
        }}
        rootProps={{ "data-testid": "1" }}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "DateRangeFilter",
            options: {
              filterColumnLabel: "Period",
              ui: { format: { pattern: "YYYY-MM" } }
            }
          }
        ]}
      />
    </ChartContent>
  );
}

ChartData.propTypes = {
  indexes: PropTypes.any
};

ChartData.defaultProps = {
  indexes: {}
};
export default ChartData;
