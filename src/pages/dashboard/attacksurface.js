import React, { useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  MenuItem,
  TextField,
  FormControl,
  Select,
  Typography,
  Card,
} from "@mui/material";
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

import AreaChartGraph from "../../components/charts/AreaChartGraph";

import { gtm } from "../../lib/gtm";

const BorderLinearProgressCritical = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'red' : 'red',
  },
}));


const BorderLinearProgressHigh = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'orange' : 'orange',
  },
}));

const BorderLinearProgressMedium = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'yellow' : 'yellow',
  },
}));

const BorderLinearProgressLow = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'green' : 'green',
  },
}));

const AttackSurface = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  const [lastOverallScore, setLastOverallScore] = React.useState(7);
  const handleChangeLastOverallScore = (event) => {
    setLastOverallScore(event.target.value);
  };

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
                  <Typography variant='h5' sx={{ textAlign: "center" }}>
                    Sub-domains
                  </Typography>
                  <Typography variant='h5' sx={{ textAlign: "center" }}>1k</Typography>
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
                  <Typography variant='h5'  sx={{ textAlign: "center" }}>IPv4</Typography>
                  <Typography variant='h5'  sx={{ textAlign: "center" }}>2k</Typography>
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
                  <Typography variant='h5'  sx={{ textAlign: "center" }}>
                    Total Issues
                  </Typography>
                  <Typography variant='h5'  sx={{ textAlign: "center" }}>40</Typography>
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
                  <Typography variant='h5'  sx={{ textAlign: "center" }}>Breaches</Typography>
                  <Typography variant='h5'  sx={{ textAlign: "center" }}>20</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Issues by Severity
                  </Typography>
                  <br />
                  <br />
                  <Typography sx={{ textAlign: "left" }}>
                    Critical
                  </Typography>
                  <BorderLinearProgressCritical variant="determinate" value={50} />

                  <br />
                  <br />
                  <Typography sx={{ textAlign: "left" }}>
                    High
                  </Typography>
                  <BorderLinearProgressHigh variant="determinate" value={75} />

                  <br />
                  <br />
                  <Typography sx={{ textAlign: "left" }}>
                    Medium
                  </Typography>
                  <BorderLinearProgressMedium variant="determinate" value={20} />

                  <br />
                  <br />
                  <Typography sx={{ textAlign: "left" }}>
                    Low
                  </Typography>
                  <BorderLinearProgressLow variant="determinate" value={80} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  {" "}
                  <Typography sx={{ textAlign: "left", float: 'left' }}>
                    Total Issues
                  </Typography>
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 90, float: 'right' }}
                    size="small"
                  >
                    <Select
                      sx={{ fontSize: "0.7rem" }}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={lastOverallScore}
                      onChange={handleChangeLastOverallScore}
                    >
                      <MenuItem sx={{ fontSize: "0.8rem" }} value={7}>
                        Last 7 days
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "0.8rem" }} value={14}>
                        Last 14 days
                      </MenuItem>
                      <MenuItem sx={{ fontSize: "0.8rem" }} value={30}>
                        Last 30 days
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <br />

                  <AreaChartGraph />

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
