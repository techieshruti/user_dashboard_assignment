import Dashboard from "./pages/Dashboard";
import UserCardDetails from "./pages/UserCardDetails";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserCardDetails />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
