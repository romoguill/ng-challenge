import type { SubmitEventHandler } from "react";
import { useState } from "react";
import type { JobOpening } from "../api/queries";

export function JobOpeningItem({ job }: { job: JobOpening }) {
  const [repoUrl, setRepoUrl] = useState("");

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // TODO: Final step
  };

  return (
    <article className="bg-white rounded-xl border border-brand-secondary shadow-sm p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-brand-primary">{job.title}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor={`repo-url-${job.id}`}
            className="text-sm font-medium text-brand-secondary-foreground"
          >
            GitHub URL
          </label>
          <input
            id={`repo-url-${job.id}`}
            type="url"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/usuario/repo"
            className="w-full border border-brand-secondary rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
        <button
          type="submit"
          className="bg-brand-primary text-brand-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity self-end"
        >
          Aplicar
        </button>
      </form>
    </article>
  );
}
