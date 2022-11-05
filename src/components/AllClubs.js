import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  FormControl,
  Modal,
  TextField,
  InputAdornment,
} from "@mui/material";
import { muiAbtn } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PercentIcon from "@mui/icons-material/Percent";
import DescriptionIcon from "@mui/icons-material/Description";

import { Box } from "@mui/system";

export default function AllClubs() {
  // const [rows, setRows] = useState([]);
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [Type, setType] = useState("");
  const [OpeningHours, setOpeningHours] = useState("");
  const [Courts, setCourts] = useState("");
  const [open, setOpen] = useState(false);

  const [SubscriptionFee, setSubscriptionFee] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => {
    setOpen1(false);
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
      field: "name",
      headerName: "Club Name",
      width: "220",
    },
    {
      field: "Type",
      headerName: "Type",
      width: "120",
    },
    {
      field: "Courts",
      headerName: "Courts",
      width: "100",
    },
    {
      field: "Location",
      headerName: "Location",
      width: "200",
    },
    {
      field: "Action",
      headerName: "Action",
      width: "430",

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

          // onClick={}
        >
          View
        </Button>
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
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={muiAbtn}
          onClick={handleClickOpen}
          startIcon={<DescriptionIcon />}
        >
          Export
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
      name: "Sonic Stadium",
      Type: "Indoor",
      Courts: "1",
      Location: "1030 Walnut Street",
    },
  ];

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
          <b>ALL CLUBS</b>
        </h1>
        <div className="d-flex justify-content-end mb-4">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{ backgroundColor: "#007DED", marginRight: 15 }}
            onClick={handleOpen1}
            startIcon={<PercentIcon />}
          >
            Set Subscription Plan
          </Button>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon
                    onClick={handleClose1}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                </Box>
                <h4 className="mb-4">SET SUBSCRIPTION PLAN</h4>

                <div>
                  <FormControl fullWidth size="small">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Subscription Fee"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={SubscriptionFee}
                      onChange={(e) => setSubscriptionFee(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PercentIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </div>
                <Button
                  fullWidth
                  className="mt-2 "
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  <PercentIcon style={{ marginRight: 10 }} />
                  Submit
                </Button>
              </form>
            </Box>
          </Modal>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{ backgroundColor: "#007DED" }}
            onClick={handleOpen}
            startIcon={<AddIcon />}
          >
            Add New Club
          </Button>
        </div>

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
              <h4 className="mb-4">ADD NEW CLUB</h4>

              <div>
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Club Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Club Location"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={Location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>
                <div className="row">
                  <div className="col">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="outlined-basic"
                        label="Opening Hours"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={OpeningHours}
                        onChange={(e) => setOpeningHours(e.target.value)}
                      />
                    </FormControl>
                  </div>
                  <div className="col">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="outlined-basic"
                        label="No. of Courts"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={Courts}
                        onChange={(e) => setCourts(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
              <Button
                fullWidth
                className="mt-2 muibtn"
                variant="contained"
                color="primary"
                size="small"
              >
                <AddIcon style={{ marginRight: 10 }} />
                ADD NEW CLUB
              </Button>
            </form>
          </Box>
        </Modal>
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
