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
import {useState,useEffect} from 'react'
import queryString, { stringify } from "query-string";
import { API_SERVICE } from "../config";
import { useRouter } from 'next/router'


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
  const [membershipdata, setmembershipdata] = useState([]);

  const [id, setid] = useState(null);
  useEffect(() => {
   
      setid(id);
      getthemembersipdata(id);
   
  }, []);

  

  const getthemembersipdata = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/main/tests`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const content = await res.json();
      setmembershipdata(content);
    } catch (err) {
      console.log(err);
    }
  };
  const Row = props;
 var ind = Row.myKey;
  const [open, setOpen] = React.useState(false)
   const arr = Test.patching.filter((a)=>{
      return a.cve[ind] === Row.row
    } )
    console.log(Row)
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left" component="th" scope="row">
        
          {Row.row.CVE} 
          
        
        </TableCell>  
        
        <TableCell align="left" component="th" scope="row"> 
        
       Apache
       
        </TableCell>
        
        
        <TableCell align="left" component="th" scope="row">
        
          <Chip label={Row.row.Severity} color="error" />
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
                      Summary
                      <br />{Row.row.Desc} 
                      <br />  
                      <br />
                      <br />
                      <Divider />
                      Domains & IP
                      <br />{Row.row.Host}
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
const a = Array(Test.patching.map((i)=>{i.cve}))


export default function Cvetable() {
  const router = useRouter();
  const [membershipdata, setmembershipdata] = useState([]);

  const [id, setid] = useState(null);
  useEffect(() => {
   
      setid(id);
      getthemembersipdata(id);
   
  }, []);

  

  const getthemembersipdata = async () => {
    try {
      const res = await fetch(`https://devdatalog.herokuapp.com/api/v1/main/tests`
      );
      const content = await res.json();
      setmembershipdata(content)
    } catch (err) {
      console.log(err);
    }
  };
  const ide = router.query
  return (
    <TableContainer component={Paper}>
       {membershipdata.map((a)=>{
        if(a.domain==ide.id)
        return(
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Technology</TableCell>
            <TableCell>Serverity</TableCell>
            <TableCell>View</TableCell>
          </TableRow>
        </TableHead>
        {a.patching.map((index)=> (
        <TableBody>
          {index.cve.map((i,a)=>
           <Row row={i} key={a} myKey={a}/>
 )}
        </TableBody>
         ))}
      </Table>
       )
      })}
    </TableContainer>
  );
}
