import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { findProductById, getCountOfProduct } from "../utilities/productUtils";
import { formatCurrency } from "../utilities/formatter";
import CommentComponent from "../components/Comment";

type AddProductModalProps = {
  show: boolean;
  productId: number;
  handleClose: () => void;
  handleAddProduct: (productId: number, count: number) => void;
};

function AddProductModal({
  show,
  productId,
  handleClose,
  handleAddProduct,
}: AddProductModalProps) {
  const product = findProductById(productId);
  const comments = product.comments;
  const availableCount = getCountOfProduct(productId);
  const [count, setCount] = useState(1);

  const handleSubmit = () => {
    handleAddProduct(productId, count);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add "{product.name}" to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>
            <strong>Price: {formatCurrency(product.price * count)}</strong>
          </p>
        </div>

        {availableCount > 0 ? (
          <Form>
            <Form.Group controlId="formProductCount">
              <Form.Label>Count</Form.Label>
              <Form.Control
                type="number"
                value={count}
                min={1}
                max={availableCount}
                onChange={(e) => setCount(Number(e.target.value))}
              />
            </Form.Group>
          </Form>
        ) : (
          <p>This product is sold out.</p>
        )}

        <h5 className="mt-4">Comments:</h5>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentComponent key={comment.id} comment={comment} />
          ))
        ) : (
          <p>No comments available for this product.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        {availableCount > 0 && (
          <Button variant="primary" onClick={handleSubmit}>
            Add to Cart
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default AddProductModal;
