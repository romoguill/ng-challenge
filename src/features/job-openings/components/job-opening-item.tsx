import type { JobOpening } from "../api/queries";

export function JobOpeningItem({ job }: { job: JobOpening }) {
  return (
    <div>
      <p>{job.id}</p>
      <p>{job.title}</p>
    </div>
  );
}
