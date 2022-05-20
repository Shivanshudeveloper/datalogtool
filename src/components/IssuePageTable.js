import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, CardContent, Chip, Divider, Grid } from "@mui/material";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "blog.test.com",
        customerId: "Subdomain",
      },
      {
        date: "test.test.com",
        customerId: "Subdomain",
      },
      {
        date: "test2.test.com",
        customerId: "Subdomain",
      },
      {
        date: "test3.test.com",
        customerId: "Subdomain",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" component="th" scope="row">
          Zone Transfer
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      Name
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Info
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Remediation
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Refrences
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Domain
                      <br />
                      <br />
                      <br />
                      <br />
                    </CardContent>
                  </Card>
                  
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" component="th" scope="row">
          Something
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          Breach Something
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen2(!open2)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  <Typography>Breach</Typography>
                  <Card>
                    <CardContent>
                      Info
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Remediation
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Email
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>


      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" component="th" scope="row">
          Something
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          Email Leak
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen3(!open3)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open3} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  <Typography>Email Leak</Typography>
                  <Card>
                    <CardContent>
                      Info
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Remediation
                      <br />
                      <br />
                      <br />
                      <br />
                      <Divider />
                      Email
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [createData("www.test.com")];

export default function IssuePageTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Serverity</TableCell>
            <TableCell>View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
