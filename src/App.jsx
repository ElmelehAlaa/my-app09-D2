// import logo from './logo.svg';
import Books from "./data/scifi.json";
import "./App.css";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import MyHome from "./MyHome";
// import AllTheBooks from "./AllTheBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./SingleBook";
import BookList from "./BookList";

function App() {
  return (
    <div>
      <MyNav home="Home" about="About" Browse="browse" brand="React, EpiBooks" />
      <MyHome />
      {/* <AllTheBooks /> */}
      <BookList props="{Books}">
        <SingleBook />
      </BookList>
      <MyFooter />
    </div>
  );
}

export default App;
