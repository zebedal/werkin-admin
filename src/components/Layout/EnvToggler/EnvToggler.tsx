import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Colors } from "utils/consts";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./EnvToggler.module.scss";

type LocationState = {
  header: string;
};

const EnvToggler = () => {
  const [alignment, setAlignment] = useState("dev");

  const location = useLocation();

  const header = location.state as LocationState;

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box paddingLeft={2} paddingRight={2}>
      <Grid container className={styles.Container}>
        <Grid xs>
          <Typography variant="h5" className="subtitles" color={Colors.Green}>
            {/* {header.header} */}
          </Typography>
        </Grid>
        <Grid xs container justifyContent="flex-end">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              value="dev"
              size="small"
              color="success"
              className={styles.ToggleButton}
            >
              Development
            </ToggleButton>
            <ToggleButton
              value="release"
              size="small"
              color="success"
              className={styles.ToggleButton}
            >
              Release
            </ToggleButton>
            <ToggleButton
              value="prod"
              size="small"
              color="success"
              className={styles.ToggleButton}
            >
              Production
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnvToggler;
