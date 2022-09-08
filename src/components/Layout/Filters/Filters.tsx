import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MdOutlineFilterList } from "react-icons/md";
import { Colors } from "utils/consts";
import styles from "./Filters.module.scss";

const Filters = () => {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const handleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  return (
    <Grid
      padding={2}
      container
      direction="column"
      style={{ flexWrap: "nowrap" }}
    >
      <Grid
        xs={12}
        container
        gap={2}
        alignItems="center"
        mt={2}
        mb={2}
        justifyContent="flex-end"
      >
        <Button
          variant="contained"
          color="success"
          endIcon={
            <MdOutlineFilterList
              size={25}
              color="white"
              onClick={handleFilters}
              className={styles.Icon}
            />
          }
        >
          Filters
        </Button>

        {filtersOpen && (
          <>
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
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Filters;
