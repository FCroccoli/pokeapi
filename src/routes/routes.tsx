import { Route, Routes } from "react-router-dom";
import Display from "../pages/home";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Display />} />
    </Routes>
  );
};

export default RoutesMain;
