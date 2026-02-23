import "./index.css";
import { CandidateProfile } from "./features/candidate/components/candidate-profile";
import { JobOpeningsList } from "./features/job-openings/components/job-openings-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/header";
import { MainContainer } from "./components/main-container";
import { SectionTitle } from "./components/section-title";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="bg-background text-foreground">
        <SectionTitle
          title="Nimble Gravity - Bolsa de Trabajo"
          subtitle="Posiciones abiertas"
        />
        <MainContainer>
          <CandidateProfile />
          <JobOpeningsList />
        </MainContainer>
      </main>
    </QueryClientProvider>
  );
}

export default App;
