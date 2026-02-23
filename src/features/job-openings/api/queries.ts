import { queryOptions } from "@tanstack/react-query";
import jobOpeningsQueryKeys from "./query-keys";
import {
  APPLY_TO_JOB_OPENING_API_PATH,
  JOB_OPENINGS_API_PATH,
} from "../constants";

export interface JobOpening {
  id: string;
  title: string;
}

const fetchJobOpenings = async (): Promise<JobOpening[]> => {
  const url = new URL(JOB_OPENINGS_API_PATH, import.meta.env.VITE_NG_API_URL);

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(
        `Error al obtener las posiciones abiertas: ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch {
    throw new Error("Error al obtener las posiciones abiertas");
  }
};

export const getJobOpeningsQueryOptions = queryOptions({
  queryKey: jobOpeningsQueryKeys.all,
  queryFn: fetchJobOpenings,
  staleTime: 1000 * 60 * 10, // 10 minutes
});

interface ApplyToJobOpeningDTO {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
  applicationId: string; // Not in challenge requirements, got it from bad request response
}

export const applyToJobOpening = async (data: ApplyToJobOpeningDTO) => {
  const url = new URL(
    APPLY_TO_JOB_OPENING_API_PATH,
    import.meta.env.VITE_NG_API_URL,
  );

  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error al aplicar a la posición: ${response.statusText}`);
    }
    return response.json();
  } catch {
    throw new Error("Error al aplicar a la posición");
  }
};
