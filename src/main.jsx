import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RegisterPage from "./Pages/register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ProductsPage from "./Pages/products.jsx";
import { ProfilePage } from "./Pages/profile.jsx";
import DetailProductPage from "./Pages/detailProduct.jsx";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";
// import { Provider } from "react-redux";
// import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    exact: true,
    path: "/",
    element: <div>Hello World!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <TotalPriceProvider>
        <RouterProvider router={router} />
      </TotalPriceProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
