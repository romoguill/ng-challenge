import { useQuery } from "@tanstack/react-query";
import getCandidateQueryOptions from "../api/queries";

export function CandidateProfile() {
  const { data, isLoading, error } = useQuery(
    getCandidateQueryOptions(import.meta.env.VITE_CANDIDATE_EMAIL),
  );
  if (isLoading) {
    return <div>Cargando datos del candidato...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div>
        Candidato con email {import.meta.env.VITE_CANDIDATE_EMAIL} no encontrado
      </div>
    );
  }

  return (
    <article className="bg-brand-secondary rounded-xl border border-brand-secondary shadow-sm p-6 flex flex-col gap-4 mb-8">
      <h2 className="text-lg font-semibold text-brand-primary">
        Tus datos personales
      </h2>
      <p className="text-sm text-brand-secondary-foreground">
        Nombre: <span className="font-semibold">{data.firstName}</span>
      </p>
      <p className="text-sm text-brand-secondary-foreground">
        Apellido: <span className="font-semibold">{data.lastName}</span>
      </p>
      <p className="text-sm text-brand-secondary-foreground">
        Email: <span className="font-semibold">{data.email}</span>
      </p>
    </article>
  );
}
