import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
