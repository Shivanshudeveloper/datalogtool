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

const Assets = () => {
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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {" "}
              <TextField fullWidth label="Name"></TextField>
            </Grid>
            {/* <Grid item xs={12}>
              {" "}
              <TextField fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <TextField fullWidth></TextField>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Assets.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Assets;
