const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/tickers`)
    .then((res) => res.json())
    .then((json) => json.slice(0, 100));
}

export function fetchCoinByCoinId(id: string) {
  return fetch(`${BASE_URL}/tickers/${id}`).then((res) => res.json());
}

export function fetchCoinOHLCVHistorical(id: string) {
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${id}`).then(
    (res) => res.json()
  );
}
