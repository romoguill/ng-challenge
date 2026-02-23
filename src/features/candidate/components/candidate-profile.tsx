import { useQuery } from "@tanstack/react-query";
import getCandidateQueryOptions from "../api/queries";

export function CandidateProfile() {
  const { data, isLoading, error } = useQuery(
    getCandidateQueryOptions(import.meta.env.VITE_CANDIDATE_EMAIL),
  );

  if (isLoading) {
    return <CandidateProfileSkeleton />;
  }

  if (error) {
    return <CandidateProfileError message={error.message} />;
  }

  if (!data) {
    return (
      <article className="bg-brand-secondary rounded-xl border border-brand-secondary shadow-sm p-6 flex flex-col gap-4 mb-8">
        <h2 className="text-lg font-semibold text-brand-primary">
          Datos no encontrados
        </h2>
        <p className="text-sm text-brand-secondary-foreground">
          Candidato con email {import.meta.env.VITE_CANDIDATE_EMAIL} no
          encontrado
        </p>
      </article>
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

function CandidateProfileSkeleton() {
  return (
    <article className="bg-brand-secondary rounded-xl border border-brand-secondary shadow-sm p-6 flex flex-col gap-4 mb-8">
      <div className="h-6 w-48 bg-brand-secondary-foreground/20 rounded-md animate-pulse" />
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="h-4 w-24 bg-brand-secondary-foreground/20 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </article>
  );
}

function CandidateProfileError({ message }: { message: string }) {
  return (
    <article className="bg-brand-secondary rounded-xl border border-red-200 shadow-sm p-6 flex flex-col gap-4 mb-8">
      <h2 className="text-lg font-semibold text-red-700">
        Error al cargar tus datos
      </h2>
      <p className="text-sm text-brand-secondary-foreground">{message}</p>
    </article>
  );
}
