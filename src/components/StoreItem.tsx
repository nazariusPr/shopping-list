import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatter";
import { useShoppingCart } from "../context/ShoppingCartContex";
import { useState } from "react";
import AddProductModal from "../modals/AddProductModal";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

function StoreItem({ id, name, price, imageUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleConfirmDelete = () => {
    removeFromCart(id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imageUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={() => setShowModal(true)}>
                Add to Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span>
                    in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => setShowDeleteModal(true)} // Show confirmation modal
                  >
                    Remove
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>

      <AddProductModal
        show={showModal}
        productId={id}
        handleClose={() => setShowModal(false)}
        handleAddProduct={increaseCartQuantity}
      />

      <ConfirmDeleteModal
        show={showDeleteModal}
        productName={name}
        handleClose={() => setShowDeleteModal(false)}
        handleConfirm={handleConfirmDelete}
      />
    </>
  );
}

export default StoreItem;
