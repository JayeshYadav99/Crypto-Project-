'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CryptoData } from '@/lib/types'

interface FundamentalsProps {
  crypto: CryptoData
}

export function Fundamentals({ crypto }: FundamentalsProps) {
  const fundamentals = [
    {
      label: 'Market Cap',
      value: `$${crypto.market_data.market_cap.usd.toLocaleString()}`,
    },
    {
      label: '24h Trading Volume',
      value: `$${crypto.market_data.total_volume.usd.toLocaleString()}`,
    },
    {
      label: 'Circulating Supply',
      value: `${crypto.market_data.circulating_supply.toLocaleString()} ${crypto.symbol.toUpperCase()}`,
    },
    {
      label: 'Total Supply',
      value: `${crypto.market_data.total_supply.toLocaleString()} ${crypto.symbol.toUpperCase()}`,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fundamentals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {fundamentals.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between border-b py-3"
            >
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

