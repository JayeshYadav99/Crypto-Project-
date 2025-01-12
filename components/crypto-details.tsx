"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { getCryptoData, getTrendingCoins } from "@/lib/actions";
import { CryptoData, TrendingCoin } from "@/lib/types";
import PerformanceChart from "./performance-chart";
import { Fundamentals } from "./fundamentals";
import { TrendingCoins } from "./trending-coins";
import { Sentiment } from "./sentiment";
import { AboutBitcoin } from "./about-bitcoin";
import { Tokenomics } from "./tokenomics";
import { Team } from "./team";
import Image from "next/image";
import { CryptoCardSkeleton } from "./crypto-card-skeleton";
import { YouMayLike } from "./you-may-like";
import loading from "@/app/[coinId]/loading";
import { Skeleton } from "./ui/skeleton";
interface CryptoDetailsProps {
  coinId: string;
}

export function CryptoDetails({ coinId }: CryptoDetailsProps) {
  const [crypto, setCrypto] = useState<CryptoData | null>(null);
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cryptoData, trending] = await Promise.all([
          getCryptoData(coinId),
          getTrendingCoins(),
        ]);
        setCrypto(cryptoData);
        setTrendingCoins(trending);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load cryptocurrency data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [coinId]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Cryptocurrencies</span>
            <span>{">"}</span>
            <span className="text-foreground">
              {loading ? <Skeleton className="h-4 w-20" /> : crypto?.name}
            </span>
          </div>
          {loading ? (
            <CryptoCardSkeleton />
          ) : crypto ? (
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                    alt="Bitcoin"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <h1 className="text-2xl font-bold">
                    {crypto?.name} ({crypto?.symbol?.toUpperCase()})
                  </h1>
                  <span className="rounded-lg bg-gray-500/10 px-3 py-1 text-sm">
                    Rank #1
                  </span>
                </div>
                <div className="mt-6">
                  <div className="flex items-baseline space-x-4">
                    <span className="text-3xl font-bold">
                      $
                      {crypto &&
                        crypto.market_data.current_price.usd.toLocaleString()}
                    </span>
                    <span
                      className={`flex items-center rounded-md bg-green-100 px-2 py-1 text-sm ${
                        crypto.market_data.price_change_percentage_24h >= 0
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {crypto.market_data.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="mr-1 h-4 w-4" />
                      ) : (
                        <TrendingDown className="mr-1 h-4 w-4" />
                      )}
                      {Math.abs(
                        crypto.market_data.price_change_percentage_24h
                      ).toFixed(2)}
                      %
                    </span>
                    <span className="text-sm text-muted-foreground">(24H)</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ₹{crypto.market_data.current_price.inr.toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ) : null}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b bg-transparent p-0">
              <TabsTrigger
                value="overview"
                className="rounded-none border-b-2 border-transparent px-6 py-2 data-[state=active]:border-primary"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="fundamentals"
                className="rounded-none border-b-2 border-transparent px-6 py-2 data-[state=active]:border-primary"
              >
                Fundamentals
                <Info className="ml-2 h-4 w-4 text-muted-foreground" />
              </TabsTrigger>
              <TabsTrigger
                value="news"
                className="rounded-none border-b-2 border-transparent px-6 py-2 data-[state=active]:border-primary"
              >
                News Insights
              </TabsTrigger>
              <TabsTrigger
                value="sentiments"
                className="rounded-none border-b-2 border-transparent px-6 py-2 data-[state=active]:border-primary"
              >
                Sentiments
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="rounded-none border-b-2 border-transparent px-6 py-2 data-[state=active]:border-primary"
              >
                Team
              </TabsTrigger>
              <TabsTrigger
                value="technicals"
                className="rounded-none border-b-2 border-transparent px-6 py-2 data-[state=active]:border-primary"
              >
                Technicals
              </TabsTrigger>
              <TabsTrigger
                value="tokenomics"
                className="rounded-none border-b-2 border-transparent px-6 py-2 data-[state=active]:border-primary"
              >
                Tokenomics
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-6 space-y-6">
              {loading ? (
                <>
                  <Skeleton className="h-[400px] w-full" />
                  <Skeleton className="h-[200px] w-full" />
                  <Skeleton className="h-[300px] w-full" />
                  <Skeleton className="h-[400px] w-full" />
                  <Skeleton className="h-[200px] w-full" />
                  <Skeleton className="h-[300px] w-full" />
                </>
              ) : crypto ? (
                <>
                  {crypto && <PerformanceChart crypto={crypto} />}
                  <Fundamentals crypto={crypto} />
                  <Sentiment />
                  <AboutBitcoin />
                  <Tokenomics />
                  <Team />
                </>
              ) : null}
            </TabsContent>
            <TabsContent value="fundamentals" className="mt-6">
              {loading ? (
                <Skeleton className="h-[200px] w-full" />
              ) : crypto ? (
                <Fundamentals crypto={crypto} />
              ) : null}
            </TabsContent>
            <TabsContent value="tokenomics" className="mt-6">
              {loading ? (
                <Skeleton className="h-[200px] w-full" />
              ) : (
                <Tokenomics />
              )}
            </TabsContent>
            <TabsContent value="team" className="mt-6">
              {loading ? <Skeleton className="h-[300px] w-full" /> : <Team />}
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Card className="bg-[#0052FF] text-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">
                Get Started with KoinX for FREE
              </h2>
              <p className="mt-4 text-sm leading-relaxed">
                With our range of features that you can equip for free, KoinX
                allows you to be more educated and aware of your tax reports.
              </p>
              <div className="mt-6 flex justify-center">
                <Image
                  src="/assets/frame.png"
                  alt="KoinX Features"
                  width={180}
                  height={180}
                  className="h-auto w-auto"
                />
              </div>
              <button className="mt-6 w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-black hover:bg-gray-100">
                Get Started for FREE →
              </button>
            </CardContent>
          </Card>
          {loading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : (
            <TrendingCoins coins={trendingCoins} />
          )}
        </div>
      </div>
      {loading ? (
        <Skeleton className="h-[200px] w-full" />
      ) : (
        <YouMayLike trendingCoins={trendingCoins} />
      )}
    </div>
  );
}
