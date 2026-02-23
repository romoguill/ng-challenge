import type { SubmitEventHandler } from "react";
import { useState } from "react";
import { applyToJobOpening, type JobOpening } from "../api/queries";
import { useMutation, useQuery } from "@tanstack/react-query";
import getCandidateQueryOptions from "../../candidate/api/queries";

export function JobOpeningItem({ job }: { job: JobOpening }) {
  const [repoUrl, setRepoUrl] = useState("");
  const { data: candidate } = useQuery(
    getCandidateQueryOptions(import.meta.env.VITE_CANDIDATE_EMAIL),
  );
  const [validationError, setValidationError] = useState<string | null>(null);
  const {
    mutate: apply,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: applyToJobOpening,
  });

  const isValidGitHubRepoUrl = (url: string) => {
    // Either not github url or not parseable as URL
    try {
      const parsedUrl = new URL(url);
      if (
        parsedUrl.protocol === "https:" &&
        (parsedUrl.hostname === "github.com" ||
          parsedUrl.hostname === "www.github.com")
      ) {
        return true;
      }
    } catch {
      return false;
    }

    return false;
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setValidationError(null);

    // Validations
    if (repoUrl.trim() === "") {
      setValidationError("La URL de GitHub es obligatoria");
      return;
    }

    if (!isValidGitHubRepoUrl(repoUrl)) {
      setValidationError("La URL de GitHub no es válida");
      return;
    }

    if (!candidate) {
      setValidationError("Faltan datos del candidato");
      return;
    }

    apply({
      uuid: candidate.uuid,
      jobId: job.id,
      candidateId: candidate.candidateId,
      repoUrl,
    });

    setValidationError(null);
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
          {validationError && (
            <p className="text-sm text-red-500">{validationError}</p>
          )}
          {isSuccess && (
            <p className="text-sm text-green-500">
              Postulación enviada correctamente
            </p>
          )}
          {isError && (
            <p className="text-sm text-red-500">
              Error al enviar la postulación
            </p>
          )}
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
