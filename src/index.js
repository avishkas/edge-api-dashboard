import React from 'react';
import ReactDOM from 'react-dom';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function App() {
  return (
    <Grid container direction="column" >
      <Grid item>
        hello
      </Grid>
      <Divider dark/>
      <Grid container justifyContent="center">
        <div style={{width: '97%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              autoPageSize
              autoHeight
              components={{
                Toolbar: GridToolbar,
              }}
            />
        </div>
      </Grid>
    </Grid>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));