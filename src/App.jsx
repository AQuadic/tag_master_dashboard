import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
