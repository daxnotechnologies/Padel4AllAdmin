import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  Box,
  Modal,
} from "@mui/material";
import { modalstyle, muiAbtn, starIcon } from "./style";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

export default function UserReviews() {
  // const [rows, setRows] = useState([]);
  const [Feedback, setFeedback] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: "60" },
    {
      field: "pname",
      headerName: "Player Name",
      width: "190",
    },
    {
      field: "cname",
      headerName: "Club Name",
      width: "220",
    },
    {
      field: "Rating",
      headerName: "Rating",
      width: "160",
      renderCell: () => {
        return (
          <>
            <StarIcon style={starIcon} />
            <StarIcon style={starIcon} />
            <StarIcon style={starIcon} />
            <StarIcon style={starIcon} />
            <StarIcon style={starIcon} />
          </>
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      width: "400",

      editable: false,
      renderCell: ActionButton,
    },
  ];

  function ActionButton() {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          startIcon={<RemoveRedEyeIcon />}
          onClick={handleOpen}
        >
          View
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form>
              <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                <CloseIcon
                  onClick={handleClose}
                  style={{ cursor: "pointer", color: "gray" }}
                />
              </Box>
              <div>
                <div className="d-flex justify-content-center mb-4">
                  <StarIcon style={starIcon} />
                  <StarIcon style={starIcon} />
                  <StarIcon style={starIcon} />
                  <StarIcon style={starIcon} />
                  <StarIcon style={starIcon} />
                </div>
                <div>
                  <FormControl fullWidth size="small">
                    <TextField
                      multiline
                      rows={3}
                      className="mb-4"
                      id="outlined-basic"
                      label="Feedback"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={Feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                //   onClick={handleClickOpen}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            </form>
          </Box>
        </Modal>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          startIcon={<CheckCircleIcon />}

          // onClick={}
        >
          Approve
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          onClick={handleClickOpen}
          startIcon={<CancelIcon />}
        >
          Unapprove
        </Button>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure to delete the program?"}
          </DialogTitle>

          <DialogActions>
            <Button
            // onClick={}
            >
              Yes
            </Button>
            <Button onClick={handleCloseDialog} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }

  const rows = [
    {
      id: 1,
      pname: "John Doe",
      cname: "Sonic Stadium",
      Type: "Indoor",
      Location: "1030 Walnut Street",
    },
    {
      id: 2,
      pname: "Elizabeth",
      cname: "Padel United",
      Type: "Outdoor",
      Location: "1031 Walnut Street",
    },
    {
      id: 3,
      pname: "John Doe",
      cname: "Sonic Stadium",
      Type: "Indoor",
      Location: "1030 Walnut Street",
    },
    {
      id: 4,
      pname: "John Doe",
      cname: "Sonic Stadium",
      Type: "Indoor",
      Location: "1030 Walnut Street",
    },
    {
      id: 5,
      pname: "Hazel Clark",
      cname: "Sporting",
      Type: "Indoor",
      Location: "1040 Walnut Street",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: 40,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 30, borderRadius: 10 }}>
        <h1
          className="mb-4 py-4"
          style={{ textAlign: "center", color: "#051F7C" }}
        >
          <b>PLAYER'S FEEDBACKS</b>
        </h1>

        <div>
          <DataGrid
            style={{ height: "65vh", width: "100%" }}
            columns={columns}
            rows={rows}
            // getRowId={(Rows) => Rows._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </Card>
    </div>
  );
}
