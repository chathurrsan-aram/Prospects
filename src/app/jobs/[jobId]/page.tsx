import { notFound } from "next/navigation";
import { JOBS, getJob } from "@/data/jobs";
import JobProfile from "@/components/JobProfile";

export function generateStaticParams() {
  return JOBS.map((j) => ({ jobId: j.id }));
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ jobId: string }>;
}) {
  const { jobId } = await params;
  const job = getJob(jobId);
  if (!job) notFound();
  return <JobProfile jobId={jobId} />;
}
