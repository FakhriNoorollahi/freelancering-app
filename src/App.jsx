// import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AppProvider from "./providers/AppProvider";
import CompleteProfile from "./features/auth/CompleteProfile";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
