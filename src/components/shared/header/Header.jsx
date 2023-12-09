import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "../Button";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../slices/authSlice";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.userId);
  React.useEffect(() => {}, [authStatus]);
  const authData = 1;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-black w-full fixed top-0 flex justify-between px-4 py-3 items-center z-[1000]">
      <Link
        to="/"
        className="text-4xl font-extrabold tracking-loose text-white"
      >
        Hostel Manager
      </Link>
      <div className="text-red w-[500px] md:block hidden ">
        <ul className="flex justify-evenly  text-white ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/studentregister"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Register Student
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            contact us
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Our Recommendations
          </NavLink>
        </ul>
      </div>
      {authStatus ? (
        <div className="flex justify-between gap-4">
          <Button onClick={() => logOut()} variant={"outlined"}>
            Logout
          </Button>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{authData[0]}</Avatar>
        </div>
      ) : (
        <div className="flex gap-4">
          <Button onClick={() => navigate("/signin")} variant={"outlined"}>
            Login
          </Button>
          <Button onClick={() => navigate("/signup")} variant={"outlined"}>
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
