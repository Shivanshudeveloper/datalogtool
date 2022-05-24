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
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Chart } from "../../components/chart";
import { useTheme } from "@mui/material/styles";


import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";

import AreaChartGraph from "../../components/charts/AreaChartGraph";
import Tooltip from '@mui/material/Tooltip';

import { gtm } from "../../lib/gtm";
import PercentPieChart from "../../components/charts/PercentPieChart";

const BorderLinearProgressCritical = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "red" : "red",
  },
}));

const BorderLinearProgressHigh = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "orange" : "orange",
  },
}));

const BorderLinearProgressMedium = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "yellow" : "yellow",
  },
}));

const BorderLinearProgressLow = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "green" : "green",
  },
}));


const data3 = {
  series: [{ data: [10, 5, 11, 20, 13, 28, 18, 4, 13, 12, 13, 5] }],
  categories: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
};

const AttackSurface = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  const [lastOverallScore, setLastOverallScore] = React.useState(7);
  const handleChangeLastOverallScore = (event) => {
    setLastOverallScore(event.target.value);
  };

  const theme = useTheme();


  const chartOptions3 = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#00ab57'],
    dataLabels: {
      enabled: false
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical'
      },
      type: 'gradient'
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2
    },
    markers: {
      size: 6,
      strokeColors: theme.palette.background.default,
      strokeWidth: 3
    },
    stroke: {
      curve: 'smooth'
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: data3.categories,
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
                formatter: (value) => (value > 0 ? `${value}K` : value),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  const chartSeries3 = data3.series;

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
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Sub-domains
                  </Typography>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    1k
                  </Typography>
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
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    IPv4
                  </Typography>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    2k
                  </Typography>
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
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Total Issues
                  </Typography>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    40
                  </Typography>
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
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Breaches
                  </Typography>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    20
                  </Typography>
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
                    <Tooltip title="Critical">
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>Critical</Typography>
                    </Tooltip>

                    <Tooltip title="Critical">
                      <BorderLinearProgressCritical
                        sx={{ cursor: 'pointer' }}
                        variant="determinate"
                        value={50}
                      />
                    </Tooltip>

                  <br />
                  <br />
                    <Tooltip title="High">
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>High</Typography>
                    </Tooltip>

                    <Tooltip title="High">
                      <BorderLinearProgressHigh sx={{ cursor: 'pointer' }} variant="determinate" value={75} />
                    </Tooltip>

                  <br />
                  <br />
                    <Tooltip title="Medium">
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>Medium</Typography>
                    </Tooltip>

                    <Tooltip title="Medium">
                      <BorderLinearProgressMedium
                        variant="determinate"
                        value={20}
                        sx={{ cursor: 'pointer' }}
                      />
                    </Tooltip>

                  <br />
                  <br />
                    <Tooltip title="Low">
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>Low</Typography>
                    </Tooltip>
                    <Tooltip title="Low">
                      <BorderLinearProgressLow sx={{ cursor: 'pointer' }} variant="determinate" value={80} />
                    </Tooltip>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  {" "}
                  <Typography sx={{ textAlign: "left", float: "left" }}>
                    Total Issues
                  </Typography>
                  <FormControl
                    variant="standard"
                    sx={{ minWidth: 90, float: "right" }}
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
                  {/* <AreaChartGraph /> */}
                  <Chart
                    width={750}
                    options={chartOptions3}
                    series={chartSeries3}
                    type="area"
                  />
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
                <CardContent>
                  <PercentPieChart
                    color="#4CAF50"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    DNS
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <PercentPieChart
                    color="#F30F1F"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Encryption
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <PercentPieChart
                    color="#E6FF00"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Network
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <PercentPieChart
                    color="#ffa500"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Misconfigurations
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <PercentPieChart
                    color="#4CAF50"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Issues
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <PercentPieChart
                    color="#4CAF50"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Issues
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <PercentPieChart
                    color="#4CAF50"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Issues
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <PercentPieChart
                    color="#4CAF50"
                    label="Very good"
                    subtitle="Excellent"
                    value="85"
                  />
                  <Divider />
                  <Typography
                    textAlign="center"
                    sx={{ mt: 2, fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Issues
                  </Typography>
                </CardContent>
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
