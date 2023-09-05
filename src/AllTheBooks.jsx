import Books from "./data/scifi.json";
import { Card } from "react-bootstrap";

const AllTheBooks = () => (
  <div className="container">
    <div className="row">
      {Books.map((book, index) => (
        <div className="col-12 col-md-6 col-lg-4 gy-5 " key={`book-${index}`}>
          <Card className="m-auto">
            <Card.Img style={{ height: "300px", objectFit: "contain" }} variant="top" src={book.img} />
            <Card.Body>
              <Card.Title className="fs-6">{book.title}</Card.Title>
              <Card.Text>{`${book.price}$`}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </div>
);
export default AllTheBooks;
