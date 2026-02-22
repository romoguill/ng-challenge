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
    <div>
      <h1>Candidate Profile</h1>
      <p>Nombre: {data.firstName}</p>
      <p>Apellido: {data.lastName}</p>
      <p>Email: {data.email}</p>
      <p>ID del candidato: {data.candidateId}</p>
      <p>ID de la aplicación: {data.applicationId}</p>
      <p>UUID: {data.uuid}</p>
    </div>
  );
}
