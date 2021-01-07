
import DataGrid, { 
  Column, 
  Pager, 
  Paging,
} from 'devextreme-react/data-grid'

///
/// Component displays all brands
///
export default function UsersGrid({
  users
}) { 
  
  ///////////////////////////////

  return (
    <section>
      <header>
        <h2 style={{margin: '0 0 20px 10px'}}>Users</h2>
      </header>
      <DataGrid
        dataSource={users}
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
        <Column dataField="name" caption="Name">

        </Column>
        <Column dataField="email" caption="Email" />
      </DataGrid>
    </section>
  )
}
