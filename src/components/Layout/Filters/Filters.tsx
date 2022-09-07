import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { MdOutlineFilterList } from "react-icons/md";
import { Colors } from "utils/consts";
import styles from "./Filters.module.scss";

const Filters = () => (
  <Grid padding={2}>
    <Typography variant="h5" className="subtitles">
      Member List
    </Typography>
    <Grid mt={3} container gap={2} alignItems="center">
      <MdOutlineFilterList size={25} color={Colors.DarkGrey} />
      <FormControl
        size="small"
        className={styles.FormControl}
        sx={{ outline: "red" }}
      >
        <InputLabel color="success">Collective</InputLabel>
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
      <FormControl size="small" className={styles.FormControl}>
        <InputLabel color="success">Cohort</InputLabel>
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
      <FormControl size="small" className={styles.FormControl}>
        <InputLabel color="success">Role</InputLabel>
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
      <FormControl size="small" className={styles.FormControl}>
        <InputLabel color="success">Matched</InputLabel>
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

export default Filters;
