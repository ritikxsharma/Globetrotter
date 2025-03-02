import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const allowedPath = "/game";
  const [pathname, setPathname] = useState(window.location.pathname);
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    console.log("here");
    
    if (window.location.pathname === "/") {
      window.history.replaceState({}, "", allowedPath);
      setPathname(allowedPath);
    }
  }, []);

  const isValidPath =
    pathname === allowedPath ||
    (pathname === allowedPath && searchParams.toString());

  return <>{isValidPath ? <LandingPage /> : <NotFoundPage />}</>;
}

export default App;
