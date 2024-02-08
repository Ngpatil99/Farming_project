import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Chart } from "react-google-charts";
// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Dashboard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };

  const dataOld = [
    ["Name", "Popularity"],
    ["Cesar", 250],
    ["Rachel", 4200],
    ["Patrick", 2900],
    ["Eric", 8200],
  ];

  const dataNew = [
    ["Name", "Popularity"],
    ["Cesar", 370],
    ["Rachel", 600],
    ["Patrick", 700],
    ["Eric", 1500],
  ];

  const diffdata = {
    old: dataOld,
    new: dataNew,
  };

  const ScatterData = [
    ["x", "dogs"],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
  ];

  const chartEvents: ReactGoogleChartEvent[] = [
    {
      eventName: "select",
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 1) {
          const [selectedItem] = selection;
          const dataTable = chartWrapper.getDataTable();
          const { row, column } = selectedItem;

          console.log("You selected:", {
            row,
            column,
            value: dataTable?.getValue(row, column),
          });
        }
      },
    },
  ];


  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  const rows = [
    [
      "Research",
      "Find sources",
      null,
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      100,
      null,
    ],
    [
      "Write",
      "Write paper",
      "write",
      null,
      new Date(2015, 0, 9),
      3 * 24 * 60 * 60 * 1000,
      25,
      "Research,Outline",
    ],
    [
      "Cite",
      "Create bibliography",
      "write",
      null,
      new Date(2015, 0, 7),
      1 * 24 * 60 * 60 * 1000,
      20,
      "Research",
    ],
    [
      "Complete",
      "Hand in paper",
      "complete",
      null,
      new Date(2015, 0, 10),
      1 * 24 * 60 * 60 * 1000,
      0,
      "Cite,Write",
    ],
    [
      "Outline",
      "Outline paper",
      "write",
      null,
      new Date(2015, 0, 6),
      1 * 24 * 60 * 60 * 1000,
      100,
      "Research",
    ],
  ];

  const GanttData = [columns, ...rows];

  const GanttOptions = {
    gantt: {
      criticalPathEnabled: true,
      criticalPathStyle: {
        stroke: "#e64a19",
        strokeWidth: 5,
      },
    },
  };
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={5}>
        <Grid item xs={3} >
          <Item className="changeColor">
            <h6><b>No Of Service's</b></h6>
            <span style={{ color: 'red', fontSize: 'x-large' }}><b>39</b></span>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item className="changeColor">
            <h6><b>No Of Application's</b></h6>
            <span style={{ color: 'blue', fontSize: 'x-large' }}><b>766</b></span>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item className="changeColor">
            <h6><b>No Of Customer's</b></h6>
            <span style={{ color: 'blue', fontSize: 'x-large' }}><b>17</b></span>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item className="changeColor">
            <h6><b>No Of Franchise</b></h6>
            <span style={{ color: 'red', fontSize: 'x-large' }}><b>38</b></span>
          </Item>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              diffdata={diffdata}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width="100%"
              height="400px"
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Chart
              chartType="ScatterChart"
              width="80%"
              height="400px"
              data={ScatterData}
              chartEvents={chartEvents}
            />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Chart
              chartType="Gantt"
              width="100%"
              height="400px"
              data={GanttData}
              options={GanttOptions}
            />
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;