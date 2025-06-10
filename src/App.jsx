import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";
import EnterCode from "./pages/auth/EnterCode";
import NewPassword from "./pages/auth/NewPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="entercode" element={<EnterCode />} />
        <Route path="newpassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
