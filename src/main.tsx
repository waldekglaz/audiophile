import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import "./index.css";
import { ModalProvider } from "./context/ModalContext/ModalContext.tsx";

import GlobalStyles from "./styles/GlobalStyles.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/:category/:product", element: <ProductPage /> },
      { path: "/:category", element: <CategoryPage /> },
      // {
      //   path: "/:category",
      //   element: <CategoryPage />,
      //   children: [{ path: "/:categpry/:product", element: <ProductPage /> }],
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
