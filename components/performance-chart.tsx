"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TradingViewChart } from "./price-chart";
import { CryptoData } from "@/lib/types";
interface PriceChartProps {
  crypto: CryptoData;
}

export default function PriceChart({ crypto }: PriceChartProps) {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>{crypto.name} Price Chart (USD)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-8">
          <TradingViewChart crypto={crypto} />
        </div>
      </CardContent>
    </Card>
  );
}
