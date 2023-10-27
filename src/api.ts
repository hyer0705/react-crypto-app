export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((json) => json.slice(0, 100));
}

export function fetchCoinByCoinId(id: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${id}`).then((res) =>
    res.json()
  );
}
