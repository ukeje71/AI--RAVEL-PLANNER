import { BrowserRouter, Route, Routes } from "react-router"; // Correct import
import WelcomePage from "./Pages/WelcomePage";
import OnboardPage from "./Pages/Onboard";
import SignupPage from "./Pages/auth/SignupPage";
import SigninPage from "./Pages/auth/SigninPage";
import ForgotPasswordPage from "./Pages/auth/ForgotPassPage";
import CheckemailPage from "./Pages/auth/CheckemailPage";
import Homescreen from "./Pages/dashboard/Homescreen";
import Apartmentpage from "./Pages/Services/Apartmentpage";
import ApartmentCard from "./Pages/Services/ApartmentCard";
import TourPage from "./Pages/Services/TourPage";
import Airline from "./Pages/Services/AirlinePage";
import BookingForm from "./Pages/Services/Bookingform";
import BookingConfirmation from "./components/UI/BookingConfirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/onboard" element={<OnboardPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/check-email" element={<CheckemailPage />} />
      <Route path="/home" element={<Homescreen />} />
      <Route path="/apartment" element={<Apartmentpage />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/airline" element={<Airline />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />

      <Route path="/apartment/details/:id" element={<ApartmentCard />} />
    </Routes>
  );
}

export default App;
