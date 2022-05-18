import { useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Card,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import IssuePageTable from "../../components/IssuePageTable";

import { gtm } from "../../lib/gtm";
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
const Cve = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);
  const row = [
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
  ];
  return (
    <>
      <Head>
        <title>Dashboard: Attack Surface</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Attack Surface</Typography>
              </Grid>
            </Grid>
          </Box>{" "}
          <Grid container>
            <Grid item xs={12} sx={{ mb: 4 }}>
              <Typography sx={{ textAlign: "center" }}>
                Issue Profile
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography sx={{ textAlign: "center" }}>Host</Typography>
              <Typography sx={{ textAlign: "center" }}>www.zoho.com</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ textAlign: "center" }}>Hosting</Typography>
              <Typography sx={{ textAlign: "center" }}>Go Daddy</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ textAlign: "center" }}>IP Address</Typography>
              <Typography sx={{ textAlign: "center" }}>192.168.1.1</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 5 }}>
            {" "}
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Serverity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((historyRow) => (
                  <TableRow key={historyRow.date}>
                    <TableCell component="th" scope="row">
                      CVE 2022-2010
                    </TableCell>
                    <TableCell>
                      <Chip label="Critical" color="error" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          {/* <Grid container sx={{ mt: 5 }} spacing={2}>
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
          </Grid> */}
        </Container>
      </Box>
    </>
  );
};

Cve.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Cve;
