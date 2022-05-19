import React, { useEffect } from "react";
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
                <Tab label="Assets" {...a11yProps(1)} />
                <Tab label="CVE" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Container maxWidth="xl">
                <Grid container>
                  <Grid item xs={3}>
                    <Typography sx={{ textAlign: "center" }}>CISCO</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography sx={{ textAlign: "center" }}>
                      zoho.com
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography sx={{ textAlign: "center" }}>
                      Address
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>
                      Some Random address here
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <center>
                      <Button variant="contained" color="primary">
                        Add New
                      </Button>
                    </center>
                  </Grid>
                </Grid>

                <Grid spacing={2} sx={{ mt: 4, mb: 4 }} container>
                  <Grid item xs={4}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Typography sx={{ textAlign: "center" }}>
                          Third Party Serverity
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Typography sx={{ textAlign: "center" }}>
                          Third Party Serverity
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{ height: "100%" }}>
                      <CardContent>
                        <Typography sx={{ textAlign: "center" }}>
                          Total Issues
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <GradeTable />
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
                        <Typography variant="h5">Attack Surface</Typography>
                      </Grid>
                    </Grid>
                  </Box>{" "}
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      {" "}
                      <TextField
                        sx={{ mb: 2 }}
                        fullWidth
                        label="Name"
                      ></TextField>
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
                  <Attacksurfacetable />
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
                        <Typography variant="h5">CVE Profile</Typography>
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
