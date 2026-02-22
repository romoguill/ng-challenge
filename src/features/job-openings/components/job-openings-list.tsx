import { useQuery } from "@tanstack/react-query";
import getJobOpeningsQueryOptions, { type JobOpening } from "../api/queries";
import { JobOpeningItem } from "./job-opening-item";

export function JobOpeningsList() {
  const { data, isLoading, error } = useQuery(getJobOpeningsQueryOptions);

  if (isLoading) {
    return <div>Cargando posiciones abiertas...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data?.map((job: JobOpening) => (
        <JobOpeningItem key={job.id} job={job} />
      ))}
    </div>
  );
}
