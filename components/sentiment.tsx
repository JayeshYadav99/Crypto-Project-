"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Newspaper } from "lucide-react";

export function Sentiment() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CardTitle>Sentiment</CardTitle>
          <Info className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="mb-4 text-lg font-semibold">Key Events</h3>
        <div className="overflow-auto">
          <div className="flex gap-4 pb-4">
            <Card className="min-w-[400px] bg-blue-50">
              <CardContent className="flex gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Newspaper className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, quisquam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="min-w-[400px] bg-green-50">
              <CardContent className="flex gap-4 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                  <Newspaper className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, quisquam. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <h3 className="mb-4 mt-6 text-lg font-semibold">
          Analyst Estimates
          <Info className="ml-2 inline-block h-4 w-4 text-muted-foreground" />
        </h3>
        <div className="flex items-center gap-8">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50 text-2xl font-bold text-green-600">
            76%
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-muted-foreground">Buy</span>
              <div className="h-2 flex-1 rounded-full bg-green-500" />
              <span className="w-8 text-sm">76%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-muted-foreground">Hold</span>
              <div className="h-2 w-[8%] rounded-full bg-gray-300" />
              <span className="w-8 text-sm">8%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-muted-foreground">Sell</span>
              <div className="h-2 w-[16%] rounded-full bg-red-500" />
              <span className="w-8 text-sm">16%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
