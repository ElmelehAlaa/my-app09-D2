import SingleBook from "./SingleBook";
import Books from "./data/scifi.json";
const BookList = (props) => (
  <div>
    {Books.map((book) => (
      <SingleBook props={book} title={book.title} img={book.img} />
    ))}
  </div>
);
export default BookList;
