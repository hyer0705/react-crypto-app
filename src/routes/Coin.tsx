import { Outlet, useLocation, useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinByCoinId } from "../api";

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 56px;
`;
const GoHome = styled.span`
  display: inline-block;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 0;

  svg {
    width: 28px;
    background-color: inherit;
  }
`;

interface ICoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}

export default function Coin() {
  const {
    state: { coinName },
  } = useLocation();
  const { coinId } = useParams();

  const { data: coinInfo, isLoading } = useQuery<ICoinInfo>({
    queryKey: ["fetchCoin", coinId],
    queryFn: () => fetchCoinByCoinId(coinId),
  });

  return (
    <>
      <Header>
        <GoHome>
          <Link to="/">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
          </Link>
        </GoHome>
        <Title>
          {isLoading ? "Loading..." : coinName ? coinName : coinInfo?.name}
        </Title>
      </Header>
      <Outlet />
    </>
  );
}
