// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import MyHome from "./MyHome";
import AllTheBooks from "./AllTheBooks";

function App() {
  return (
    <header>
      <MyNav home="Home" about="About" Browse="browse" brand="React, EpiBooks" />
      <MyHome />
      <AllTheBooks />
      <MyFooter />
    </header>
  );
}

export default App;
