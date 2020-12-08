
import DataGrid, { 
  Column, 
  Pager, 
  Paging }
from 'devextreme-react/data-grid'

///
/// Component displays all brands
///
export default function OrdersGrid({orders}) { 
  return (
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

      <Column dataField="id" caption="ID" />
      <Column dataField="orderDate" caption="Order Date" />
      <Column dataField="totalPrice" caption="Total Price" />
    </DataGrid>
  )
}
