import { useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  CardContent,
  Typography,
  Card
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import GradeTable from "../../components/GradeTable";

import { gtm } from "../../lib/gtm";

const Analytics = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

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
            <Grid container>
                <Grid item xs={3}>
                <Typography sx={{ textAlign: "center" }}>CISCO</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ textAlign: "center" }}>zoho.com</Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography sx={{ textAlign: "center" }}>Address</Typography>
                <Typography sx={{ textAlign: "center" }}>Some Random address here</Typography>
                </Grid>
                <Grid item xs={3}>
                    <center>
                        <Button
                            variant="contained"
                            color="primary"
                        >
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
