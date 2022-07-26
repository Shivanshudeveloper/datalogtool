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
import { useReducer } from 'react';
import firebase from '../lib/firebase';



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
      const res = await fetch(`${API_SERVICE}/vendors/`, {
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
  const initialState = {
    user: null
  };
  const reducer = (state, action) => {
    if (action.type === 'AUTH_STATE_CHANGED') {
      const { isAuthenticated, user } = action.payload;
  
      return user;
    }
  
    return state;
  };
  

  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  

  useEffect(() => firebase.auth().onAuthStateChanged((user) => {
    if (user) {

      sessionStorage.setItem("userId", user.uid);
      sessionStorage.setItem("userEmail", user.email);

      // Here you should extract the complete user profile to make it available in your entire app.
      // The auth state only provides basic information.
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: true,
          user: {
            id: user.uid,
            avatar: user.photoURL,
            email: user.email,
            name: user.displayName,
            plan: 'Premium'
          }
        }
      });
    } else {
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }), [dispatch]);
  const a = membershipdata.filter((c)=>{
    return c.user===state.id
  })
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
         {a.map((c)=>
            <TableRow key={c}>
              <TableCell component="th" scope="row">
             {c.name}
              </TableCell>
              <TableCell align="center">{c.target}</TableCell>
              <TableCell align="center">{c.score}</TableCell>
              <TableCell align="center">
                  <Chip color='success' label='Monitor' />
              </TableCell>
              <TableCell align="center">
                    <Button
                      color='primary'
                    >
                     <Link  href={{ pathname: "/dashboard/websiteprofile/", query: { id: "test.com" } }}>
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
