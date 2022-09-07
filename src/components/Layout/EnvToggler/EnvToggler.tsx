import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Colors } from "utils/consts";
import styles from "./EnvToggler.module.scss";

const EnvToggler = () => (
  <Grid container className={styles.Container}>
    <Grid item xs={7}>
      <span className={styles.Env}>Master</span>
    </Grid>
    <Grid
      item
      xs={5}
      alignItems="center"
      display="flex"
      justifyContent="flex-end"
      gap={2}
    >
      {/* <Grid color={Colors.DarkGrey}>Select environment:</Grid> */}
      <FormControl className={styles.FormControl} size="small">
        <InputLabel color="success">Environment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Environment"
          fullWidth
        >
          <MenuItem value={10}>Development</MenuItem>
          <MenuItem value={20}>Release</MenuItem>
          <MenuItem value={30}>Production</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  </Grid>
);

export default EnvToggler;
