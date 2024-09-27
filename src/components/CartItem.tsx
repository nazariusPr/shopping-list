import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContex";
import storeItems from "../data/storeItems";
import { formatCurrency } from "../utilities/formatter";
import { useState } from "react";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  if (item == null) return null;

  const handleConfirmDelete = () => {
    removeFromCart(item.id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.imageUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="me-2">{formatCurrency(item.price * quantity)}</div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => setShowDeleteModal(true)}
          >
            &times;
          </Button>
        </div>
      </Stack>

      <ConfirmDeleteModal
        show={showDeleteModal}
        productName={item.name}
        handleClose={() => setShowDeleteModal(false)} // Close modal on cancel
        handleConfirm={handleConfirmDelete}
      />
    </>
  );
}

export default CartItem;
