import React, { useEffect,useReducer } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  CardContent,
  Typography,
  Card,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import GradeTable from "../../components/GradeTable";
import Attacksurfacetable from "../../components/Attacksurfacetable";
import Cvetable from "../../components/Cvetable";
import { gtm } from "../../lib/gtm";
import PropTypes from "prop-types";
import IssuePageTable from "../../components/IssuePageTable";
import { Chart } from "../../components/chart";
import { useTheme } from "@mui/material/styles";
import PercentPieChart from "../../components/charts/PercentPieChart";
import { useRouter } from 'next/router'
import Test from '../main.json'
import Link from 'next/link';
import { useAuth } from "../../hooks/use-auth";
import { useMounted } from "../../hooks/use-mounted";
import firebase from '../../lib/firebase';
import {

  
  FormControl,
  Select,

  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";



import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";


import AreaChartGraph from "../../components/charts/AreaChartGraph";
import Tooltip from '@mui/material/Tooltip';
import Attack from '../../attack_surface.json'
import { enGB } from "date-fns/locale";


const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const reducer = (state, action) => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    };
  }

  return state;
};
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


const data = {
  series: [
    {
      color: "#FFB547",
      data: 14859,
      label: "Strategy",
    },
    {
      color: "#7BC67E",
      data: 35690,
      label: "Outsourcing",
    },
    {
      color: "#7783DB",
      data: 45120,
      label: "Marketing",
    },
    {
      color: "#9DA4DD",
      data: 25486,
      label: "Other",
    },
  ],
};

const Analytics = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, px: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const theme = useTheme();

  const chartOptions2 = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: data.series.map((item) => item.color),
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    labels: data.series.map((item) => item.label),
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  const [lastOverallScore, setLastOverallScore] = React.useState(7);
  const handleChangeLastOverallScore = (event) => {
    setLastOverallScore(event.target.value);
  };




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

  const chartSeries = data.series.map((item) => item.data);
  const router = useRouter()
  const { id } = router.query

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
  
const arr = new Array(state.user)
if(arr[0].email===Attack.email)
{
  const a = Attack.severity_count
  const b = Attack.score
  const c = Attack.attack_surface_counts
}

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          {" "}
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Issues" {...a11yProps(1)} />
                <Tab label="CVE" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
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
                    {c[0].Subdomains}

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
                  {c[0].IPv4}
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
                  {c[0].TotalIssues}
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
                  {c[0].Breaches}
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
                    
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>Critical</Typography>
                    

                    <h7>{a[0].Critical}</h7>

                  <br />
                  <br />
                    
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>High</Typography>
                    

                      <h7>{a[0].High}</h7>

                  <br />
                  <br />
                    <Tooltip title="76%">
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>Medium</Typography>
                    </Tooltip>

                   
                    <h7>{a[0].Medium}</h7>
                  <br />
                  <br />
                    <Tooltip title="76%">
                      <Typography sx={{ textAlign: "left", cursor: 'pointer' }}>Low</Typography>
                    </Tooltip>
                    <h7>{a[0].Low}</h7>
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
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 4,
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
                      <IssuePageTable />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 4,
                }}
              >
                <Container maxWidth="xl">
                  <Box sx={{ mb: 4 }}>
                    <Grid container justifyContent="space-between" spacing={3}>
                      <Grid item>
                        <Typography variant="h4">CVE Profile</Typography>
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
                      <Typography sx={{ textAlign: "center" }}>
                        www.zoho.com
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ textAlign: "center" }}>
                        Hosting
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        Go Daddy
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography sx={{ textAlign: "center" }}>
                        IP Address
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        192.168.1.1
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ mt: 5 }}>
                    <Grid item xs={12}>
                      <Cvetable />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </TabPanel>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Analytics.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default Analytics;
