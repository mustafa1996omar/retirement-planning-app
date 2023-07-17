import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';

function Tables({ data }) {
  const [Loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);

    // Simulate an asynchronous data loading process
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [data]);
  
  if (!data || data.length === 0) {
    return <LinearProgress sx={{ width: '95%', margin: '0 auto' }} />
  } 
  else {
    const columns = Object.keys(data[0]).map((header) => ({
      field: header,
      headerName: header.charAt(0).toUpperCase() + header.slice(1).replaceAll('_', ' '),
      flex: 1,
    }));
  
    return (
      <div style={{ height: 500, width: '95%', margin: '0 auto' }}>
        <DataGrid rows={data} loading={Loading} columns={columns} slots={{ toolbar: GridToolbar }} />
      </div>
    );
  };

}

export default Tables;
