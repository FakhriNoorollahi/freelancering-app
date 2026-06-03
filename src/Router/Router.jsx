import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "@/pages/auth/AuthPage";
import CompleteProfilePage from "@/pages/auth/CompleteProfilePage";
import FreelancerDashboardPage from "@/pages/freelancer/FreelancerDashboardPage";
import FreelancerLayoutPage from "@/pages/freelancer/FreelancerLayoutPage";
import FreelancerProjectsPage from "@/pages/freelancer/FreelancerProjectsPage";
import FreelancerProposalsPage from "@/pages/freelancer/FreelancerProposalsPage";
import OwnerDashboardPage from "@/pages/owner/OwnerDashboardPage";
import OwnerLayoutPage from "@/pages/owner/OwnerLayoutPage";
import OwnerProjectsPage from "@/pages/owner/OwnerProjectsPage";
import OwnerProposalsPage from "@/pages/owner/OwnerProposalsPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import AdminLayoutPage from "@/pages/admin/AdminLayoutPage";
import AdminProjectsPage from "@/pages/admin/AdminProjectsPage";
import AdminProposalsPage from "@/pages/admin/AdminProposalsPage";
import AdminUsersPage from "@/pages/admin/AdminUsersPage";
import NotFoundPage from "@/pages/NotFoundPage";
import ProtectRoute from "./ProtectedRoute";

function Router() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/complete-profile" element={<CompleteProfilePage />} />
      <Route
        path="/owner"
        element={
          <ProtectRoute>
            <OwnerLayoutPage />
          </ProtectRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<OwnerDashboardPage />} />
        <Route path="projects" element={<OwnerProjectsPage />} />
        <Route path="projects/:id" element={<OwnerProposalsPage />} />
      </Route>
      <Route
        path="/freelancer"
        element={
          <ProtectRoute>
            <FreelancerLayoutPage />
          </ProtectRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<FreelancerDashboardPage />} />
        <Route path="projects" element={<FreelancerProjectsPage />} />
        <Route path="proposals" element={<FreelancerProposalsPage />} />
      </Route>
      <Route
        path="/admin"
        element={
          <ProtectRoute>
            <AdminLayoutPage />
          </ProtectRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="projects" element={<AdminProjectsPage />} />
        <Route path="proposals" element={<AdminProposalsPage />} />
        <Route path="users" element={<AdminUsersPage />} />
      </Route>
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default Router;
