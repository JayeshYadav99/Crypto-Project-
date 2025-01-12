"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TrendingCoin } from "@/lib/types";

interface YouMayLikeProps {
  trendingCoins: TrendingCoin[];
}

function CoinCard({ coin }: { coin: TrendingCoin }) {
  const priceChangeColor =
    parseFloat(coin.item.data.price_change_percentage_24h.usd.toFixed(2)) >= 0
      ? "text-green-500"
      : "text-red-500";

  return (
    <Card className="min-w-[250px]">
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <Image
            src={coin.item.small}
            alt={coin.item.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="font-medium">{coin.item.symbol}</span>
          <span className={`flex items-center text-xs ${priceChangeColor}`}>
            {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
          </span>
        </div>
        <div className="mt-2 font-bold">{coin.item.data.price}</div>
        <div className="mt-2 h-[60px]">
          <Image
            src={coin.item.data.sparkline}
            alt={`${coin.item.name} price graph`}
            width={200}
            height={60}
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function YouMayLike({ trendingCoins }: YouMayLikeProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {trendingCoins.map((coin) => (
              <CoinCard key={coin.item.id} coin={coin} />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Trending Coins</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-4">
            {trendingCoins.map((coin) => (
              <CoinCard key={coin.item.id} coin={coin} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
