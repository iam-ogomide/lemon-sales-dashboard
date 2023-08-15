import { Box, Typography, useTheme, Stack } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";

const Emp = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
        field: "function",
        headerName: "Job Role",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderCell:({row:{status}}) => {
            return(
                <Box
            width="auto"
            mr="10px"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "online"
                ? colors.greenAccent[600]
                : status === "offline"
                ? colors.grey[700]
                : colors.grey[700]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} >
              {status}
            </Typography>
          </Box>
            )
        }
      },
   
  ];

  return (
    <Box  m="20px">
      <Header title="Employees Information" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            // backgroundColor: colors.blueAccent[500],
            // borderBottom: "none",
            fontWeight:'bold',
            fontSize:'16px'
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
         
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }} style={{fontSize:"13px"}}/>
      </Box>
    </Box>
  )
}

export default Emp