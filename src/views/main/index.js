import React, { useState } from "react";
import Search from "../../components/searchBar";
import Grid from "../../components/grid";
import Chart from "../../components/chart";
import Table from "../../components/table";
import logo from "../../logo.svg";
import { useSelector } from "react-redux";

import {
  RootContainer,
  ContentSection,
  Logo,
  SearchBarSection,
  GridSection,
  TableSection
} from "./styled";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");

  const companies = useSelector(state => state.companies.companies.bestMatches);
  const indexes = useSelector(state => state.tableReducer.indexes);
  const chartData = useSelector(state => state.chartReducer.data);

  const search = term => {
    setSearchTerm(term);
  };

  return (
    <RootContainer>
      <ContentSection>
        <Logo image={logo} />
        <SearchBarSection>
          <Search handler={e => search(e.target.value)} value={searchTerm} />
        </SearchBarSection>
        <GridSection>
          {companies !== undefined && companies.length > 0 && (
            <Grid items={companies} />
          )}
        </GridSection>
        <TableSection>
          {indexes !== undefined && <Table indexes={indexes} />}
          {chartData !== undefined && <Chart indexes={chartData} />}
        </TableSection>
      </ContentSection>
    </RootContainer>
  );
}

export default Main;
