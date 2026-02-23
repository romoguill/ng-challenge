import { useQuery } from "@tanstack/react-query";
import getJobOpeningsQueryOptions, { type JobOpening } from "../api/queries";
import { JobOpeningItem } from "./job-opening-item";

export function JobOpeningsList() {
  const { data, isLoading, error } = useQuery(getJobOpeningsQueryOptions);

  if (isLoading) {
    return <JobOpeningsListSkeleton />;
  }

  if (error) {
    return <JobOpeningsListError message={error.message} />;
  }

  return (
    <div className="flex flex-col gap-4">
      {data?.map((job: JobOpening) => (
        <JobOpeningItem key={job.id} job={job} />
      ))}
    </div>
  );
}

function JobOpeningsListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {[1, 2].map((i) => (
        <article
          key={i}
          className="bg-white rounded-xl border border-brand-secondary shadow-sm p-6 flex flex-col gap-4"
        >
          <div className="h-6 w-48 bg-brand-secondary-foreground/20 rounded-md animate-pulse" />
          <div className="flex flex-col gap-3">
            <div className="h-4 w-20 bg-brand-secondary-foreground/20 rounded animate-pulse" />
            <div className="h-10 w-full border border-brand-secondary rounded-md bg-brand-secondary/50 animate-pulse" />
            <div className="h-9 w-20 self-end bg-brand-secondary-foreground/20 rounded-md animate-pulse" />
          </div>
        </article>
      ))}
    </div>
  );
}

function JobOpeningsListError({ message }: { message: string }) {
  return (
    <article className="bg-white rounded-xl border border-red-200 shadow-sm p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-red-700">
        Error al cargar posiciones
      </h3>
      <p className="text-sm text-brand-secondary-foreground">{message}</p>
    </article>
  );
}
