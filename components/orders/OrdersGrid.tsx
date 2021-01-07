
import DataGrid, { 
  Column, 
  Pager, 
  Paging,
} from 'devextreme-react/data-grid'

///
/// Component displays all brands
///
export default function OrdersGrid({
  orders,
  setSelectedOrder, 
  setPopupVisible
}) { 
  
  ///
  /// Handles button click event
  ///
  const onDetailClick = (e) => {
    setPopupVisible(true)
    const order = orders.filter(o => o.id === e.row.values[0])[0]
    setSelectedOrder(order)
  }
  
  ///////////////////////////////

  return (
    <section>
      <header>
        <h2 style={{margin: '0 0 20px 10px'}}>My Orders</h2>
      </header>
      <DataGrid
        dataSource={orders}
        showBorders={true}
        style={{
          float: "left",
          width: "100%",
        }}
      >
        <Paging defaultPageSize={20} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[10, 20, 50]}
          showInfo={true} />

        <Column width={110} dataField="id" caption="ID" />
        <Column dataField="orderDate" caption="Order Date">

        </Column>
        <Column dataField="totalPrice" caption="Total Price" />
        <Column 
          type="buttons"
          width={110}
          buttons={[
            {
              icon: "detailslayout",
              hint: "Detail",
              onClick: onDetailClick
            }
          ]} 
        />
      </DataGrid>
    </section>
  )
}
