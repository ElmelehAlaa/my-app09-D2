import { Card } from "react-bootstrap";

const SingleBook = (props) => (
  <div>
    <Card className="m-auto">
      <Card.Body>
        <Card.Img style={{ height: "300px", objectFit: "contain" }} variant="top" src={props.img} />
        <Card.Title className="fs-6">{props.title}</Card.Title>
      </Card.Body>
    </Card>
  </div>
);
export default SingleBook;
