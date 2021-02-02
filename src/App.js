import "./App.css";
import React, { useState } from "react";
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
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import useInterval from "use-interval";
import TimeAgo from "react-timeago";

function App() {
  const [series, setSeries] = useState(null);
  const [columns, setColumns] = useState(null);
  const [seriesPrices, setSeriesPrices] = useState(null);
  const [columnsPrices, setColumnsPrices] = useState(null);
  const [style, setStyle] = useState(null);
  const [legend, setLegend] = useState(null);
  const [most, setMost] = useState(null);
  const [mostPrices, setMostPrices] = useState(null);
  const [selection, setSelection] = useState();
  const [highlight, setHighlight] = useState();
  const [timerange, setTimerange] = useState();
  const [updated, setUpdated] = useState();
  useInterval(
    () => {
      fetch("https://wallstreetbets.s3-ap-southeast-2.amazonaws.com/wsb.json")
        .then((response) => response.json())
        .then((rawData) => {
          setUpdated(rawData.updatedAt);
          const data = rawData.data;
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
          const series = new TimeSeries({
            name: "tickers",
            columns: columns,
            points: points_all,
          });
          setTimerange(series.range());
          setSeries(series);
          setColumns(columns);
          setStyle(styler(columns, "Paired"));
          setLegend(columns.slice(1).map((d) => ({ key: d, label: d })));
        });
    },
    1000 * 60 * 5,
    true
  );

  useInterval(
    () => {
      fetch(
        "https://wallstreetbets.s3-ap-southeast-2.amazonaws.com/prices.json"
      )
        .then((response) => response.json())
        .then((rawData) => {
          setUpdated(rawData.updatedAt);
          const data = rawData.data;
          let mostPrice = 0;
          let columnsPrices = [];
          columnsPrices.push("time");
          for (const d of data) {
            for (const dd in d) {
              if (dd === "timestamp") continue;
              if (parseInt(d[dd]) > mostPrice) mostPrice = parseInt(d[dd]);
              if (!columnsPrices.includes(dd)) columnsPrices.push(dd);
            }
          }
          setMostPrices(mostPrice);
          let points_all = [];
          for (const d of data) {
            let points = [];
            points.push(parseInt(d["timestamp"]) * 1000);
            for (const c of columnsPrices) {
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
          const seriesPrices = new TimeSeries({
            name: "tickers",
            columns: columnsPrices,
            points: points_all,
          });
          setSeriesPrices(seriesPrices);
          setColumnsPrices(columnsPrices);
        });
    },
    1000 * 60 * 5,
    true
  );

  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <h1>r/wallstreetbets comments</h1>
      <h2>Ticker mention counts and stock price</h2>
      {series === null || seriesPrices === null ? (
        <></>
      ) : (
        <Resizable>
          <ChartContainer
            timeRange={timerange}
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
            onBackgroundClick={() => setSelection(null)}
            enableDragZoom
            onTimeRangeChanged={(timerange) => {
              setTimerange(timerange);
            }}
          >
            <ChartRow height="300" >
              <YAxis id="axis1" type="linear" min={0} max={most} width="60" label="Ticker mention counts"/>
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
            <ChartRow height="200" >
              <YAxis
                id="price"
                type="linear"
                min={0}
                max={mostPrices}
                width="60"
                label="Stock Price ($)"
              />
              <Charts>
                <LineChart
                  axis="price"
                  interpolation="curveBasis"
                  series={seriesPrices}
                  columns={columnsPrices}
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
      <div>
        Auto update interval 10 min, last updated <> </>
        <TimeAgo date={updated * 1000} />
      </div>
      <Feedback email projectId="60162ca5d28c6c00043d7747" />
    </div>
  );
}

export default App;
