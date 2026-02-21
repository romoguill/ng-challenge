import { queryOptions } from "@tanstack/react-query";
import jobOpeningsQueryKeys from "./query-keys";
import { JOB_OPENINGS_API_PATH } from "../constants";

const fetchJobOpenings = async () => {
  const url = new URL(JOB_OPENINGS_API_PATH, import.meta.env.VITE_NG_API_URL);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Error al obtener las posiciones abiertas");
  }

  const data = await response.json();

  return data;
};

const getJobOpeningsQueryOptions = queryOptions({
  queryKey: jobOpeningsQueryKeys.all,
  queryFn: fetchJobOpenings,
});

export default getJobOpeningsQueryOptions;
