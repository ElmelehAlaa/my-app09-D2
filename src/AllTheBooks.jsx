import Books from "./data/scifi.json";
import { Card } from "react-bootstrap";

const AllTheBooks = (props) => (
  <div className="container">
    <div className="row">
      {Books.map((book) => (
        <>
          <div className="col-12 col-md-6 col-lg-4 gy-5">
            <Card style={{ width: "200px" }} className="m-auto">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title className="fs-6">{book.title}</Card.Title>
                <Card.Text>{book.category}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </>
      ))}
    </div>
  </div>
);
export default AllTheBooks;
