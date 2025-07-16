import { Route, Routes } from "react-router";
import WelcomePage from "./Pages/WelcomePage";
import OnboardPage from "./Pages/Onboard";
import SignupPage from "./Pages/SignupPage";
import SigninPage from "./Pages/SigninPage";
import ForgotPasswordPage from "./Pages/ForgotPassPage";

function App() {
  return (
    <>
      <div> 
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="onboard" element={<OnboardPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
