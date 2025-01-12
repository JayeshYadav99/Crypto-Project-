"use client";

import { useEffect, useRef } from "react";
import { CryptoData } from "@/lib/types";

declare global {
  interface Window {
    TradingView: {
      widget: new (config: any) => any;
    };
  }
}

interface TradingViewChartProps {
  crypto: CryptoData;
}

export function TradingViewChart({ crypto }: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = initializeWidget;

    document.head.appendChild(script);

    return () => {
      if (
        widgetRef.current &&
        widgetRef.current.iframe &&
        widgetRef.current.iframe.parentNode
      ) {
        widgetRef.current.iframe.parentNode.removeChild(
          widgetRef.current.iframe
        );
        widgetRef.current = null;
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.options.symbol = `${crypto.symbol.toUpperCase()}USD`;
      widgetRef.current.reload();
    }
  }, [crypto]);

  function initializeWidget() {
    console.log("Initializing TradingView widget", crypto);
    if (containerRef.current && window.TradingView) {
      widgetRef.current = new window.TradingView.widget({
        autosize: true,
        symbol: `${crypto?.symbol?.toUpperCase()}USD`,
        withdateranges: true,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_legend: true,
        save_image: false,
        container_id: containerRef.current.id,
        hide_volume: true,
        backgroundColor: "rgba(255, 255, 255, 1)",
        gridColor: "rgba(242, 242, 242, 0.06)",
        hide_side_toolbar: true,
      });
    }
  }

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget" ref={containerRef} className="h-[400px]" />
    </div>
  );
}
