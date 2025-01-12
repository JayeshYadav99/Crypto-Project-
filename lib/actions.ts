"use server";

import { CryptoData, TrendingCoin } from "./types";

export async function getCryptoData(id: string): Promise<CryptoData> {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`
  );
  return response.json();
}

export async function getTrendingCoins(): Promise<TrendingCoin[]> {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const data = await response.json();

  return data.coins;
}
