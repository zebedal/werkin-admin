import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import { MdOutlineFilterList, MdChevronRight } from "react-icons/md";
import styles from "./Filters.module.scss";

const Filters = () => {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const handleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  return (
    <Grid
      xs={12}
      container
      gap={2}
      alignItems="center"
      justifyContent="flex-end"
      pt={6}
      pb={0}
      pr={2}
      style={{ flexWrap: "nowrap" }}
    >
      <Button
        variant="contained"
        color="success"
        onClick={handleFilters}
        endIcon={
          !filtersOpen ? (
            <MdOutlineFilterList
              size={25}
              color="white"
              className={styles.Icon}
            />
          ) : (
            <MdChevronRight size={25} color="white" className={styles.Icon} />
          )
        }
      >
        {!filtersOpen ? "Filters" : "Close"}
      </Button>

      {filtersOpen && (
        <Grid container className={styles.FiltersWrapper} gap={2} xs={8}>
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
      )}
    </Grid>
  );
};

export default Filters;
