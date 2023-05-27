import { Routes, Route } from "react-router";
import { Main } from "../pages/Main";
import { Profile } from "../pages/Profile";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { Not404 } from "../pages/Not404";

export const RoutesHolder = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<Not404 />} />
      </Routes>
    </div>
  );
};
