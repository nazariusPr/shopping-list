import { Row, Col } from "react-bootstrap";
import storeItems from "../data/storeItems";
import StoreItem from "../components/StoreItem";

function Store() {
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {storeItems.map((item) => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
}

export default Store;
