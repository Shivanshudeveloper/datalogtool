import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip, Button } from '@mui/material';
import Test from '../test.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
import queryString, { stringify } from "query-string";
import { API_SERVICE } from '../config/API';
import {useState,useEffect} from 'react';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('ZOHO', 'subdomain.com', 6.0),
];

export default function VendorsTable() {

  const router = useRouter();
  const [membershipdata, setmembershipdata] = useState([]);

  const [id, setid] = useState(null);
  useEffect(() => {
   
      setid(id);
      getthemembersipdata(id);
   
  }, []);

  

  const getthemembersipdata = async () => {
    try {
      const res = await fetch(`${API_SERVICE}/vendors`, {
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
  console.log(membershipdata)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Target</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {membershipdata.map((a)=>
            <TableRow key={a._id}>
              <TableCell component="th" scope="row">
                {a.name}
              </TableCell>
              <TableCell align="center">{a.target}</TableCell>
              <TableCell align="center">{a.score}</TableCell>
              <TableCell align="center">
                  <Chip color='success' label='Monitor' />
              </TableCell>
              <TableCell align="center">
                    <Button
                      color='primary'
                    >
                     <Link  href={{ pathname: "/dashboard/websiteprofile/", query: { id: Test.domain } }}>
          View
        </Link>
                    </Button>
              </TableCell>
            </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
