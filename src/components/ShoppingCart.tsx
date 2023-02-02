import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import mockData from '../data/products.json';

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartProducts } = useShoppingCart();

    return <>
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartProducts.map(item => (
                        <CartItem key={item.id} {...item}></CartItem>
                    ))}
                    <div className="ms-auto fw-bold fs-5">Total  {formatCurrency(
                        cartProducts.reduce((total, cartItem) => {
                            const item = mockData.find(i => i.id === cartItem.id)

                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                    )}</div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    </>

}