import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import EnvToggler from "./EnvToggler/EnvToggler";

const BaseLayout = () => (
  <Box height="100vh">
    <Grid container height="100%" columnSpacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <EnvToggler />
    </Grid>
  </Box>
);

export default BaseLayout;
