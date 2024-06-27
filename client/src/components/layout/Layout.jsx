import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("key")) {
      navigate("/");
    } else {
      navigate("/product/new");
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-green- flex">
      <Header />

      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
