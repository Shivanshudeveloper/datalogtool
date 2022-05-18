import React from "react";
import { useTheme } from "@mui/material/styles";
import { Chart } from "../chart";
import { Card, Grid, Typography } from "@mui/material";

const PercentPieChart = (props) => {
  const theme = useTheme();
  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    labels: ["Health"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true,
            color: theme.palette.text.secondary,
            fontSize: "12px",
            fontWeight: 400,
            offsetY: 20,
          },
          value: {
            color: theme.palette.text.primary,
            fontSize: "18px",
            fontWeight: 600,
            offsetY: -20,
          },
        },
        hollow: {
          size: "60%",
        },
        track: {
          background: theme.palette.background.default,
        },
      },
    },
    states: {
      active: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  };
  return (
    <>
      <Grid item key={props.label} xs={12}>
        <Card
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            p: props.showInfo && 2,
          }}
          // variant={props.showInfo && "outlined"}
        >
          {/* <Typography sx={{ color: props.color }} variant="h6">
            {props.label}
          </Typography> */}
          <Chart
            height={200}
            options={{
              ...chartOptions,
              colors: [props.color],
            }}
            series={[props.value]}
            type="radialBar"
          />
          {props.showInfo && (
            <>
              <Typography variant="h6">{props.value}</Typography>
              <Typography color="textSecondary" variant="body2">
                {props.subtitle}
              </Typography>
            </>
          )}
        </Card>
      </Grid>
    </>
  );
};
export default PercentPieChart;
