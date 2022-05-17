import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Stack,
  Card,
  CardContent,
  Select,
  InputLabel,
  FormControl,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper,
  TableHead,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import { AnalyticsGeneralOverview } from "../../components/dashboard/analytics/analytics-general-overview";
import { AnalyticsMostVisited } from "../../components/dashboard/analytics/analytics-most-visited";
import { AnalyticsSocialSources } from "../../components/dashboard/analytics/analytics-social-sources";
import { AnalyticsVisitsByCountry } from "../../components/dashboard/analytics/analytics-visits-by-country";
import { AnalyticsTrafficSources } from "../../components/dashboard/analytics/analytics-traffic-sources";
import { Reports as ReportsIcon } from "../../icons/reports";
import { gtm } from "../../lib/gtm";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(num, vendor, score) {
  return { num, vendor, score };
}

const rows = [
  createData(1, "Zoho", 10),
  createData(1, "Zoho", 20),
  createData(2, "Marketing", 30),
  createData(2, "Marketing", 40),
  createData(3, "Cisco", 50),
  createData(4, "Mohayyer", 60),
  createData(5, "Mohayyer", 70),
  createData(6, "Mohayyer", 80),
  createData(7, "Mohayyer", 90),
  createData(8, "Mohayyer", 100),
];
const scoreColor = {
  10: "#6B0101",
  20: "#AB0000",
  30: "#D80000",
  40: "#F25012",
  50: "#FC713C",
  60: "#FFA556",
  70: "#FFEA32",
  80: "#CFEC7E",
  90: "#89EC7E",
  100: "#5FFF4E",
};
const ScoreBox = ({ score }) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: scoreColor[score],
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          borderRadius: 0.5,
        }}
      >
        <Typography
          sx={{ color: score >= 60 ? "black" : "white", fontWeight: 500 }}
          variant="h7"
        >
          {score}
        </Typography>
      </Box>
    </>
  );
};

const index = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  const [lastOverallScore, setLastOverallScore] = React.useState(7);
  const handleChangeLastOverallScore = (event) => {
    setLastOverallScore(event.target.value);
  };

  const [lastTotalIssues, setLastTotalIssues] = React.useState(3);
  const handleChangeLastTotalIssues = (event) => {
    setLastTotalIssues(event.target.value);
  };

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
          <Box sx={{ mb: 4 }}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item>
                <Typography variant="h4">Dashboard</Typography>
              </Grid>
              {/* <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  m: -1
                }}
              >
                <Button
                  startIcon={<ReportsIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="outlined"
                >
                  Reports
                </Button>
                <TextField
                  defaultValue="week"
                  label="Period"
                  select
                  size="small"
                  sx={{ m: 1 }}
                >
                  <MenuItem value="week">Last week</MenuItem>
                  <MenuItem value="month">Last month</MenuItem>
                  <MenuItem value="year">Last year</MenuItem>
                </TextField>
              </Grid> */}
            </Grid>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Stack spacing={2} sx={{ height: "100%" }}>
                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    {" "}
                    <Typography sx={{ textAlign: "center" }}>
                      Total Third Party Apps
                    </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="h2">
                      40
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ height: "100%" }}>
                  <CardContent>
                    {" "}
                    <Typography sx={{ textAlign: "center" }}>
                      Total Issues
                    </Typography>{" "}
                    <Typography sx={{ textAlign: "center" }} variant="h2">
                      40
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <Typography sx={{ textAlign: "center" }} variant="h6">
                      Overall Score
                    </Typography>
                    <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                      <FormControl
                        variant="standard"
                        sx={{ minWidth: 90 }}
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
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={5}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  {" "}
                  <Typography sx={{ textAlign: "left" }} variant="h6">
                    Third Party Issue Severity
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}></Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            <Grid item xs={8}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <Typography sx={{ textAlign: "center" }} variant="h6">
                      Total Issues
                    </Typography>
                    <Box>
                      <FormControl
                        variant="standard"
                        sx={{ minWidth: 90 }}
                        size="small"
                      >
                        <Select
                          sx={{ fontSize: "0.7rem" }}
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={lastTotalIssues}
                          onChange={handleChangeLastTotalIssues}
                        >
                          <MenuItem sx={{ fontSize: "0.8rem" }} value={3}>
                            Last 3 months
                          </MenuItem>
                          <MenuItem sx={{ fontSize: "0.8rem" }} value={6}>
                            Last 6 months
                          </MenuItem>
                          <MenuItem sx={{ fontSize: "0.8rem" }} value={12}>
                            Last 12 months
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  {" "}
                  <Typography sx={{ textAlign: "left" }} variant="h6">
                    Third Party at Risk
                  </Typography>
                  <TableContainer component={Paper} sx={{ mt: 3 }}>
                    <Table
                      sx={{ maxWidth: "100%" }}
                      aria-label="customized table"
                    >
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="center">No.</StyledTableCell>
                          <StyledTableCell align="center">
                            Vendor
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            Score
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {row.num}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {row.vendor}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <ScoreBox score={row.score} />
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* <AnalyticsGeneralOverview /> */}
          {/* <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              <Grid item md={8} xs={12}>
                <AnalyticsTrafficSources sx={{ height: "100%" }} />
              </Grid>
              <Grid item md={4} xs={12}>
                <AnalyticsVisitsByCountry />
              </Grid>
              <Grid item md={8} xs={12}>
                <AnalyticsMostVisited />
              </Grid>
              <Grid item md={4} xs={12}>
                <AnalyticsSocialSources />
              </Grid>
            </Grid>
          </Box> */}
        </Container>
      </Box>
    </>
  );
};

index.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default index;
