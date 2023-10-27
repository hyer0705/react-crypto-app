import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import makeImgPath from "../utils/makePath";
import { fetchCoins } from "../api";
import { makeTitle } from "../utils/makeTitle";

const Header = styled.header``;
const Title = styled.h1`
  text-align: center;
  font-size: 56px;
`;

const CoinWrapper = styled.main``;
const CoinList = styled.ul`
  margin-top: 3rem;
`;

const CoinItem = styled.li`
  font-size: 24px;
  margin-bottom: 1.5rem;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 0.5rem;
  overflow: hidden;
  a {
    width: 100%;
    padding: 1.5rem 3rem;
    display: block;
    display: flex;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 36px;
  margin-right: 1.5rem;
  background-color: inherit;
`;
const CoinTitle = styled.span`
  background-color: inherit;
`;

interface ICoins {
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

export default function Coins() {
  const { data: coinList, isLoading } = useQuery<ICoins[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <>
      <Helmet>
        <title>{makeTitle("Home")}</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinWrapper>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <CoinList>
            {coinList?.map((coin) => (
              <CoinItem key={coin.id}>
                <Link to={`/${coin.id}`} state={{ coinName: coin.name }}>
                  <Img src={makeImgPath(coin.symbol.toLowerCase())} />
                  <CoinTitle>{coin.name}</CoinTitle>
                </Link>
              </CoinItem>
            ))}
          </CoinList>
        )}
      </CoinWrapper>
    </>
  );
}
