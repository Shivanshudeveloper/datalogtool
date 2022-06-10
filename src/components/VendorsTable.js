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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('ZOHO', 'subdomain.com', 6.0),
];

export default function VendorsTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {Test.domain.substring(0,Test.domain.length-3)}
              </TableCell>
              <TableCell align="center">{Test.domain}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
