import { notFound } from "next/navigation";
import { SECTOR_HUBS } from "@/data/sector-hubs";
import SectorHubView from "@/components/SectorHubView";

export function generateStaticParams() {
  return Object.keys(SECTOR_HUBS).map((sectorId) => ({ sectorId }));
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sectorId: string }>;
}) {
  const { sectorId } = await params;
  if (!(sectorId in SECTOR_HUBS)) notFound();
  return <SectorHubView sectorId={sectorId} />;
}
