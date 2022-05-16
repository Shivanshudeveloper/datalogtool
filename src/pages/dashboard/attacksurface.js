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

const AttackSurface = () => {
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
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    Sub-domains
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}>1k</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>IPv4</Typography>
                  <Typography sx={{ textAlign: "center" }}>2k</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    Total Issues
                  </Typography>
                  <Typography sx={{ textAlign: "center" }}>40</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>Breaches</Typography>
                  <Typography sx={{ textAlign: "center" }}>20</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography sx={{ textAlign: "left" }}>
                    Issues by Severity
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  {" "}
                  <Typography sx={{ textAlign: "left" }}>
                    Total Issues
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Security Monitor
                </Typography>
              </Grid>
            </Grid>
          </Box>{" "}
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>{" "}
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

AttackSurface.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default AttackSurface;
