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

export default function ManageBookings() {
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
      width: "190",
    },
    {
      field: "time",
      headerName: "Time",
      width: "120",
    },
    {
      field: "status",
      headerName: "Status",
      width: "130",
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
                <div>
                  <div
                    style={{
                      padding: 10,
                      backgroundColor: "#051F7C",
                      color: "#fff",
                      marginBottom: 20,
                    }}
                  >
                    <h5>
                      <b>Player's Name:</b> John Doe
                    </h5>
                    <h5>
                      <b>Club's Name:</b> Sonic Stadium
                    </h5>

                    <p>
                      <b>Location:</b>1030 walnut street
                    </p>
                  </div>

                  <h6 className="my-4">
                    <b>Booked Time: 9:30-1:30</b>
                  </h6>

                  <p>
                    <b>Total Booking Cost:</b>$200
                  </p>
                  <div>
                    <h6>
                      <b>Club Owner's:</b> $194
                    </h6>
                    <h6>
                      <b>Admin:</b> $6
                    </h6>
                  </div>
                </div>
              </div>
            </form>
          </Box>
        </Modal>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          startIcon={<EditIcon />}

          // onClick={}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          onClick={handleClickOpen}
          startIcon={<CancelIcon />}
        >
          Cancel
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
      time: "11:00-1:00",
      status: "InProgress",
    },
    {
      id: 2,
      pname: "Elizabeth",
      cname: "Padel United",
      time: "09:30-11:30",
      status: "InProgress",
    },
    {
      id: 3,
      pname: "John Doe",
      cname: "Sonic Stadium",
      time: "1:00-2:30",
      status: "Finished",
    },
    {
      id: 4,
      pname: "John Doe",
      cname: "Sonic Stadium",
      time: "09:30-11:30",

      status: "InProgress",
    },
    {
      id: 5,
      pname: "Hazel Clark",
      cname: "Sporting",
      time: "1:00-2:30",
      status: "Finished",
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
          <b>MANAGE BOOKINGS</b>
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
