import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Import components
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";
import { AppMain } from "./components/AppMain";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  );
}
export default App;
