import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import styles from "./EnvToggler.module.scss";

const EnvToggler = () => (
  <Grid
    xs={9}
    container
    height="80px"
    alignItems="center"
    className={styles.Container}
  >
    <Grid item xs={7}>
      Master
    </Grid>
    <Grid
      item
      xs={5}
      alignItems="center"
      display="flex"
      justifyContent="flex-end"
      gap={2}
    >
      <Grid>Filter by:</Grid>
      <FormControl className={styles.FormControl} size="small">
        <InputLabel id="demo-simple-select-label">Environment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Environment"
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
);

export default EnvToggler;