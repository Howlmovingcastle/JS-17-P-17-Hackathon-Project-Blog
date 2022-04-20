import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./containers/Footer/Footer";
import SotialMedia from "./components/SocialMedia/SotialMedia";
import SignIn from "./components/Sign In/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Activate from "./components/Activate/Activate";

import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import LoginNewPass from "./components/LoginNewPass/LoginNewPass";
import AddPost from "./components/AddPost/AddPost";
import PostsList from "./components/PostsList/PostsList";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/signin",
      element: <SignIn />,
      id: 2,
    },
    {
      link: "/signup",
      element: <SignUp />,
      id: 2,
    },
    {
      link: "/activate",
      element: <Activate />,
    },
    {
      link: "/forgot_assword",
      element: <ForgotPassword />,
    },
    {
      link: "/new_password",
      element: <LoginNewPass />,
    },
    {
      link: "/add",
      element: <AddPost />,
    },
    {
      link: "/list",
      element: <PostsList />,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
    },
    {
      link: "/details/:id",
      element: <Details />,
    },
  ];

  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}

        {ADMIN_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoutes;
