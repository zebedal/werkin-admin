import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import EnvToggler from "./EnvToggler/EnvToggler";
import Filters from "./Filters/Filters";

const BaseLayout = () => (
  <Box height="100vh">
    <Grid container height="100%">
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid xs={9} container direction="column">
        <EnvToggler />
        <Filters />
      </Grid>
    </Grid>
  </Box>
);

export default BaseLayout;
