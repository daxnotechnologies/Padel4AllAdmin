import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from "@mui/material";
import { muiAbtn } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function AllUsers() {
  // const [rows, setRows] = useState([]);
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
      headerName: "Name",
      width: "190",
    },
    {
      field: "Email",
      headerName: "Email",
      width: "270",
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: "120",
    },
    {
      field: "Level",
      headerName: "Level",
      width: "140",
    },
    {
      field: "Action",
      headerName: "Action",
      width: "250",

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
      name: "John",
      Email: "John@gmail.com",
      Gender: "Male",
      Level: "Beginner",
    },
    {
      id: 2,
      name: "Stark",
      Email: "Stark@gmail.com",
      Gender: "Male",
      Level: "Beginner",
    },
    {
      id: 3,
      name: "Arya",
      Email: "Arya@gmail.com",
      Gender: "FeMale",
      Level: "Beginner",
    },
    {
      id: 4,
      name: "Jon",
      Email: "Jon@gmail.com",
      Gender: "Male",
      Level: "Intermediate",
    },
    {
      id: 5,
      name: "Daenerys",
      Email: "Daenerys@gmail.com",
      Gender: "Female",
      Level: "Beginner",
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
          <b>ALL PLAYERS</b>
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
