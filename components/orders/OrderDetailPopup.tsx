
import { Popup } from 'devextreme-react/popup'

import OrderItemRow from 'components/orders/OrderItemRow'

///
/// Apps Page
///
export default function OrderDetailPopup({
  selectedOrder,
  popupVisible,
  setPopupVisible
}) {  
  return (
    <div id="container">
      <Popup
        visible={popupVisible}
        onHiding={() => setPopupVisible(false)}
        dragEnabled={false}
        closeOnOutsideClick={true}
        showTitle={true}
        title="Order detail"
        width={300}
        height={200}
      >
        <div></div>
        
        <div>
          {/* <h1>Detail of order { selectedOrder.id }</h1> */}
          <h2>Total price: ${ selectedOrder ? selectedOrder.totalPrice : ""}</h2>
          {/* <button onClick={() => console.log(selectedOrder)}>Click</button> */}

          <ul>
            { selectedOrder ? selectedOrder.orderItems.map(oi => (<OrderItemRow key={oi.id} orderItem={oi} />)) : ""}
          </ul>
        </div>
      </Popup>
    </div>
  )
}
