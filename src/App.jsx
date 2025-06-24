import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/general/Layout";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";
import EnterCode from "./pages/auth/EnterCode";
import NewPassword from "./pages/auth/NewPassword";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import CreateProfile from "./pages/CreateProfile";
import PaymentPlan from "./pages/PaymentPlan";
import MyAccount from "./pages/MyAccount";
import MyProducts from "./pages/MyProducts";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/entercode" element={<EnterCode />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="createProfile" element={<CreateProfile />} />
          <Route path="paymentPlan" element={<PaymentPlan />} />
          <Route path="myAccount" element={<MyAccount />} />
          <Route path="myProducts" element={<MyProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
