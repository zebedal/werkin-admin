import Grid from "@mui/material/Grid";
import { DataGrid as Table, GridEventListener } from "@mui/x-data-grid";
import { rows, columns } from "mocks/dataGrid";
import { useState } from "react";

const DataGrid = () => {
  const [pageSize, setPageSize] = useState<number>(10);

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    console.log(params);
  };

  return (
    <Grid padding={2} mt={2}>
      <Table
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5, 10, 15, 20]}
        onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
        pagination
        autoHeight
        onRowClick={handleRowClick}
      />
    </Grid>
  );
};

export default DataGrid;
