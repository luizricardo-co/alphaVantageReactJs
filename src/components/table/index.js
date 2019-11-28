import React from "react";
import { Chart } from "react-google-charts";
import { TableContent } from "./styled";
import PropTypes from "prop-types";
import Button from "../buttom";
const subtitle = [
  { type: "date", label: "Date" },
  { type: "number", label: "Open" },
  { type: "number", label: "high" },
  { type: "number", label: "low" },
  { type: "number", label: "close" },
  { type: "number", label: "volume" }
];

function TableData({ indexes }) {
  if (!indexes["Time Series (Daily)"]) {
    alert(
      `Houve um problema na pesquisa.\nPor favor tente novamente!\n${indexes.Note}`
    );

    return <div />;
  }

  const chartData = [];
  chartData.push(subtitle);
  const keys = Object.keys(indexes["Time Series (Daily)"]);

  for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    const vwlu = [
      new Date(element),
      Number(indexes["Time Series (Daily)"][element]["1. open"]),
      Number(indexes["Time Series (Daily)"][element]["2. high"]),
      Number(indexes["Time Series (Daily)"][element]["3. low"]),
      Number(indexes["Time Series (Daily)"][element]["4. close"]),
      Number(indexes["Time Series (Daily)"][element]["5. volume"])
    ];
    chartData.push(vwlu);
  }

  return (
    <TableContent>
      <Chart
        width={"900px"}
        height={"300px"}
        chartType="Table"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          showRowNumber: true,
          title: "Company Performance"
        }}
        rootProps={{ "data-testid": "2" }}
        chartPackages={["corechart", "controls"]}
        controls={[
          {
            controlType: "DateRangeFilter",
            options: {
              filterColumnLabel: "Date",
              ui: { format: { pattern: "YYYY/MM" } }
            }
          }
        ]}
      />
      <Button value={indexes["Meta Data"]["2. Symbol"]} />
    </TableContent>
  );
}

TableData.propTypes = {
  indexes: PropTypes.any
};

TableData.defaultProps = {
  indexes: {}
};
export default TableData;
