import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import fetchCoins from "../api";

const Header = styled.header``;
const Title = styled.h1`
  text-align: center;
  font-size: 56px;
`;

const CoinWrapper = styled.main``;
const CoinList = styled.ul``;
const CoinItem = styled.li``;

export default function Coins() {
  const query = useQuery({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  console.log(query);

  return (
    <>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinWrapper></CoinWrapper>
    </>
  );
}
