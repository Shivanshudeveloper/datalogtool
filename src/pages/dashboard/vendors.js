import { useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Typography,
} from "@mui/material";
import { AuthGuard } from "../../components/authentication/auth-guard";
import { DashboardLayout } from "../../components/dashboard/dashboard-layout";
import VendorsTable from "../../components/VendorsTable";
import { gtm } from "../../lib/gtm";

const vendors = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard: Analytics | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
            <Typography sx={{ mb: 2 }} variant="h4">Vendors</Typography>


            <Button
                color="primary"
                variant='contained'
                sx={{ float: 'right', ml: 2 }}
            >
                Add New
            </Button>
            <Button
                color="primary"
                variant='outlined'
                sx={{ float: 'right' }}
            >
                Filters
            </Button>
            <br />
            <br />
            <br />
            
            <VendorsTable />
          
        </Container>
      </Box>
    </>
  );
};

vendors.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>{page}</DashboardLayout>
  </AuthGuard>
);

export default vendors;
