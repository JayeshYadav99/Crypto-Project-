export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  market_data: {
    current_price: {
      usd: number;
      inr: number;
    };
    price_change_percentage_24h: number;
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    circulating_supply: number;
    total_supply: number;
  };
}

export interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    small: string;
    large: string;
    data: {
      price: number;
      price_change_percentage_24h: {
        usd: number;
      };
      sparkline: string;
    };
  };
}
