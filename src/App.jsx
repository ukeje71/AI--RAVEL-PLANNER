import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import WelcomePage from "./Pages/WelcomePage";
import OnboardPage from "./Pages/Onboard";
import SignupPage from "./Pages/auth/SignupPage";
import SigninPage from "./Pages/auth/SigninPage";
import ForgotPasswordPage from "./Pages/auth/ForgotPassPage";
import CheckemailPage from "./Pages/auth/CheckemailPage";
import Homescreen from "./Pages/dashboard/Homescreen";
import Apartmentpage from "./Pages/Services/Apartmentpage";
import ProductsCard from "./Pages/Services/ProductsCard";
import TourPage from "./Pages/Services/TourPage";
import Airline from "./Pages/Services/AirlinePage";
import BookingForm from "./Pages/Services/Bookingform";
import AirlinesForm from "./Pages/Services/AirlinesForm";
import PaymentMethods from "./Pages/Services/PaymentMethods";
import AddCard from "./Pages/Services/AddCard";
import TourForm from "./Pages/Services/TourForm";
import Saved from "./Pages/dashboard/Saved";
import BottomNavigation from "./components/UI/BottomNavigation";
import AccountMenu from "./Pages/dashboard/AccountMenu";
import { ToastContainer } from "react-toastify";
import Triplist from "./components/Saved/Triplist";
import Tourlist from "./components/Saved/Tourlist";
import Apartmentslist from "./components/Saved/Apartmentslist";
import Airlinelist from "./components/Saved/Airlinelist";

function App() {
  const location = useLocation();
  const showBottomNav =
    location.pathname === "/home" ||
    location.pathname === "/saved" ||
    location.pathname === "/accountmenu";

  return (
    <>
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
        <Route path="/airlineform" element={<AirlinesForm />} />
        <Route path="/paymentmethods" element={<PaymentMethods />} />
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/accountmenu" element={<AccountMenu />} />
        <Route path="/tourform" element={<TourForm />} />
        <Route path="/triplist" element={<Triplist/>} />
        <Route path="/tourlist" element={<Tourlist/>} />
        <Route path="/apartmentlist" element={<Apartmentslist/>} />
        <Route path="/airlinelist" element={<Airlinelist/>} />
        <Route path="/productdetails/:id" element={<ProductsCard />} />
      </Routes>
      <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar closeOnClick draggable pauseOnHover theme="light" />
      {showBottomNav && <BottomNavigation />}
    </>
  );
}

export default App;
