"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function AboutBitcoin() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Bitcoin</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-bold">What is Bitcoin?</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading
            volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
            currently -7.93% from its 7-day all-time high of $18,366.66, and
            3.40% from its 7-day all-time low of $16,394.75. BTC has a
            circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit laoreet
            tellus pellentesque. Diam id et lectus urna et tellus aliquam dictum
            at. Viverra diam suspendisse enim facilisi sit ut. Quam sollicitudin
            fermentum sapien morbi sodales morbi ultrices. Urna vulputate
            sagittis vitae facilisi diam ut. Quam scelerisque fermentum sapien
            morbi sodales odio sed rhoncus.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit laoreet
            tellus pellentesque. Diam id et lectus urna et tellus aliquam dictum
            at. Viverra diam suspendisse enim facilisi sit ut. Quam sollicitudin
            fermentum sapien morbi sodales morbi ultrices.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Already Holding Bitcoin?</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="overflow-hidden bg-gradient-to-br from-green-500 to-blue-500">
              <CardContent className="flex items-center gap-4 p-4">
                <Image
                  src="/assets/calculate-profits.png"
                  alt="Calculate Profits"
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold text-white">
                    Calculate your Profits
                  </h4>
                  <Button
                    variant="secondary"
                    className="w-full bg-white hover:bg-gray-100"
                  >
                    Check Now →
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-br from-orange-500 to-red-500">
              <CardContent className="flex items-center gap-4 p-4">
                <Image
                  src="/assets/calculate-tax-liability.png"
                  alt="Calculate Tax Liability"
                  width={120}
                  height={120}
                  className="h-24 w-24 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold text-white">
                    Calculate your tax liability
                  </h4>
                  <Button
                    variant="secondary"
                    className="w-full bg-white hover:bg-gray-100"
                  >
                    Check Now →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
