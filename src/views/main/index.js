import React, { useState } from "react";
import Search from "../../components/searchBar";
import Grid from "../../components/grid";
import Chart from "../../components/chart";
import logo from "../../logo.svg";
import { useSelector } from "react-redux";

import {
  RootContainer,
  ContentSection,
  Logo,
  SearchBarSection,
  GridSection
} from "./styled";

function Main() {
  const [searchTerm, setSearchTerm] = useState("");

  const companies = useSelector(state => state.companies.companies.bestMatches);
  const indexes = useSelector(state => state.chatReducer.indexes);

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
          {indexes !== undefined && <Chart indexes={indexes} />}
        </GridSection>
      </ContentSection>
    </RootContainer>
  );
}

// <div className="App">
//   <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
//     <div style={{flex:1, flexDirection:'column'}}>
//       <div style={{flex: 1, flexDirection: 'row'}}>
//         <SearchInput placeholder={"Paste URL here"} ></SearchInput>
//         <Button primary>Search</Button>
//       </div>
//       <div className="row">
//         <div className="column">
//           <h2>Column 3</h2>
//           <p>Some text..</p>
//         </div>
//       </div>
//     </div>

//   </header>
// </div>
export default Main;
