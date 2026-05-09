import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

function AppProvider({ children }) {
  return (
    <BrowserRouter>
      <Toaster position="top left" toastOptions={{ duration: 5000 }} />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
}

export default AppProvider;
