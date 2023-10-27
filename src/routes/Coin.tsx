import { Outlet, useLocation, useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinByCoinId } from "../api";
import makeImgPath from "../utils/makePath";

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
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

const Main = styled.main`
  margin: 3rem 0;
`;
const InfoCard = styled.div`
  background: ${(props) => props.theme.colors.card};
  padding: 1rem 3rem;
  border-radius: 0.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 52px;
    margin-right: 1rem;
  }
`;
const InfoSubText = styled.span`
  color: ${(props) => props.theme.colors.subText};
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 1rem;
`;
const RankText = styled.span`
  background-color: ${(props) => props.theme.colors.activeTab};
  color: ${(props) => props.theme.colors.activeText};
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
`;
const PriceText = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;
const SupplyText = styled.span`
  font-weight: 700;
  margin-right: 0.5rem;

  &:nth-child(odd) {
    color: ${(props) => props.theme.colors.subText};
  }
  &:nth-child(2) {
    margin-right: 1rem;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuItem = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  width: 48%;
  border-radius: 0.5rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.activeTab};
    color: ${(props) => props.theme.colors.activeText};
  }
  a {
    width: 100%;
    padding: 1rem 1.5rem;
    text-align: center;
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
              strokeWidth="1.5"
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
      <Main>
        {isLoading ? (
          "Loading..."
        ) : (
          <InfoCard>
            <InfoItem>
              <img
                src={makeImgPath(coinInfo?.symbol.toLowerCase() || "")}
                alt={coinInfo?.name}
              />
              <InfoSubText>{coinInfo?.name} Price</InfoSubText>
              <RankText>Rank {coinInfo?.rank}</RankText>
            </InfoItem>
            <InfoItem>
              <PriceText>${coinInfo?.quotes.USD.price?.toFixed(2)}</PriceText>
            </InfoItem>
            <InfoItem>
              <SupplyText>total supply: </SupplyText>
              <SupplyText>${coinInfo?.total_supply}</SupplyText>
              <SupplyText>max supply: </SupplyText>
              <SupplyText>${coinInfo?.max_supply}</SupplyText>
            </InfoItem>
          </InfoCard>
        )}
      </Main>
      <MenuWrapper>
        <MenuItem>
          <Link to={`/${coinId}/chart`} state={{ coinName }}>
            Chart
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={`/${coinId}/price`} state={{ coinName }}>
            Price
          </Link>
        </MenuItem>
      </MenuWrapper>
      <Outlet />
    </>
  );
}
