import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/general/Layout";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";
import EnterCode from "./pages/auth/EnterCode";
import NewPassword from "./pages/auth/NewPassword";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./utils/ProtectedRoute";

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
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
