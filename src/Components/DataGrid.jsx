
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import "../styles/datagrid.css"
import { useState } from 'react';

function DataGrid() {
      const [gridData, setGridData] = useState([
        { name: "Smartphone", price: 699, stock: 50, category: "Electronics", salesLastMonth: 120, rating: 4.5 },
        { name: "Laptop", price: 999, stock: 30, category: "Electronics", salesLastMonth: 80, rating: 4.2 },
        { name: "Headphones", price: 99, stock: 200, category: "Audio", salesLastMonth: 300, rating: 4.7 },
        { name: "Tablet", price: 300, stock: 75, category: "Electronics", salesLastMonth: 150, rating: 4.0 },
        { name: "Tablet", price: 300, stock: 75, category: "Electronics", salesLastMonth: 150, rating: 4.0 },
        { name: "Tablet", price: 300, stock: 75, category: "Electronics", salesLastMonth: 150, rating: 4.0 }
      ]);
//Pagination
 const pageSettings = { pageSize: 4};

 //Sorting
 const sortSettings = {
   columns: [{ field: "price", direction: "Ascending" }],
 };
 //Grouping
 const groupSettings = { columns: ['name'] };

  return (
    <div className='grid'>
  <h1 >DATA GRID</h1>
    <div className=''>
     <div style={{ padding: '20px' }}>

 <div>
 
  </div>    
      <h2>Product Data</h2>
      <GridComponent dataSource={gridData} allowPaging={true} pageSettings={pageSettings} allowSorting={true} sortSettings={sortSettings} allowGrouping={true} groupSettings={groupSettings} >
        <ColumnsDirective  textAlign="Center" >
          <ColumnDirective field='name' headerText='Product' />
          <ColumnDirective field='price' headerText='Price' />
          <ColumnDirective field='stock' headerText='Stock' />
          <ColumnDirective field='category' headerText='Category' />
          <ColumnDirective field='salesLastMonth' headerText='Sales Last Month' />
          <ColumnDirective field='rating' headerText='Rating' />
        </ColumnsDirective>
                <Inject services={[Page, Sort, Group]}/>

      </GridComponent>
      
      
      
    </div>
    </div>
    </div>
  )
}

export default DataGrid

