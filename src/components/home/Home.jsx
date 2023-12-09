import React from "react";
import background from "/images/home.jpg";
import Button from "../shared/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../shared/header/Header";
import Layout from "../Layout";
const Home = () => {
  // const navigate = useNavigate();
  return (
    <Layout>
      <div
        className="relative min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center items-center h-screen">
          <NavLink to={"/getdata"}>
            <Button className="py-4 px-6 hover:bg-red-600 text-xl text-white duration-300">
             Get Data
            </Button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
