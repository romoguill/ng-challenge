import { CandidateProfile } from "./features/candidate/components/candidate-profile";
import { JobOpeningsList } from "./features/job-openings/components/job-openings-list";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CandidateProfile />
      <JobOpeningsList />
    </QueryClientProvider>
  );
}

export default App;
