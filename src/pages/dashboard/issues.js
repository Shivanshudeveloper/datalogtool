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
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

import { gtm } from "../../lib/gtm";

const Issues = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard: Attack Surface | Material Kit Pro</title>
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
            <Grid item xs={12}>
              <Card>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 5 }} spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography>Details</Typography>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Issues.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Issues;
