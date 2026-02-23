import { queryOptions } from "@tanstack/react-query";
import { CANDIDATE_API_PATH } from "../../job-openings/constants";
import { candidateQueryKeys } from "./query-keys";

export interface Candidate {
  uuid: string;
  candidateId: string;
  applicationId: string;
  firstName: string;
  lastName: string;
  email: string;
}

const fetchCandidate = async (email: string): Promise<Candidate> => {
  const url = new URL(CANDIDATE_API_PATH, import.meta.env.VITE_NG_API_URL);
  url.searchParams.set("email", email);

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(
        `Tus datos no han podido ser obtenidos, intenta nuevamente: ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error al obtener datos del candidato");
  }
};

const getCandidateQueryOptions = (email: string) =>
  queryOptions({
    queryKey: candidateQueryKeys.getOne(email),
    queryFn: () => fetchCandidate(email),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

export default getCandidateQueryOptions;
