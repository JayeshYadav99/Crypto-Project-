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
        <div className="mt-4 flex items-center gap-4 text-sm overflow-x-auto pb-2">
          <button className="rounded-full bg-[#0052FF]/10 px-3 py-1 font-medium text-[#0052FF] whitespace-nowrap">
            1D
          </button>
          <button className="rounded-full px-3 py-1 font-medium text-muted-foreground hover:bg-muted whitespace-nowrap">
            7D
          </button>
          <button className="rounded-full px-3 py-1 font-medium text-muted-foreground hover:bg-muted whitespace-nowrap">
            1M
          </button>
          <button className="rounded-full px-3 py-1 font-medium text-muted-foreground hover:bg-muted whitespace-nowrap">
            3M
          </button>
          <button className="rounded-full px-3 py-1 font-medium text-muted-foreground hover:bg-muted whitespace-nowrap">
            6M
          </button>
          <button className="rounded-full px-3 py-1 font-medium text-muted-foreground hover:bg-muted whitespace-nowrap">
            1Y
          </button>
          <button className="rounded-full px-3 py-1 font-medium text-muted-foreground hover:bg-muted whitespace-nowrap">
            ALL
          </button>
        </div>
        <div className="mt-8">
          <TradingViewChart crypto={crypto} />
        </div>
      </CardContent>
    </Card>
  );
}
