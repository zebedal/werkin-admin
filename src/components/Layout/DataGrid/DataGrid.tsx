import Grid from "@mui/material/Grid";
import { DataGrid as Table, GridEventListener } from "@mui/x-data-grid";
import Modal from "components/Modal/Modal";
import { rows, columns } from "mocks/dataGrid";
import { useState } from "react";
import styles from "./DataGrid.module.scss";

export interface RowParams {
  id: number;
  firstName: string;
  lastName: string;
  cohort: string;
  job: string;
  organization: string;
  personal: number;
  shared: number;
  status: string;
  roles: string;
}

const DataGrid = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowParams | undefined>(
    undefined
  );

  const handleRowClick: GridEventListener<"rowClick"> = (params) => {
    setIsModalOpen(true);
    setSelectedRow(params.row);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Grid padding={2}>
        <Table
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15, 20]}
          onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
          pagination
          autoHeight
          onRowClick={handleRowClick}
          className={styles.Wrapper}
        />
      </Grid>
      {isModalOpen && selectedRow && (
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          params={selectedRow}
        />
      )}
    </>
  );
};

export default DataGrid;
