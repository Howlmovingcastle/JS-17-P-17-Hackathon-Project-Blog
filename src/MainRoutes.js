import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "./components/Auth/Auth";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./containers/Footer/Footer";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Single from "./pages/singlePage/Single";
import Favorites from "./components/Favorites/Favorites";
import Cart from "./components/Cart/Cart";
import Chat from "./components/Chat/Chat/Chat";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/authpage",
      element: <Auth />,
      id: 2,
    },
    {
      link: "/payment",
      element: <PaymentForm />,
      id: 3,
    },
    {
      link: "/postdetails",
      element: <Single />,
      id: 4,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 6,
    },
    {
      link: "/favorites",
      element: <Favorites />,
      id: 7,
    },
    {
      link: "/chatroom",
      element: <Chat />,
      id: 8,
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
