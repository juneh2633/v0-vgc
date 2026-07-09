"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import { Download, Loader2, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { ChartData } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const sanitizeFileName = (value: string) =>
  value
    .replace(/[\\/:*?"<>|]/g, "_")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);

const getImageExtension = (contentType: string | null) => {
  if (!contentType) return "png";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("gif")) return "gif";
  return "png";
};

export function JacketSearchDownloader() {
  const [query, setQuery] = useState("");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const { data, isLoading } = useSWR<{ chartData: ChartData[] }>(
    "/api/songs",
    fetcher
  );

  const charts = useMemo(
    () =>
      (data?.chartData || []).flatMap((song) =>
        song.chart.map((chart) => ({
          id: `${song.songIdx}-${chart.chartIdx}`,
          title: song.title,
          artist: song.artist,
          level: chart.level,
          type: chart.type,
          jacket: chart.jacket,
        }))
      ),
    [data]
  );

  const filteredCharts = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return charts.slice(0, 30);

    return charts
      .filter(
        (chart) =>
          chart.title.toLowerCase().includes(keyword) ||
          chart.artist.toLowerCase().includes(keyword)
      )
      .slice(0, 50);
  }, [charts, query]);

  const handleDownloadJacket = async (chart: (typeof charts)[number]) => {
    if (!chart.jacket) return;

    setDownloadingId(chart.id);
    try {
      const response = await fetch(
        `/api/image-proxy?url=${encodeURIComponent(chart.jacket)}`
      );
      if (!response.ok) throw new Error("Failed to download jacket");

      const blob = await response.blob();
      const extension = getImageExtension(response.headers.get("content-type"));
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${sanitizeFileName(chart.title)}_${chart.type}_jacket.${extension}`;
      link.click();
      URL.revokeObjectURL(url);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>곡 Jacket 검색 다운로드</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-9"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="곡명 또는 아티스트를 검색하세요"
            />
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12 text-muted-foreground">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              곡 목록을 불러오는 중...
            </div>
          ) : (
            <div className="grid gap-3">
              {filteredCharts.map((chart) => (
                <div
                  key={chart.id}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <img
                    src={chart.jacket || "/placeholder.svg"}
                    alt={`${chart.title} jacket`}
                    className="h-16 w-16 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1 text-left">
                    <div className="truncate font-medium">{chart.title}</div>
                    <div className="truncate text-sm text-muted-foreground">
                      {chart.artist}
                    </div>
                    <div className="mt-1 flex gap-2">
                      <Badge variant="secondary">Lv{chart.level}</Badge>
                      <Badge variant="outline">{chart.type}</Badge>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadJacket(chart)}
                    disabled={!chart.jacket || downloadingId === chart.id}
                  >
                    {downloadingId === chart.id ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="mr-2 h-4 w-4" />
                    )}
                    다운로드
                  </Button>
                </div>
              ))}

              {filteredCharts.length === 0 && (
                <div className="rounded-lg border p-8 text-center text-muted-foreground">
                  검색 결과가 없습니다.
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
