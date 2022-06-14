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
import Test from '../main.json';

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

  const uniqueArray = Test.misconfiguration.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === Test.misconfiguration.findIndex(res => {
      return JSON.stringify(res) === _value;
    });
  });

  console.log(uniqueArray)

  var clean = Test.misconfiguration.filter((arr, index, self) =>
    index === self.findIndex((t) => (t.save === Test.misconfiguration.save && t.State === Test.misconfiguration.State)))

console.log(clean);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow) => (
        <TableCell align="left" component="th" scope="row">
          <tr>{historyRow.Issues1}</tr>
          <tr>{historyRow.Issues2}</tr>
          <tr>{historyRow.Issues3}</tr>
          <tr>{historyRow.Issue4}</tr>
          <tr>{historyRow.Issue5}</tr>
          <tr>{historyRow.Issue6}</tr>
          <tr>{historyRow.Issue7}</tr>
          <tr>{historyRow.Issue8}</tr>
          <tr>{historyRow.Issue9}</tr>
          <tr>{historyRow.Issue10}</tr>
          <tr>{historyRow.Issue11}</tr>
          <tr>{historyRow.Issue12}</tr>
          <tr>{historyRow.Issue13}</tr>
          <tr>{historyRow.Issue14}</tr>
          <tr>{historyRow.Issue15}</tr>
          <tr>{historyRow.Issue16}</tr>
          <tr>{historyRow.Issue17}</tr>
        </TableCell>
         ))}
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
      {clean.map((historyRow) => (
        <TableCell align="left" component="th" scope="row">
          <tr>{historyRow.Issues1}</tr>
          <tr>{historyRow.Issues2}</tr>
          <tr>{historyRow.Issues3}</tr>
          <tr>{historyRow.Issue4}</tr>
          <tr>{historyRow.Issue5}</tr>
          <tr>{historyRow.Issue6}</tr>
          <tr>{historyRow.Issue7}</tr>
          <tr>{historyRow.Issue8}</tr>
          <tr>{historyRow.Issue9}</tr>
          <tr>{historyRow.Issue10}</tr>
          <tr>{historyRow.Issue11}</tr>
          <tr>{historyRow.Issue12}</tr>
          <tr>{historyRow.Issue13}</tr>
          <tr>{historyRow.Issue14}</tr>
          <tr>{historyRow.Issue15}</tr>
          <tr>{historyRow.Issue16}</tr>
          <tr>{historyRow.Issue17}</tr>
        </TableCell>
         ))}
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
      {clean.map((historyRow) => (
        <TableCell align="left" component="th" scope="row">
         <tr>{historyRow.Issues1}</tr>
          <tr>{historyRow.Issues2}</tr>
          <tr>{historyRow.Issues3}</tr>
          <tr>{historyRow.Issue4}</tr>
          <tr>{historyRow.Issue5}</tr>
          <tr>{historyRow.Issue6}</tr>
          <tr>{historyRow.Issue7}</tr>
          <tr>{historyRow.Issue8}</tr>
          <tr>{historyRow.Issue9}</tr>
          <tr>{historyRow.Issue10}</tr>
          <tr>{historyRow.Issue11}</tr>
          <tr>{historyRow.Issue12}</tr>
          <tr>{historyRow.Issue13}</tr>
          <tr>{historyRow.Issue14}</tr>
          <tr>{historyRow.Issue15}</tr>
          <tr>{historyRow.Issue16}</tr>
          <tr>{historyRow.Issue17}</tr>
        </TableCell>
         ))}
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
