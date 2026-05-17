import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import OwnerPage from "./pages/OwnerPage";
import AppProvider from "./providers/AppProvider";
import CompleteProfile from "./features/auth/CompleteProfile";
import OwnerLayout from "./features/owner/OwnerLayout";
import OwnerProjects from "./features/owner/OwnerProjects";
import OwenrProject from "./features/owner/ownerProject";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerPage from "./pages/FreelancerPage";
import FreelancerProjects from "./features/freelancer/FreelancerProjects";
import FreelancerProposalas from "./features/freelancer/FreelancerProposals";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index path="dashboard" element={<OwnerPage />} />
          <Route path="projects" element={<OwnerProjects />} />
          <Route path="projects/:id" element={<OwenrProject />} />
        </Route>
        <Route path="/freelancer" element={<FreelancerLayout />}>
          <Route index path="dashboard" element={<FreelancerPage />} />
          <Route path="projects" element={<FreelancerProjects />} />
          <Route path="proposals" element={<FreelancerProposalas />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
