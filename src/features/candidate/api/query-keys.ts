export const candidateQueryKeys = {
  getOne: (email: string) => ["candidate", email] as const,
};
