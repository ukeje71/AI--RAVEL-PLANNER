import { Route, Routes } from "react-router";
import WelcomePage from "./Pages/Welcomepage";
import OnboardPage from "./Pages/Onboard";

function App() {
  return (
    <>
      <div> 
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="onboard" element={<OnboardPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
