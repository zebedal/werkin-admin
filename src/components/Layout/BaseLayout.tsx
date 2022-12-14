import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import EnvToggler from "./EnvToggler/EnvToggler";
import MembersList from "components/MembersList/MembersList";
import MatchList from "components/MatchList/MatchList";
import { Routes, Route } from "react-router-dom";

const BaseLayout = () => (
  <Box height="100vh">
    <Grid container height="100%">
      <Grid item xs={3} md={2} padding={1}>
        <Sidebar />
      </Grid>
      <Grid xs={9} md={10} pt={1}>
        <EnvToggler />
        <Routes>
          <Route path="/" element={<MembersList />} />
          <Route path="/match" element={<MatchList />} />
        </Routes>
      </Grid>
    </Grid>
  </Box>
);

export default BaseLayout;
