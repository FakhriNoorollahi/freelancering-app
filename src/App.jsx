import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import OwnerPage from "./pages/OwnerPage";
import AppProvider from "./providers/AppProvider";
import CompleteProfile from "./features/auth/CompleteProfile";
import OwnerLayout from "./features/owner/OwnerLayout";
import OwnerProjects from "./features/owner/OwnerProjects";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index path="dashboard" element={<OwnerPage />} />
          <Route index path="projects" element={<OwnerProjects />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
