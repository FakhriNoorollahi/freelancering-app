import { Navigate, Route, Routes } from "react-router-dom";
import AppProvider from "./providers/AppProvider";
import AuthPage from "./pages/auth/AuthPage";
import CompleteProfilePage from "./pages/auth/CompleteProfilePage";
import OwnerLayoutPage from "./pages/owner/OwnerLayoutPage";
import OwnerProjectsPage from "./pages/owner/OwnerProjectsPage";
import OwnerDashboardPage from "./pages/owner/OwnerDashboardPage";
import OwnerProposalsPage from "./pages/owner/OwnerProposalsPage";
import FreelancerPageLayout from "./pages/freelancer/FreelancerLayoutPage";
import FreelancerDashboardPage from "./pages/freelancer/FreelancerDashboardPage";
import FreelancerProposalsPage from "./pages/freelancer/FreelancerProposalsPage";
import FreelancerProjectsPage from "./pages/freelancer/FreelancerProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminLayoutPage from "./pages/admin/AdminLayoutPage";
import AdminProjectsPage from "./pages/admin/AdminProjectsPage";
import AdminProposalsPage from "./pages/admin/AdminProposalsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

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
          <Route path="projects/:id" element={<OwnerProposalsPage />} />
        </Route>
        <Route path="/freelancer" element={<FreelancerPageLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<FreelancerDashboardPage />} />
          <Route path="projects" element={<FreelancerProjectsPage />} />
          <Route path="proposals" element={<FreelancerProposalsPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayoutPage />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="projects" element={<AdminProjectsPage />} />
          <Route path="proposals" element={<AdminProposalsPage />} />
          <Route path="users" element={<AdminUsersPage />} />
        </Route>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
