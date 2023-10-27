import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 3rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InfoItem = styled.div`
  width: 48%;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 0.5rem;
  h1 {
    font-size: 16px;
    margin-bottom: 0.8rem;
  }
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;
const InfoTitle = styled.h1`
  font-weight: 700;
  border-bottom: 3px solid ${(props) => props.theme.colors.card};
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

export default function Price() {
  const {
    state: { priceData },
  } = useLocation();

  /**
   * To Do
   * 여기서도 data를 react query를 통해 fetch를 할 것인지?
   * state 값 넘겨주는 거 없으면 하는게 맞다고 생각
   */

  return (
    <Main>
      <InfoTitle>Volume</InfoTitle>
      <InfoWrapper>
        <InfoItem>
          <h1>Volume (24h)</h1>
          <span>{priceData.volume_24h.toFixed(2)}</span>
        </InfoItem>
        <InfoItem>
          <h1>% Change (24h)</h1>
          <span>{priceData.volume_24h_change_24h} %</span>
        </InfoItem>
      </InfoWrapper>

      <InfoTitle>Market Cap</InfoTitle>
      <InfoWrapper>
        <InfoItem>
          <h1>Market Cap</h1>
          <span>{priceData.market_cap}</span>
        </InfoItem>
        <InfoItem>
          <h1>% Change (24h)</h1>
          <span>{priceData.market_cap_change_24h} %</span>
        </InfoItem>
      </InfoWrapper>

      <InfoTitle>ATH Price</InfoTitle>
      <InfoWrapper>
        <InfoItem>
          <h1>ATH</h1>
          <span>$ {`${priceData.ath_price.toFixed(2)}`}</span>
        </InfoItem>
        <InfoItem>
          <h1>% Change</h1>
          <span>{priceData.percent_from_price_ath} %</span>
        </InfoItem>
      </InfoWrapper>
    </Main>
  );
}
