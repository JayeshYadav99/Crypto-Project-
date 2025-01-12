"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingCoin } from "@/lib/types";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

interface TrendingCoinsProps {
  coins: TrendingCoin[];
}

export function TrendingCoins({ coins }: TrendingCoinsProps) {
  console.log(JSON.stringify(coins[0].item, null, 2));
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Coins (24h)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {coins.slice(0, 3).map((coin) => (
            <div
              key={coin.item.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Image
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-medium">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </span>
              </div>
              <div
                className={`flex items-center space-x-1 rounded-sm bg-green-100 px-2 py-1 text-sm ${
                  coin.item.data.price_change_percentage_24h.usd >= 0
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                <TrendingUp className="h-3 w-3" />
                <span>
                  {Math.abs(
                    coin.item.data.price_change_percentage_24h.usd
                  ).toFixed(2)}
                  %
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
