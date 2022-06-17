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
import { Card, CardContent, Chip, Divider, Grid, Hidden } from "@mui/material";
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
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  const [open16, setOpen16] = React.useState(false);
  const [open17, setOpen17] = React.useState(false);
  const [open18, setOpen18] = React.useState(false);
  const [open19, setOpen19] = React.useState(false);
  const [open20, setOpen20] = React.useState(false);
  const [open21, setOpen21] = React.useState(false);
  const [open22, setOpen22] = React.useState(false);
  const [open23, setOpen23] = React.useState(false);
  const [open24, setOpen24] = React.useState(false);
  const [open25, setOpen25] = React.useState(false);
  const [open26, setOpen26] = React.useState(false);


  const uniqueArray = Test.misconfiguration.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === Test.misconfiguration.findIndex(res => {
      return JSON.stringify(res) === _value;
    });
  });

  var clean = Test.misconfiguration.filter((arr, index, self) =>
    index === self.findIndex((t) => (t.save === Test.misconfiguration.save && t.State === Test.misconfiguration.State)))



var newArray = uniqueArray.filter(function (el) {
  return el.Issues1 === "strict-transport-security";
});

var newArray2 = uniqueArray.filter(function (el) {
  return el.Issues2 === "content-security-policy";
});

console.log(newArray2)
var newArray3 = uniqueArray.filter(function (el) {
  return el.Issues3 === "permission-policy";
});

var newArray4 = uniqueArray.filter(function (el) {
  return el.Issue4 === "x-frame-options";
});

var newArray5 = uniqueArray.filter(function (el) {
  return el.Issue5 === "x-content-type-options";
});

var newArray6 = uniqueArray.filter(function (el) {
  return el.Issue6 === "x-permitted-cross-domain-policies";
});

var newArray7 = uniqueArray.filter(function (el) {
  return el.Issue7 === "referrer-policy";
});

var newArray8 = uniqueArray.filter(function (el) {
  return el.Issue8 === "cross-origin-embedder-policy";
});

var newArray9 = uniqueArray.filter(function (el) {
  return el.Issue9 === "cross-origin-opener-policy";
});

var newArray10 = uniqueArray.filter(function (el) {
  return el.Issue10 === "cross-origin-opener-policy";
});

var newArray11 = uniqueArray.filter(function (el) {
  return el.Issue11 === "cross-origin-resource-policy";
});

var newArray12 = uniqueArray.filter(function (el) {
  return el.Issue12 === "access-control-allow-origin";
});

var newArray13 = uniqueArray.filter(function (el) {
  return el.Issue13 === "access-control-allow-credentials";
});

var newArray14 = uniqueArray.filter(function (el) {
  return el.Issue14 === "access-control-expose-headersy";
});

var newArray15 = uniqueArray.filter(function (el) {
  return el.Issue15 === "access-control-max-age";
});

var newArray16 = uniqueArray.filter(function (el) {
  return el.Issue16 === "access-control-allow-methods";
});

var newArray17 = uniqueArray.filter(function (el) {
  return el.Issue17 === "access-control-allow-headers";
});


  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issues1}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray.map((historyRow) => (
                          <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                          <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                           
                          </TableCell>
                          </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issues2}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen10(!open10)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open10} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12}>
                  {" "}
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card >
                    <CardContent>
                      Name
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray2.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>

                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issues3}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen11(!open11)}
          >
            {open11 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open11} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray3.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue4}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen12(!open12)}
          >
            {open12 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open12} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray4.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue5}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen13(!open13)}
          >
            {open13 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open13} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray5.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue6}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen14(!open14)}
          >
            {open14 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open14} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray6.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue7}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen15(!open15)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open15} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray7.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue8}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen16(!open16)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open16} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray8.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue9}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen17(!open17)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open17} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray9.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue10}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen18(!open18)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open18} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray10.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue11}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen19(!open19)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open19} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray11.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue12}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen20(!open20)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open20} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray12.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue13}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen21(!open21)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open21} timeout="auto" unmountOnExit>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray13.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue14}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray14.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue15}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray15.map((historyRow) => (
                         <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                         <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                          
                         </TableCell>
                         </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
          <tr>{historyRow.Issue16}</tr>
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
          DNS
        </TableCell>
        <TableCell align="left" component="th" scope="row">
          <Chip label="Critical" color="error" />
        </TableCell>
        <TableCell>
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray16.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      {clean.map((historyRow, index) => (
        <TableCell align="left" component="th" scope="row"key={index}>
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
          <tr><IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </tr>
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
                      <Divider />
                      Info                   
                      <Divider />
                      Remediation                    
                      <Divider />
                      Refrences                     
                      <Divider />
                      Domain           
                      {newArray17.map((historyRow) => (
                        <div style={{overflow:Hidden}}>              <TableCell align="left" component="th" scope="row">
                         
                        <tr style={{overflow:Hidden}}>{historyRow.Host}</tr>     
                         
                        </TableCell>
                        </div>
                           ))}
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
         
        </TableCell>
         ))}
        <TableCell align="left" component="th" scope="row">
        <tr>DNS</tr>
       
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

const a = Test.patching.map((ind) => {
         return ind.cve
}
)
console.log(a)

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
