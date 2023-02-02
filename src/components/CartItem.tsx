import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import mockData from '../data/products.json';
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: string,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()

    const item = mockData.find(item => item.id === id)
    if (item == null) return null;

    return <>
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
            <img src={item.imageUrl} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className="text-muted">[x{quantity}]</span>}
                </div>
                <div className="text-muted" style={{ fontSize: '.85rem' }}>{formatCurrency(item.price)}</div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size='sm' onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    </>
}