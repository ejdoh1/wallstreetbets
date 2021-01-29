import "./App.css";
import React, { useState, useEffect } from "react";
import { TimeSeries } from "pondjs";
import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
  Resizable,
  styler,
  Legend,
} from "react-timeseries-charts";

function App() {
  const [series, setSeries] = useState(null);
  const [columns, setColumns] = useState(null);
  const [style, setStyle] = useState(null);
  const [legend, setLegend] = useState(null);
  const [most, setMost] = useState(null);
  const [selection, setSelection] = useState();
  const [highlight, setHighlight] = useState();
  useEffect(() => {
    fetch(
      "https://43m0bmc7g2.execute-api.ap-southeast-2.amazonaws.com/dev/counts"
    )
      .then((response) => response.json())
      .then((data) => {
        let most = 0;
        let columns = [];
        columns.push("time");
        for (const d of data) {
          for (const dd in d) {
            if (dd === "ts_end") continue;
            if (dd === "timestamp") continue;
            if (parseInt(d[dd]) <= 20) continue;
            if (parseInt(d[dd]) > most) most = parseInt(d[dd]);
            if (!columns.includes(dd)) columns.push(dd);
          }
        }
        setMost(most);
        let points_all = [];
        for (const d of data) {
          let points = [];
          points.push(parseInt(d["timestamp"]) * 1000);
          for (const c of columns) {
            if (c === "time") continue;
            let val = d[c];
            if (val === undefined) val = 0;
            points.push(parseInt(val));
          }
          points_all.push(points);
        }
        points_all = points_all.sort(function (a, b) {
          return a[0] - b[0];
        });
        setSeries(
          new TimeSeries({
            name: "tickers",
            columns: columns,
            points: points_all,
          })
        );
        setColumns(columns);
        setStyle(styler(columns, "Paired"));
        setLegend(columns.slice(1).map((d) => ({ key: d, label: d })));
      });
  }, []);

  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <h1>r/wallstreetbets</h1>
      {series === null ? (
        <></>
      ) : (
        <Resizable>
          <ChartContainer
            timeRange={series.timerange()}
            style={{
              background: "#201d1e",
              borderRadius: 8,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#232122",
            }}
            padding={20}
            paddingTop={5}
            paddingBottom={0}
            enableDragZoom
            onBackgroundClick={() => setSelection(null)}
            enablePanZoom={true}
          >
            <ChartRow height="500">
              <YAxis id="axis1" type="linear" min={0} max={most} width="60" />
              <Charts>
                <LineChart
                  axis="axis1"
                  interpolation="curveBasis"
                  series={series}
                  columns={columns}
                  style={style}
                  highlight={highlight}
                  onHighlightChange={(highlight) => setHighlight(highlight)}
                  selection={selection}
                  onSelectionChange={(selection) => setSelection(selection)}
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>
      )}
      {legend === null ? (
        <></>
      ) : (
        <Legend
          categories={legend}
          style={style}
          type="dot"
          highlight={highlight}
          onHighlightChange={(highlight) => setHighlight(highlight)}
          selection={selection}
          onSelectionChange={(selection) => setSelection(selection)}
        />
      )}
    </div>
  );
}

export default App;
