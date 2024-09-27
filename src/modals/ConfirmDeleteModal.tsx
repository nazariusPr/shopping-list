import { Modal, Button } from "react-bootstrap";

type ConfirmDeleteModalProps = {
  show: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  productName: string;
};

function ConfirmDeleteModal({
  show,
  handleClose,
  handleConfirm,
  productName,
}: ConfirmDeleteModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to remove <strong>{productName}</strong> from the
        cart?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDeleteModal;
