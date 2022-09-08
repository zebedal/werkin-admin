import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import EnvToggler from "./EnvToggler/EnvToggler";
import Filters from "./Filters/Filters";
import DataGrid from "./DataGrid/DataGrid";

const BaseLayout = () => (
  <Box height="100vh">
    <Grid container height="100%">
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid xs={10} container direction="column">
        <EnvToggler />
        <Filters />

        <DataGrid />
      </Grid>
    </Grid>
  </Box>
);

export default BaseLayout;
