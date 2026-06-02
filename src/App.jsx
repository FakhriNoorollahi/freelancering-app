import AppProvider from "./providers/AppProvider";
import Router from "./Router/Router";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
