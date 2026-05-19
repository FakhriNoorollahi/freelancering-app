import { Navigate, Route, Routes } from "react-router-dom";
import AppProvider from "./providers/AppProvider";
import AuthPage from "./pages/auth/AuthPage";
import CompleteProfilePage from "./pages/auth/CompleteProfilePage";
import OwnerLayoutPage from "./pages/owner/OwnerLayoutPage";
import OwnerProjectsPage from "./pages/owner/OwnerProjectsPage";
import OwnerDashboardPage from "./pages/owner/OwnerDashboardPage";
import OwnerProjectPage from "./pages/owner/OwnerProjectPage";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/owner" element={<OwnerLayoutPage />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<OwnerDashboardPage />} />
          <Route path="projects" element={<OwnerProjectsPage />} />
          <Route path="projects/:id" element={<OwnerProjectPage />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
