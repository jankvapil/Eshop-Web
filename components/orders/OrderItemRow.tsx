
import { OrderItem } from '../../core/types'

interface OrderItemProps {
  orderItem: OrderItem
}

///
/// Order Item
///
const OrderItemRow: React.FC<OrderItemProps> = ({
  orderItem
}) => {  
  return (
    <li key={orderItem.id}>
        { orderItem.count }x | { orderItem.product[0].name } | ${ orderItem.product[0].price }
    </li>
  )
}

export default OrderItemRow