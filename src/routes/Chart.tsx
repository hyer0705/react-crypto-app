import styled from "styled-components";
import ApexChart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinOHLCVHistorical } from "../api";

const ChartWrapper = styled.div`
  margin-top: 3rem;
`;

interface ICoinOHLCV {
  close: string;
  high: string;
  low: string;
  market_cap: number;
  open: string;
  time_close: number;
  time_open: number;
  volume: string;
}

export default function Chart() {
  const { coinId } = useParams();
  const { data, isLoading } = useQuery<ICoinOHLCV[]>({
    queryKey: ["fetchCoinOHLCV", coinId],
    queryFn: () => fetchCoinOHLCVHistorical(coinId || ""),
  });

  const series = [
    {
      name: "candle",
      data: data?.map((v) => ({
        x: new Date(v.time_close),
        y: [
          parseFloat(v.open),
          parseFloat(v.high),
          parseFloat(v.low),
          parseFloat(v.close),
        ],
      })),
    },
  ];

  return (
    <ChartWrapper>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          series={series}
          options={{
            theme: { mode: "dark" },
            chart: {
              type: "candlestick",
              height: 400,
              id: "candlestick",
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
              type: "datetime",
              categories: data?.map((v) => v.time_close),
            },
            yaxis: { show: false },
          }}
          type="candlestick"
          height={400}
        />
      )}
    </ChartWrapper>
  );
}
