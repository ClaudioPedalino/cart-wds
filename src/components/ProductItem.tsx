import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export function ProductItem({ id, name, price, imageUrl }: ProductItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imageUrl}
          height="200px"
          style={{ objectFit: 'cover' }}
        />
        <Card.Body className="n-flex flex-column">
          <Card.Title className="d-flex justify-content-space-between align-items-baseline">
            <span className="fs-2">{name}</span>
          </Card.Title>
          <Card.Title className="d-flex justify-content-space-between align-items-baseline">
            <span className="text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100" onClick={() => increaseCartQuantity(id)}>Add to cart</Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: '.5rem' }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: '.5rem' }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="fs-3">{quantity} </span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" onClick={() => removeFromCart(id)}>Remove</Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
