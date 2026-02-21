import { useQuery } from "@tanstack/react-query";
import getJobOpeningsQueryOptions from "../api/queries";

export function JobOpeningsList() {
  const { data, isLoading, error } = useQuery(getJobOpeningsQueryOptions);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data?.map((job: any) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
