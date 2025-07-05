import { useEffect, useState } from "react";
import Home from "./pages/home/app";
import Login from "./pages/login/App";
import { checkAuth } from "./middlewares/authMiddleware";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await checkAuth();
      setIsAuthenticated(result);
    })();
  }, []);

  if (isAuthenticated === null) return <div className="text-center mt-10">جاري التحميل...</div>;

  return isAuthenticated ? <Home /> : <Login />;
}

export default App;
