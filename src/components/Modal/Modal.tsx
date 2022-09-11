import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { RowParams } from "components/Layout/DataGrid/DataGrid";
import { Colors } from "utils/consts";
import { MdClose } from "react-icons/md";
import styles from "./Modal.module.scss";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  params: RowParams;
}

const Modal = ({ open, onClose, params }: SimpleDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box padding={3} className={styles.ModalHeader}>
        <Typography id="modal-modal-title" variant="h6" color={Colors.Green}>
          Hi {params.firstName}
        </Typography>
        <MdClose
          color={Colors.Green}
          size={25}
          className={styles.CloseIcon}
          onClick={onClose}
        />
      </Box>
      <Box padding={3} style={{ overflowY: "auto" }}>
        <Box>
          <div className={styles.WorkbookTitle}>
            {params.firstName} personal programme workbook
          </div>
          <p className={styles.SmallText}>
            This updates the personal programme workbook link on the WERKIN
            Nudgeboard.
          </p>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            fullWidth
            defaultValue="https://docs.google.com/document/d/"
            InputProps={{
              classes: {
                input: styles.TextField,
              },
            }}
          />
          <p className={styles.TimeStamp}>Last updated 12.58 GMT, 06/09/22</p>
        </Box>
        <Box>
          <div className={styles.WorkbookTitle}>
            {params.firstName} shared programme workbook
          </div>
          <p className={styles.SmallText}>
            This updates the personal programme workbook link on the WERKIN
            Nudgeboard and will automatically update the link for the match as
            well.
          </p>
          <p>
            <strong>{params.firstName}</strong> is matched with Kevin Vigneault
          </p>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            fullWidth
            defaultValue="https://docs.google.com/document/d/"
            color="secondary"
            InputProps={{
              classes: {
                input: styles.TextField,
              },
            }}
          />
          <p className={styles.TimeStamp}>Last updated 12.58 GMT, 06/09/22</p>
        </Box>
        <Box>
          <div className={styles.WorkbookTitle}>
            {params.firstName} shared programme workbook
          </div>
          <p className={styles.SmallText}>
            This updates the personal programme workbook link on the WERKIN
            Nudgeboard and will automatically update the link for the match as
            well.
          </p>
          <p>
            <strong>{params.firstName}</strong> is matched with Lance Guitin
          </p>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            fullWidth
            defaultValue="https://docs.google.com/document/d/"
            color="secondary"
            InputProps={{
              classes: {
                input: styles.TextField,
              },
            }}
          />
          <p className={styles.TimeStamp}>Last updated 12.58 GMT, 06/09/22</p>
        </Box>
      </Box>
      <Divider light />
      <Grid container padding={3} justifyContent="flex-end">
        <Button variant="contained" color="success">
          Update
        </Button>
      </Grid>
    </Dialog>
  );
};

export default Modal;
