export default function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((json) => json.slice(0, 100));
}
