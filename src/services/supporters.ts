import { api } from "@/services/api";

type SupporterRecord = {
  id: string;
  referredByActivistCode?: string | null;
};

export type ReferralMetric = {
  code: string;
  total: number;
};

export type ReferralMetricsResponse = {
  totalSupporters: number;
  withReferral: number;
  withoutReferral: number;
  byCode: ReferralMetric[];
  isDemoData?: boolean;
};

const demoSupporters: SupporterRecord[] = [
  { id: "1", referredByActivistCode: "ATIV-2041" },
  { id: "2", referredByActivistCode: "ATIV-2041" },
  { id: "3", referredByActivistCode: "ATIV-7777" },
  { id: "4", referredByActivistCode: "ATIV-1002" },
  { id: "5", referredByActivistCode: "ATIV-2041" },
  { id: "6", referredByActivistCode: "ATIV-7777" },
  { id: "7", referredByActivistCode: "ATIV-9999" },
  { id: "8", referredByActivistCode: "ATIV-1002" },
  { id: "9", referredByActivistCode: null },
  { id: "10", referredByActivistCode: null },
  { id: "11", referredByActivistCode: "ATIV-7777" },
  { id: "12", referredByActivistCode: "ATIV-2041" },
];

function buildMetrics(supporters: SupporterRecord[]): ReferralMetricsResponse {
  const buckets = new Map<string, number>();
  let withReferral = 0;

  supporters.forEach((supporter) => {
    const code = supporter.referredByActivistCode?.trim();
    if (!code) return;
    withReferral += 1;
    buckets.set(code, (buckets.get(code) ?? 0) + 1);
  });

  const byCode = Array.from(buckets.entries())
    .map(([code, total]) => ({ code, total }))
    .sort((a, b) => b.total - a.total);

  return {
    totalSupporters: supporters.length,
    withReferral,
    withoutReferral: supporters.length - withReferral,
    byCode,
  };
}

export async function getReferralMetrics(): Promise<ReferralMetricsResponse> {
  try {
    const { data } = await api.get<ReferralMetricsResponse>("/supporters/referrals/metrics");
    return data;
  } catch {
    return {
      ...buildMetrics(demoSupporters),
      isDemoData: true,
    };
  }
}
