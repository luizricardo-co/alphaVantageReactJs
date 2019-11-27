// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Button, SearchInput} from './components'

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div style={{flex:1, flexDirection:'column'}}>
//           <div style={{flex: 1, flexDirection: 'row'}}>
//             <SearchInput placeholder={"Paste URL here"} ></SearchInput>
//             <Button primary>Search</Button>
//           </div>
//           <div className="row">
//             <div className="column">
//               <h2>Column 3</h2>
//               <p>Some text..</p>
//             </div>
//           </div>
//         </div>

//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Main from "./views/main";
import { Provider } from "react-redux";
import configureStore from "./store";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
